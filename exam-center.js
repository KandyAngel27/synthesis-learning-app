// ============================================
// EXAM CENTER
// Cumulative, spaced, mastery-tracked exams for the
// Medical Billing & Coding curriculum (and any book).
//
// Pedagogy: retrieval practice + interleaving + spaced
// repetition. Every exam is a different QUERY over one
// tagged question bank with per-question mastery stats.
//
// Exam modes:
//   - lesson:        one lesson's questions (gating, must pass 80%)
//   - unit:          one book's unlocked questions
//   - comprehensive: ALL unlocked questions, weighted to new + missed
//   - daily:         spaced-review queue (due + missed first)
//
// Gating (STRICT): lesson N+1 stays locked until lesson N's
// Lesson Quiz is passed at >= 80%.
// ============================================

// The full Medical Billing, Coding & Health Information curriculum,
// in the order lessons should be unlocked (strict gating follows this order).
const CURRICULUM_BOOK_IDS = [
    // Phase 1 — Billing & Coding core
    'him-insurance-101',
    'him-revenue-cycle',
    'him-coding-fundamentals',
    'him-claim-forms',
    'him-compliance',
    // Phase 2 — Health Information Management, data & tech
    'him-foundations',
    'him-statistics',
    'him-data-analytics',
    'him-health-it',
    'him-quality-reporting'
];
// Back-compat alias
const BILLING_BOOK_IDS = CURRICULUM_BOOK_IDS;

const EXAM_PASS_THRESHOLD = 0.8; // 80% to pass a lesson and unlock the next

class ExamCenter {
    constructor(app) {
        this.app = app;
        this.session = null;
        this.ensureStore();
    }

    // ---------- Persistent store ----------
    ensureStore() {
        if (!APP_DATA.user) APP_DATA.user = {};
        if (!APP_DATA.user.examStats) APP_DATA.user.examStats = {};       // qid -> stat
        if (!APP_DATA.user.lessonExamPass) APP_DATA.user.lessonExamPass = {}; // "bookId::lessonId" -> {score,total,pct,passed,date}
        if (!APP_DATA.user.examHistory) APP_DATA.user.examHistory = [];   // [{mode,title,score,total,pct,date}]
    }

    save() {
        if (typeof saveProgress === 'function') saveProgress();
    }

    // ---------- Helpers ----------
    lessonKey(bookId, lessonId) { return `${bookId}::${lessonId}`; }

    getCurriculumBooks() {
        const books = [];
        APP_DATA.categories.forEach(cat => {
            (cat.books || []).forEach(b => {
                if (BILLING_BOOK_IDS.includes(b.id)) books.push(b);
            });
        });
        // Keep curriculum order
        books.sort((a, b) => BILLING_BOOK_IDS.indexOf(a.id) - BILLING_BOOK_IDS.indexOf(b.id));
        return books;
    }

    // A lesson is unlocked if it's the first lesson of the first book,
    // or the PREVIOUS lesson (in curriculum order) has been passed.
    getOrderedLessons() {
        const ordered = [];
        this.getCurriculumBooks().forEach(book => {
            (book.lessonList || []).forEach((lesson, idx) => {
                ordered.push({ book, lesson, indexInBook: idx });
            });
        });
        return ordered;
    }

    isLessonPassed(bookId, lessonId) {
        const rec = APP_DATA.user.lessonExamPass[this.lessonKey(bookId, lessonId)];
        return !!(rec && rec.passed);
    }

    isLessonUnlocked(bookId, lessonId) {
        const ordered = this.getOrderedLessons();
        const pos = ordered.findIndex(o => o.book.id === bookId && String(o.lesson.id) === String(lessonId));
        if (pos <= 0) return true; // very first lesson always unlocked
        const prev = ordered[pos - 1];
        return this.isLessonPassed(prev.book.id, prev.lesson.id);
    }

    lessonHasContent(lesson) {
        if (lesson.examQuestions && lesson.examQuestions.length) return true;
        return (lesson.cards || []).some(c => c.type === 'quiz' && c.question && c.options);
    }

    // ---------- Question harvesting ----------
    // Build the tagged question bank for a single lesson.
    harvestLessonQuestions(book, lesson) {
        const out = [];
        // 1) Dedicated lesson question bank (preferred)
        (lesson.examQuestions || []).forEach((q, i) => {
            if (!q.question || !q.options) return;
            out.push({
                id: q.id || `${book.id}::${lesson.id}::eq${i}`,
                bookId: book.id, bookTitle: book.title,
                lessonId: lesson.id, lessonTitle: lesson.title,
                qType: q.type || 'recall',
                difficulty: q.difficulty || 'medium',
                question: q.question,
                options: q.options,
                explanation: q.explanation || ''
            });
        });
        // 2) Inline quiz cards in the lesson
        (lesson.cards || []).forEach((card, i) => {
            if (card.type === 'quiz' && card.question && card.options) {
                const id = `${book.id}::${lesson.id}::card${i}`;
                if (out.some(o => o.id === id)) return;
                out.push({
                    id,
                    bookId: book.id, bookTitle: book.title,
                    lessonId: lesson.id, lessonTitle: lesson.title,
                    qType: 'recall',
                    difficulty: 'medium',
                    question: card.question,
                    options: card.options,
                    explanation: card.explanation || ''
                });
            }
        });
        return out;
    }

    // Pool of questions across a scope, restricted to UNLOCKED lessons only
    // (you are only ever tested on material you've unlocked).
    harvestPool(scope) {
        const pool = [];
        const books = this.getCurriculumBooks();
        books.forEach(book => {
            if (scope.bookId && book.id !== scope.bookId) return;
            (book.lessonList || []).forEach(lesson => {
                if (!this.lessonHasContent(lesson)) return;
                if (!this.isLessonUnlocked(book.id, lesson.id)) return;
                if (scope.lessonId && String(lesson.id) !== String(scope.lessonId)) return;
                pool.push(...this.harvestLessonQuestions(book, lesson));
            });
        });
        return pool;
    }

    // The most-recently-unlocked lesson key (newest material gets a boost)
    newestUnlockedLessonKey() {
        const ordered = this.getOrderedLessons();
        let key = null;
        for (const o of ordered) {
            if (this.isLessonUnlocked(o.book.id, o.lesson.id) && this.lessonHasContent(o.lesson)) {
                key = this.lessonKey(o.book.id, o.lesson.id);
            }
        }
        return key;
    }

    // ---------- Mastery stats ----------
    getStat(qid) {
        return APP_DATA.user.examStats[qid] || { seen: 0, correct: 0, wrong: 0, streak: 0, lastResult: null, lastSeen: null };
    }

    recordAnswer(qid, isCorrect) {
        const s = this.getStat(qid);
        s.seen += 1;
        if (isCorrect) { s.correct += 1; s.streak = (s.streak || 0) + 1; s.lastResult = 'correct'; }
        else { s.wrong += 1; s.streak = 0; s.lastResult = 'wrong'; }
        s.lastSeen = new Date().toISOString();
        APP_DATA.user.examStats[qid] = s;
    }

    masteryOf(qid) {
        const s = this.getStat(qid);
        if (s.seen === 0) return 0;
        return s.correct / s.seen;
    }

    // Selection weight: missed > new > shaky > mastered. Newest lesson boosted.
    weightFor(q, newestKey) {
        const s = this.getStat(q.id);
        let w;
        if (s.seen === 0) w = 2.0;                       // never seen
        else if (s.lastResult === 'wrong') w = 3.0;      // missed last time -> hammer it
        else {
            const acc = s.correct / s.seen;
            w = acc >= 0.85 ? 0.5 : 1.2;                 // mastered shows rarely; shaky shows often
        }
        // Recency spacing: if answered correctly within the last 30 min, suppress
        if (s.lastSeen && s.lastResult === 'correct') {
            const mins = (Date.now() - new Date(s.lastSeen).getTime()) / 60000;
            if (mins < 30) w *= 0.3;
        }
        // Newest material always likely to appear
        if (newestKey && this.lessonKey(q.bookId, q.lessonId) === newestKey) w *= 1.6;
        return Math.max(0.05, w);
    }

    // Weighted sample without replacement
    weightedSample(pool, n, newestKey) {
        const items = pool.map(q => ({ q, w: this.weightFor(q, newestKey) }));
        const picked = [];
        const take = Math.min(n, items.length);
        for (let k = 0; k < take; k++) {
            const total = items.reduce((acc, it) => acc + it.w, 0);
            let r = Math.random() * total;
            let idx = 0;
            for (let i = 0; i < items.length; i++) {
                r -= items[i].w;
                if (r <= 0) { idx = i; break; }
            }
            picked.push(items[idx].q);
            items.splice(idx, 1);
        }
        return picked;
    }

    // ---------- HOME SCREEN ----------
    renderExamHome() {
        this.ensureStore();
        const container = document.getElementById('exam-content');
        if (!container) return;

        const books = this.getCurriculumBooks();
        const fullPool = this.harvestPool({});
        const totalUnlocked = fullPool.length;
        const mastered = fullPool.filter(q => this.masteryOf(q.id) >= 0.85 && this.getStat(q.id).seen > 0).length;
        const examsTaken = APP_DATA.user.examHistory.length;
        const avg = examsTaken
            ? Math.round(APP_DATA.user.examHistory.reduce((a, e) => a + e.pct, 0) / examsTaken)
            : 0;

        const masteryPct = totalUnlocked ? Math.round((mastered / totalUnlocked) * 100) : 0;

        const bookSections = books.map(book => this.renderBookSection(book)).join('');

        container.innerHTML = `
            <div class="exam-hero">
                <p class="exam-subtitle">Retrieval practice beats re-reading. Get tested, miss some, repeat — that's how it sticks.</p>
                <div class="exam-stat-row">
                    <div class="exam-stat"><span class="exam-stat-value">${mastered}/${totalUnlocked}</span><span class="exam-stat-label">Questions Mastered</span></div>
                    <div class="exam-stat"><span class="exam-stat-value">${masteryPct}%</span><span class="exam-stat-label">Bank Mastery</span></div>
                    <div class="exam-stat"><span class="exam-stat-value">${examsTaken}</span><span class="exam-stat-label">Exams Taken</span></div>
                    <div class="exam-stat"><span class="exam-stat-value">${avg}%</span><span class="exam-stat-label">Avg Score</span></div>
                </div>
            </div>

            <div class="exam-actions-primary">
                <button class="exam-big-btn exam-daily" onclick="window.examCenter.startDaily()" ${totalUnlocked === 0 ? 'disabled' : ''}>
                    <span class="exam-big-icon">🔁</span>
                    <span class="exam-big-title">Daily Review</span>
                    <span class="exam-big-desc">Spaced repetition — your weak + due questions first</span>
                </button>
                <button class="exam-big-btn exam-comprehensive" onclick="window.examCenter.chooseComprehensive()" ${totalUnlocked === 0 ? 'disabled' : ''}>
                    <span class="exam-big-icon">🎓</span>
                    <span class="exam-big-title">Comprehensive Exam</span>
                    <span class="exam-big-desc">Everything you've unlocked, weighted to new + missed</span>
                </button>
            </div>

            ${totalUnlocked === 0 ? '<p class="exam-empty">No questions available yet. Open Lesson 1 of US Healthcare &amp; Insurance 101, then come back to test yourself.</p>' : ''}

            <div class="exam-book-list">
                <h3>Curriculum — Lesson Quizzes &amp; Unit Exams</h3>
                <p class="exam-note">🔒 Strict mode: pass a lesson quiz at ${Math.round(EXAM_PASS_THRESHOLD * 100)}% to unlock the next lesson.</p>
                ${bookSections}
            </div>

            <div class="exam-history">
                <h3>Recent Exams</h3>
                ${this.renderHistory()}
            </div>
        `;
    }

    renderBookSection(book) {
        const lessons = book.lessonList || [];
        const unlockedQs = this.harvestPool({ bookId: book.id }).length;
        const lessonRows = lessons.map(lesson => {
            const hasContent = this.lessonHasContent(lesson);
            const unlocked = this.isLessonUnlocked(book.id, lesson.id);
            const passed = this.isLessonPassed(book.id, lesson.id);
            const rec = APP_DATA.user.lessonExamPass[this.lessonKey(book.id, lesson.id)];

            let status, action;
            if (!unlocked) {
                status = '<span class="exam-lesson-lock">🔒 Locked</span>';
                action = '';
            } else if (!hasContent) {
                status = '<span class="exam-lesson-soon">Coming soon</span>';
                action = '';
            } else if (passed) {
                status = `<span class="exam-lesson-pass">✓ ${Math.round(rec.pct)}%</span>`;
                action = `<button class="exam-mini-btn" onclick="window.examCenter.startLessonQuiz('${book.id}','${lesson.id}')">Retake</button>`;
            } else {
                status = rec ? `<span class="exam-lesson-fail">${Math.round(rec.pct)}% — try again</span>` : '<span class="exam-lesson-open">Ready</span>';
                action = `<button class="exam-mini-btn exam-mini-go" onclick="window.examCenter.startLessonQuiz('${book.id}','${lesson.id}')">Take Quiz</button>`;
            }

            return `
                <div class="exam-lesson-row ${unlocked ? '' : 'locked'}">
                    <div class="exam-lesson-name">${lesson.title}</div>
                    <div class="exam-lesson-right">${status}${action}</div>
                </div>`;
        }).join('');

        return `
            <div class="exam-book-block">
                <div class="exam-book-head">
                    <span class="exam-book-title">${book.title}</span>
                    ${unlockedQs > 0 ? `<button class="exam-unit-btn" onclick="window.examCenter.startUnit('${book.id}')">Unit Exam (${unlockedQs} Qs)</button>` : ''}
                </div>
                <div class="exam-lesson-rows">${lessonRows}</div>
            </div>`;
    }

    renderHistory() {
        const hist = APP_DATA.user.examHistory.slice(-6).reverse();
        if (!hist.length) return '<p class="exam-no-history">No exams yet. Take your first Lesson Quiz above.</p>';
        return hist.map(e => {
            const cls = e.pct >= 90 ? 'a' : e.pct >= 80 ? 'b' : e.pct >= 70 ? 'c' : e.pct >= 60 ? 'd' : 'f';
            const dateStr = (typeof formatDateMMDDYYYY === 'function') ? formatDateMMDDYYYY(e.date) : (e.date || '').slice(0, 10);
            return `
                <div class="exam-history-row">
                    <span class="exam-hist-grade grade-${cls}">${Math.round(e.pct)}%</span>
                    <span class="exam-hist-title">${e.title}</span>
                    <span class="exam-hist-meta">${e.score}/${e.total} · ${dateStr}</span>
                </div>`;
        }).join('');
    }

    // ---------- Exam launchers ----------
    chooseComprehensive() {
        const container = document.getElementById('exam-content');
        const pool = this.harvestPool({});
        const max = pool.length;
        container.innerHTML = `
            <div class="exam-choose">
                <button class="btn-back-inline" onclick="window.examCenter.renderExamHome()">← Back</button>
                <h2>🎓 Comprehensive Exam</h2>
                <p>Pulls from all ${max} unlocked questions, weighted toward your newest material and questions you've missed before. Pick a length:</p>
                <div class="exam-size-grid">
                    ${[10, 20, 40].map(n => `
                        <button class="exam-size-card" onclick="window.examCenter.startComprehensive(${n})">
                            <span class="exam-size-num">${Math.min(n, max)}</span>
                            <span class="exam-size-label">questions</span>
                        </button>`).join('')}
                    <button class="exam-size-card" onclick="window.examCenter.startComprehensive(${max})">
                        <span class="exam-size-num">${max}</span>
                        <span class="exam-size-label">FULL — every question</span>
                    </button>
                </div>
            </div>`;
    }

    startComprehensive(n) {
        const pool = this.harvestPool({});
        if (!pool.length) return;
        const newest = this.newestUnlockedLessonKey();
        const qs = this.weightedSample(pool, n, newest);
        this.beginSession({ mode: 'comprehensive', title: 'Comprehensive Exam', gate: null }, qs);
    }

    startDaily() {
        const pool = this.harvestPool({});
        if (!pool.length) return;
        const newest = this.newestUnlockedLessonKey();
        // Daily prioritizes weak/missed/new; default 10 (or fewer if pool small)
        const qs = this.weightedSample(pool, Math.min(10, pool.length), newest);
        this.beginSession({ mode: 'daily', title: 'Daily Review', gate: null }, qs);
    }

    startUnit(bookId) {
        const pool = this.harvestPool({ bookId });
        if (!pool.length) return;
        const book = getBookById(bookId);
        const newest = this.newestUnlockedLessonKey();
        const qs = this.weightedSample(pool, Math.min(20, pool.length), newest);
        this.beginSession({ mode: 'unit', title: `Unit Exam — ${book ? book.title : bookId}`, gate: null }, qs);
    }

    // After passing a gate quiz, jump straight into the newly-unlocked lesson.
    goToNextLesson(bookId, lessonId) {
        if (!this.isLessonUnlocked(bookId, lessonId)) {
            this.toast('Locked — pass the previous lesson first.');
            return;
        }
        if (this.app && typeof this.app.startLesson === 'function') {
            this.app.startLesson(bookId, lessonId);
        } else if (window.app && typeof window.app.startLesson === 'function') {
            window.app.startLesson(bookId, lessonId);
        }
    }

    startLessonQuiz(bookId, lessonId) {
        if (!this.isLessonUnlocked(bookId, lessonId)) {
            this.toast('Locked — pass the previous lesson first.');
            return;
        }
        const pool = this.harvestPool({ bookId, lessonId });
        if (!pool.length) { this.toast('No questions for this lesson yet.'); return; }
        const book = getBookById(bookId);
        const lesson = (book.lessonList || []).find(l => String(l.id) === String(lessonId));
        // Lesson quizzes use the WHOLE lesson bank in order (no weighting) so the
        // gate is a fair test of that lesson.
        const qs = [...pool];
        this.beginSession({
            mode: 'lesson',
            title: `Lesson Quiz — ${lesson ? lesson.title : lessonId}`,
            gate: { bookId, lessonId }
        }, qs);
    }

    // ---------- Session runner ----------
    beginSession(config, questions) {
        if (!questions.length) return;
        this.session = { config, questions, index: 0, score: 0, answered: false };
        this.showQuestion();
    }

    showQuestion() {
        const s = this.session;
        if (!s) return;
        if (s.index >= s.questions.length) { this.showResults(); return; }
        const q = s.questions[s.index];
        const pct = ((s.index) / s.questions.length) * 100;
        const container = document.getElementById('exam-content');

        const typeBadge = q.qType && q.qType !== 'recall'
            ? `<span class="exam-q-type exam-q-${q.qType}">${q.qType === 'scenario' ? '🩺 Scenario' : '🛠️ Applied'}</span>`
            : '';

        container.innerHTML = `
            <div class="exam-running">
                <div class="exam-run-head">
                    <button class="btn-back-inline" onclick="window.examCenter.quitToHome()">← Quit</button>
                    <span class="exam-run-counter">Q ${s.index + 1} / ${s.questions.length}</span>
                </div>
                <div class="exam-progress-track"><div class="exam-progress-fill" style="width:${pct}%"></div></div>
                <div class="exam-q-source">${q.bookTitle} · ${q.lessonTitle} ${typeBadge}</div>
                <div class="exam-q-card">
                    <h3 class="exam-q-text">${q.question}</h3>
                    <div class="exam-opts">
                        ${q.options.map((opt, i) => `
                            <button class="exam-opt" id="exam-opt-${i}" onclick="window.examCenter.answer(${i})">${opt.text}</button>
                        `).join('')}
                    </div>
                </div>
                <div class="exam-explain" id="exam-explain" style="display:none;">
                    <div id="exam-explain-body"></div>
                    <button class="btn-primary" id="exam-next-btn" onclick="window.examCenter.next()"></button>
                </div>
            </div>`;
    }

    answer(index) {
        const s = this.session;
        if (!s || s.answered) return;
        s.answered = true;
        const q = s.questions[s.index];
        const isCorrect = !!q.options[index].correct;

        document.querySelectorAll('.exam-opt').forEach((btn, i) => {
            btn.disabled = true;
            if (q.options[i].correct) btn.classList.add('correct');
        });
        const chosen = document.getElementById(`exam-opt-${index}`);
        if (isCorrect) { s.score++; chosen.classList.add('correct'); }
        else chosen.classList.add('incorrect');

        this.recordAnswer(q.id, isCorrect);

        const box = document.getElementById('exam-explain');
        const body = document.getElementById('exam-explain-body');
        body.innerHTML = `
            <div class="${isCorrect ? 'exam-correct-msg' : 'exam-incorrect-msg'}">${isCorrect ? '✅ Correct' : '❌ Incorrect'}</div>
            ${q.explanation ? `<p class="exam-explain-text">${q.explanation}</p>` : ''}`;
        const nextBtn = document.getElementById('exam-next-btn');
        nextBtn.textContent = (s.index < s.questions.length - 1) ? 'Next Question' : 'See Results';
        box.style.display = 'block';
        this.save();
    }

    next() {
        const s = this.session;
        if (!s) return;
        s.index++;
        s.answered = false;
        this.showQuestion();
    }

    showResults() {
        const s = this.session;
        if (!s) return;
        const total = s.questions.length;
        const pct = total ? (s.score / total) * 100 : 0;
        const cfg = s.config;
        const passed = pct >= EXAM_PASS_THRESHOLD * 100;

        // Record gate result for lesson quizzes
        let unlockedMsg = '';
        let nextLessonBtn = '';
        if (cfg.mode === 'lesson' && cfg.gate) {
            const key = this.lessonKey(cfg.gate.bookId, cfg.gate.lessonId);
            const prev = APP_DATA.user.lessonExamPass[key];
            APP_DATA.user.lessonExamPass[key] = {
                score: s.score, total, pct,
                passed: passed || (prev && prev.passed) || false,
                date: new Date().toISOString()
            };
            if (passed) {
                const next = this.nextLessonInfo(cfg.gate.bookId, cfg.gate.lessonId);
                if (next) {
                    unlockedMsg = next.newBook
                        ? `<div class="exam-unlock">🔓 New book unlocked: <strong>${next.bookTitle}</strong><br><span style="font-weight:400">Starting with: ${next.title}</span></div>`
                        : `<div class="exam-unlock">🔓 Unlocked: <strong>${next.title}</strong></div>`;
                    // Direct-to-next-lesson button (the headline action on a pass)
                    nextLessonBtn = `<button class="btn-primary exam-next-lesson-btn" style="background:#10b981;font-size:1.05rem;padding:0.85rem 1.4rem;"
                        onclick="window.examCenter.goToNextLesson('${next.bookId}','${next.lessonId}')">
                        ${next.newBook ? 'Start Next Book' : 'Start Next Lesson'} →
                    </button>`;
                } else {
                    unlockedMsg = `<div class="exam-unlock">🎉 You've completed the entire curriculum — every lesson passed!</div>`;
                }
            } else {
                unlockedMsg = `<div class="exam-locked-note">You need ${Math.round(EXAM_PASS_THRESHOLD * 100)}% to unlock the next lesson. Review and retake.</div>`;
            }
        }

        // History
        APP_DATA.user.examHistory.push({
            mode: cfg.mode, title: cfg.title, score: s.score, total, pct,
            date: new Date().toISOString()
        });
        if (APP_DATA.user.examHistory.length > 100) APP_DATA.user.examHistory.shift();
        this.save();

        // XP reward
        if (window.gamification && typeof window.gamification.awardXP === 'function') {
            window.gamification.awardXP(Math.round(s.score * 5), `Exam: ${cfg.title}`);
        }

        const grade = pct >= 90 ? 'A' : pct >= 80 ? 'B' : pct >= 70 ? 'C' : pct >= 60 ? 'D' : 'F';
        const gradeClass = grade.toLowerCase();
        const container = document.getElementById('exam-content');
        container.innerHTML = `
            <div class="exam-results">
                <div class="exam-result-icon">${pct >= 90 ? '🏆' : pct >= 80 ? '🎉' : '📚'}</div>
                <h2>${cfg.title}</h2>
                <div class="exam-result-grade grade-${gradeClass}">${grade}</div>
                <div class="exam-result-score">${s.score} / ${total}</div>
                <div class="exam-result-pct">${Math.round(pct)}%</div>
                ${unlockedMsg}
                <div class="exam-result-actions">
                    ${nextLessonBtn}
                    <button class="btn-secondary" onclick="window.examCenter.renderExamHome()">Back to Exam Center</button>
                    ${cfg.mode === 'lesson' && !passed
                        ? `<button class="btn-primary" onclick="window.examCenter.startLessonQuiz('${cfg.gate.bookId}','${cfg.gate.lessonId}')">Retake Now</button>`
                        : (cfg.mode === 'lesson' && passed
                            ? ''
                            : `<button class="btn-primary" onclick="window.examCenter.startDaily()">Daily Review</button>`)}
                </div>
            </div>`;

        // Refresh due badge / home gamification if present
        if (window.activeRecall && typeof window.activeRecall.updateDueBadge === 'function') {
            window.activeRecall.updateDueBadge();
        }
    }

    nextLessonName(bookId, lessonId) {
        const nxt = this.nextLessonInfo(bookId, lessonId);
        return nxt ? nxt.title : null;
    }

    // Returns the next lesson across the whole curriculum (crosses book
    // boundaries), or null if this is the last lesson of the last book.
    nextLessonInfo(bookId, lessonId) {
        const ordered = this.getOrderedLessons();
        const pos = ordered.findIndex(o => o.book.id === bookId && String(o.lesson.id) === String(lessonId));
        if (pos === -1 || pos + 1 >= ordered.length) return null;
        const nxt = ordered[pos + 1];
        return {
            bookId: nxt.book.id,
            lessonId: nxt.lesson.id,
            title: nxt.lesson.title,
            newBook: nxt.book.id !== bookId,
            bookTitle: nxt.book.title
        };
    }

    quitToHome() {
        this.session = null;
        this.renderExamHome();
    }

    toast(msg) {
        // Lightweight, dependency-free toast
        let t = document.getElementById('exam-toast');
        if (!t) {
            t = document.createElement('div');
            t.id = 'exam-toast';
            t.style.cssText = 'position:fixed;bottom:90px;left:50%;transform:translateX(-50%);background:#1c2833;color:#fff;padding:0.8rem 1.4rem;border-radius:0.6rem;border:1px solid #6366f1;z-index:9999;font-size:0.95rem;box-shadow:0 6px 20px rgba(0,0,0,0.4);';
            document.body.appendChild(t);
        }
        t.textContent = msg;
        t.style.display = 'block';
        clearTimeout(this._toastTimer);
        this._toastTimer = setTimeout(() => { t.style.display = 'none'; }, 2600);
    }
}

window.ExamCenter = ExamCenter;
let examCenter;
