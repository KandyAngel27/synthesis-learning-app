// ============================================
// SYNTHESIS — PERSONALIZATION / GROWTH PLAN
// A Deepstash-style onboarding wizard that asks the learner about their
// interests, goal, and available time, then builds a personalized plan:
//   • a daily lesson goal (with a progress tracker on the home screen)
//   • a "For You" shelf recommending books from the chosen interests
// Everything is stored in APP_DATA.user.personalization and persisted via
// the existing saveProgress(). This module is fully self-contained — it only
// reads APP_DATA at runtime and wires into three tiny hooks in app.js.
// ============================================

class Personalization {
    constructor(app) {
        this.app = app;
        this.step = 0;            // index into this.steps for the active wizard step
        this.draft = null;        // in-progress answers before the plan is saved

        // Goal options — each maps to a light bias in recommendations + copy.
        this.goals = [
            { id: 'knowledge',    icon: '🧠', label: 'Learn something new every day', desc: 'Broaden your mind with a steady drip of ideas.' },
            { id: 'career',       icon: '📈', label: 'Grow my career & skills',        desc: 'Level up in business, leadership, and communication.' },
            { id: 'certification',icon: '🎓', label: 'Prep for an exam or certification', desc: 'Structured tracks with quizzes and an Exam Center.' },
            { id: 'habits',       icon: '🌱', label: 'Build better habits & mindset',  desc: 'Focus, discipline, well-being, and self-mastery.' },
            { id: 'explore',      icon: '🧭', label: 'Just explore & stay curious',    desc: 'A little of everything — history, science, philosophy.' },
        ];

        // Daily time → lessons/day goal. Lessons run ~5–8 min each.
        this.timeOptions = [
            { id: 'quick',  minutes: 5,  lessons: 1, icon: '⚡', label: '5 min',    sub: 'A quick daily spark' },
            { id: 'steady', minutes: 10, lessons: 2, icon: '☕', label: '10 min',   sub: 'Steady & sustainable' },
            { id: 'focused',minutes: 20, lessons: 3, icon: '🎯', label: '20 min',   sub: 'Serious momentum' },
            { id: 'deep',   minutes: 30, lessons: 5, icon: '🔥', label: '30+ min',  sub: 'All-in learner' },
        ];

        this.levels = [
            { id: 'beginner',     icon: '🌱', label: 'Beginner',     desc: 'Start with the fundamentals.' },
            { id: 'intermediate', icon: '🌿', label: 'Intermediate', desc: 'I know the basics — go deeper.' },
            { id: 'advanced',     icon: '🌳', label: 'Advanced',     desc: 'Challenge me with the hard stuff.' },
        ];

        // Ordered list of wizard step renderers.
        this.steps = [
            () => this.renderWelcomeStep(),
            () => this.renderInterestsStep(),
            () => this.renderGoalStep(),
            () => this.renderTimeStep(),
            () => this.renderLevelStep(),
            () => this.renderBuildingStep(),
            () => this.renderPlanStep(),
        ];
    }

    // ---------- persisted state helpers ----------
    get plan() {
        return (APP_DATA.user && APP_DATA.user.personalization) || null;
    }

    isComplete() {
        return !!(this.plan && this.plan.completed);
    }

    savePlan(plan) {
        if (!APP_DATA.user) APP_DATA.user = {};
        APP_DATA.user.personalization = plan;
        if (typeof saveProgress === 'function') saveProgress();
    }

    // Auto-launch the wizard once for brand-new users (Deepstash-style
    // onboarding). Never nags again after the first prompt — the home banner
    // remains as the re-entry point.
    maybeAutoStart() {
        try {
            if (this.isComplete()) return;
            if (localStorage.getItem('synthesis_personalize_prompted') === '1') return;
            localStorage.setItem('synthesis_personalize_prompted', '1');
            this.start();
        } catch (e) { /* localStorage unavailable — skip auto-start */ }
    }

    // ---------- entry point ----------
    start(restart) {
        this.step = 0;
        const existing = this.plan;
        // Pre-fill the draft from an existing plan when re-personalizing.
        this.draft = {
            interests: (existing && existing.interests) ? existing.interests.slice() : [],
            goal: existing ? existing.goal : null,
            time: existing ? existing.time : null,
            level: existing ? existing.level : null,
        };
        this.app.switchView('personalize');
    }

    render() {
        const host = document.getElementById('personalize-content');
        if (!host) return;
        if (!this.draft) { this.start(); return; }
        const renderer = this.steps[this.step] || this.steps[0];
        host.innerHTML = renderer();
        host.scrollTop = 0;
        window.scrollTo(0, 0);
    }

    // ---------- shared chrome ----------
    progressBar() {
        // Welcome (0) and building (5) / plan (6) don't count toward the bar.
        const answerSteps = 4; // interests, goal, time, level
        const current = Math.min(Math.max(this.step, 1), answerSteps + 1);
        const pct = Math.round((Math.min(this.step, answerSteps) / answerSteps) * 100);
        const showBar = this.step >= 1 && this.step <= 4;
        if (!showBar) return '';
        return `
            <div class="pz-progress">
                <div class="pz-progress-track"><div class="pz-progress-fill" style="width:${pct}%"></div></div>
                <span class="pz-progress-label">Step ${this.step} of ${answerSteps}</span>
            </div>`;
    }

    skipBtn() {
        return `<button class="pz-skip" onclick="app.switchView('home')">Skip for now</button>`;
    }

    // ---------- step 0: welcome ----------
    renderWelcomeStep() {
        return `
        <div class="pz-shell pz-center">
            ${this.skipBtn()}
            <div class="pz-hero-icon">✨</div>
            <h1 class="pz-title">Let's build your learning plan</h1>
            <p class="pz-sub">Answer a few quick questions and Synthesis will tailor your daily lessons, recommendations, and goal to what <em>you</em> care about. Takes about 30 seconds.</p>
            <div class="pz-welcome-points">
                <div class="pz-point"><span>🎯</span> Pick the topics you love</div>
                <div class="pz-point"><span>⏱️</span> Set a daily goal that fits your life</div>
                <div class="pz-point"><span>📚</span> Get a personalized "For You" shelf</div>
            </div>
            <button class="pz-btn pz-btn-primary pz-btn-lg" onclick="window.personalization.next()">Get started →</button>
        </div>`;
    }

    // ---------- step 1: interests ----------
    availableInterestCategories() {
        // Present real categories that actually contain books, sorted by size
        // so the richest topics surface first. Falls back gracefully if empty.
        const cats = (APP_DATA.categories || []).filter(c => c && (c.books || []).length > 0);
        return cats.slice().sort((a, b) => (b.books.length - a.books.length));
    }

    renderInterestsStep() {
        const cats = this.availableInterestCategories();
        const selected = this.draft.interests || [];
        const cards = cats.map(c => {
            const on = selected.includes(c.id);
            return `
                <button type="button" class="pz-chip ${on ? 'pz-chip-on' : ''}"
                        style="--pz-cat:${c.color || 'var(--color-primary)'}"
                        onclick="window.personalization.toggleInterest('${c.id}')">
                    <span class="pz-chip-icon">${c.icon || '📘'}</span>
                    <span class="pz-chip-label">${escapeHtml(c.name || c.id)}</span>
                    <span class="pz-chip-check">✓</span>
                </button>`;
        }).join('');
        const count = selected.length;
        return `
        <div class="pz-shell">
            ${this.skipBtn()}
            ${this.progressBar()}
            <h2 class="pz-title">What do you want to learn?</h2>
            <p class="pz-sub">Pick a few topics that spark your curiosity. You can change these anytime.</p>
            <div class="pz-chip-grid">${cards}</div>
            ${this.navRow(count > 0, count === 0 ? 'Pick at least one topic' : `Continue (${count} selected) →`)}
        </div>`;
    }

    toggleInterest(id) {
        const arr = this.draft.interests || (this.draft.interests = []);
        const i = arr.indexOf(id);
        if (i >= 0) arr.splice(i, 1); else arr.push(id);
        this.render();
    }

    // ---------- step 2: goal ----------
    renderGoalStep() {
        const cards = this.goals.map(g => {
            const on = this.draft.goal === g.id;
            return `
                <button type="button" class="pz-option ${on ? 'pz-option-on' : ''}"
                        onclick="window.personalization.pickGoal('${g.id}')">
                    <span class="pz-option-icon">${g.icon}</span>
                    <span class="pz-option-body">
                        <span class="pz-option-label">${g.label}</span>
                        <span class="pz-option-desc">${g.desc}</span>
                    </span>
                    <span class="pz-option-radio"></span>
                </button>`;
        }).join('');
        return `
        <div class="pz-shell">
            ${this.skipBtn()}
            ${this.progressBar()}
            <h2 class="pz-title">What's your main goal?</h2>
            <p class="pz-sub">This shapes what we put front and center for you.</p>
            <div class="pz-option-list">${cards}</div>
            ${this.navRow(!!this.draft.goal, 'Continue →')}
        </div>`;
    }

    pickGoal(id) { this.draft.goal = id; this.render(); }

    // ---------- step 3: time ----------
    renderTimeStep() {
        const cards = this.timeOptions.map(t => {
            const on = this.draft.time === t.id;
            return `
                <button type="button" class="pz-time ${on ? 'pz-time-on' : ''}"
                        onclick="window.personalization.pickTime('${t.id}')">
                    <span class="pz-time-icon">${t.icon}</span>
                    <span class="pz-time-label">${t.label}</span>
                    <span class="pz-time-sub">${t.sub}</span>
                    <span class="pz-time-goal">${t.lessons} lesson${t.lessons > 1 ? 's' : ''}/day</span>
                </button>`;
        }).join('');
        return `
        <div class="pz-shell">
            ${this.skipBtn()}
            ${this.progressBar()}
            <h2 class="pz-title">How much time per day?</h2>
            <p class="pz-sub">Consistency beats intensity. Pick a goal you can actually keep.</p>
            <div class="pz-time-grid">${cards}</div>
            ${this.navRow(!!this.draft.time, 'Continue →')}
        </div>`;
    }

    pickTime(id) { this.draft.time = id; this.render(); }

    // ---------- step 4: level ----------
    renderLevelStep() {
        const cards = this.levels.map(l => {
            const on = this.draft.level === l.id;
            return `
                <button type="button" class="pz-option ${on ? 'pz-option-on' : ''}"
                        onclick="window.personalization.pickLevel('${l.id}')">
                    <span class="pz-option-icon">${l.icon}</span>
                    <span class="pz-option-body">
                        <span class="pz-option-label">${l.label}</span>
                        <span class="pz-option-desc">${l.desc}</span>
                    </span>
                    <span class="pz-option-radio"></span>
                </button>`;
        }).join('');
        return `
        <div class="pz-shell">
            ${this.skipBtn()}
            ${this.progressBar()}
            <h2 class="pz-title">Where are you starting from?</h2>
            <p class="pz-sub">We'll set the tone of your recommendations accordingly.</p>
            <div class="pz-option-list">${cards}</div>
            ${this.navRow(!!this.draft.level, 'Build my plan →')}
        </div>`;
    }

    pickLevel(id) { this.draft.level = id; this.render(); }

    // ---------- step 5: building animation ----------
    renderBuildingStep() {
        // Finalize + persist the plan, then show a brief "building" beat before
        // revealing the result. Kept deliberately short.
        this.commitPlan();
        setTimeout(() => {
            if (this.app.currentView === 'personalize' && this.step === 5) {
                this.step = 6;
                this.render();
            }
        }, 1600);
        return `
        <div class="pz-shell pz-center">
            <div class="pz-build-spinner"><div></div><div></div><div></div></div>
            <h2 class="pz-title">Building your plan…</h2>
            <p class="pz-sub" id="pz-build-msg">Matching topics to your goal</p>
        </div>`;
    }

    commitPlan() {
        const time = this.timeOptions.find(t => t.id === this.draft.time) || this.timeOptions[1];
        const plan = {
            completed: true,
            interests: (this.draft.interests || []).slice(),
            goal: this.draft.goal || 'knowledge',
            time: time.id,
            dailyMinutes: time.minutes,
            dailyLessonGoal: time.lessons,
            level: this.draft.level || 'beginner',
            createdAt: new Date().toISOString(),
        };
        this.savePlan(plan);
    }

    // ---------- step 6: the plan result ----------
    renderPlanStep() {
        const plan = this.plan || {};
        const goal = this.goals.find(g => g.id === plan.goal);
        const books = this.getForYouBooks(6);
        const catNames = (plan.interests || [])
            .map(id => getCategoryById(id))
            .filter(Boolean)
            .map(c => `${c.icon || ''} ${escapeHtml(c.name)}`.trim());

        const bookCards = books.map(b => `
            <div class="pz-plan-book" onclick="app.showBook('${b.id}')">
                <div class="pz-plan-cover" style="background:linear-gradient(135deg, ${this.app.getCategoryColor(b.category)} 0%, ${this.app.getCategoryColorDark(b.category)} 100%)">
                    <span>${escapeHtml(b.title)}</span>
                </div>
                <div class="pz-plan-book-title">${escapeHtml(b.title)}</div>
                <div class="pz-plan-book-author">${escapeHtml(b.author || '')}</div>
            </div>`).join('');

        const firstLesson = this.getFirstRecommendedLesson();
        const startBtn = firstLesson
            ? `<button class="pz-btn pz-btn-primary pz-btn-lg" onclick="app.startLesson('${firstLesson.bookId}', '${firstLesson.lessonId}')">Start your first lesson →</button>`
            : `<button class="pz-btn pz-btn-primary pz-btn-lg" onclick="app.switchView('home')">Go to my home →</button>`;

        return `
        <div class="pz-shell pz-center">
            <div class="pz-hero-icon">🎉</div>
            <h1 class="pz-title">Your plan is ready, Kandy!</h1>
            <p class="pz-sub">Here's what we've set up based on your answers.</p>

            <div class="pz-summary">
                <div class="pz-summary-row">
                    <span class="pz-summary-icon">🎯</span>
                    <div>
                        <div class="pz-summary-k">Daily goal</div>
                        <div class="pz-summary-v">${plan.dailyLessonGoal} lesson${plan.dailyLessonGoal > 1 ? 's' : ''} · ~${plan.dailyMinutes} min a day</div>
                    </div>
                </div>
                ${goal ? `
                <div class="pz-summary-row">
                    <span class="pz-summary-icon">${goal.icon}</span>
                    <div>
                        <div class="pz-summary-k">Your focus</div>
                        <div class="pz-summary-v">${goal.label}</div>
                    </div>
                </div>` : ''}
                ${catNames.length ? `
                <div class="pz-summary-row">
                    <span class="pz-summary-icon">📚</span>
                    <div>
                        <div class="pz-summary-k">Your topics</div>
                        <div class="pz-summary-v">${catNames.join(' · ')}</div>
                    </div>
                </div>` : ''}
            </div>

            ${books.length ? `
            <h3 class="pz-plan-heading">Recommended for you</h3>
            <div class="pz-plan-books">${bookCards}</div>` : ''}

            <div class="pz-plan-actions">
                ${startBtn}
                <button class="pz-btn pz-btn-ghost" onclick="app.switchView('home')">Explore my home</button>
            </div>
        </div>`;
    }

    // ---------- navigation ----------
    navRow(canAdvance, nextLabel) {
        const back = this.step > 1
            ? `<button class="pz-btn pz-btn-ghost" onclick="window.personalization.back()">← Back</button>`
            : `<span></span>`;
        const next = `<button class="pz-btn pz-btn-primary" ${canAdvance ? '' : 'disabled'} onclick="window.personalization.next()">${escapeHtml(nextLabel)}</button>`;
        return `<div class="pz-nav">${back}${next}</div>`;
    }

    next() {
        if (this.step < this.steps.length - 1) { this.step++; this.render(); }
    }

    back() {
        if (this.step > 0) { this.step--; this.render(); }
    }

    // ============================================
    // RECOMMENDATIONS + HOME INTEGRATION
    // ============================================

    // Books drawn from the user's chosen interests, un-completed first, then
    // featured, capped at `limit`. Falls back to trending when no plan/interests.
    getForYouBooks(limit) {
        limit = limit || 8;
        const plan = this.plan;
        if (!plan || !(plan.interests || []).length) {
            return (typeof getTrendingBooks === 'function' ? getTrendingBooks() : []).slice(0, limit);
        }
        const interests = plan.interests;
        let pool = [];
        interests.forEach(catId => {
            const cat = getCategoryById(catId);
            if (cat && cat.books) pool = pool.concat(cat.books);
        });
        // De-dupe by id (a book could theoretically appear twice).
        const seen = new Set();
        pool = pool.filter(b => { if (!b || seen.has(b.id)) return false; seen.add(b.id); return true; });

        // Rank: in-progress but unfinished > not started > completed; then featured.
        const score = (b) => {
            let s = 0;
            const p = b.progress || 0;
            if (p > 0 && p < 100) s += 100;      // resume these first
            else if (p === 0) s += 50;           // fresh content next
            if (b.featured) s += 10;
            if (b.trending) s += 5;
            return s;
        };
        pool.sort((a, b) => score(b) - score(a));
        return pool.slice(0, limit);
    }

    getFirstRecommendedLesson() {
        const books = this.getForYouBooks(12);
        for (const book of books) {
            const lesson = (book.lessonList || []).find(l => !l.completed && l.cards && l.cards.length > 0);
            if (lesson) return { bookId: book.id, lessonId: lesson.id };
        }
        return null;
    }

    // Count lessons completed today (for the daily-goal tracker).
    lessonsCompletedToday() {
        const completions = (APP_DATA.user && APP_DATA.user.lessonCompletions) || {};
        const today = new Date().toISOString().slice(0, 10);
        let n = 0;
        for (const key in completions) {
            const ts = completions[key];
            if (ts && String(ts).slice(0, 10) === today) n++;
        }
        return n;
    }

    // Called from app.renderHome() — draws the banner + "For You" shelf.
    renderHomeSections() {
        this.renderBanner();
        this.renderForYouShelf();
    }

    renderBanner() {
        const el = document.getElementById('personalize-banner');
        if (!el) return;

        if (!this.isComplete()) {
            el.style.display = 'block';
            el.innerHTML = `
                <div class="pz-cta-card" onclick="window.personalization.start()">
                    <div class="pz-cta-glow"></div>
                    <div class="pz-cta-body">
                        <span class="pz-cta-icon">✨</span>
                        <div>
                            <div class="pz-cta-title">Personalize your learning plan</div>
                            <div class="pz-cta-sub">Answer 4 quick questions to get a daily goal and a "For You" shelf.</div>
                        </div>
                    </div>
                    <span class="pz-cta-arrow">→</span>
                </div>`;
            return;
        }

        // Completed → compact daily-goal tracker.
        const plan = this.plan;
        const goalN = plan.dailyLessonGoal || 1;
        const doneN = this.lessonsCompletedToday();
        const pct = Math.min(100, Math.round((doneN / goalN) * 100));
        const met = doneN >= goalN;
        el.style.display = 'block';
        el.innerHTML = `
            <div class="pz-goal-card">
                <div class="pz-goal-top">
                    <span class="pz-goal-label">${met ? '✅ Daily goal complete!' : '🎯 Today\'s goal'}</span>
                    <button class="pz-goal-adjust" onclick="window.personalization.start(true)">Adjust</button>
                </div>
                <div class="pz-goal-track"><div class="pz-goal-fill ${met ? 'pz-goal-fill-done' : ''}" style="width:${pct}%"></div></div>
                <div class="pz-goal-count">${Math.min(doneN, goalN)} / ${goalN} lesson${goalN > 1 ? 's' : ''} ${met ? '— nice work!' : 'today'}</div>
            </div>`;
    }

    renderForYouShelf() {
        const section = document.getElementById('foryou-section');
        const shelf = document.getElementById('foryou-shelf');
        if (!section || !shelf) return;

        if (!this.isComplete()) { section.style.display = 'none'; return; }
        const books = this.getForYouBooks(10);
        if (!books.length) { section.style.display = 'none'; return; }

        section.style.display = 'block';
        shelf.innerHTML = books.map(book => `
            <div class="featured-book-card" onclick="app.showBook('${book.id}')">
                <div class="book-cover" style="background: linear-gradient(135deg, ${this.app.getCategoryColor(book.category)} 0%, ${this.app.getCategoryColorDark(book.category)} 100%)">
                    <div class="book-cover-text">${escapeHtml(book.title)}</div>
                </div>
                <div class="book-info">
                    <div class="book-title">${escapeHtml(book.title)}</div>
                    <div class="book-author">${escapeHtml(book.author || '')}</div>
                    <div class="book-meta">
                        <span class="book-lessons">${book.lessons || (book.lessonList || []).length} lessons</span>
                        <span class="book-time">${book.duration || ''}${book.duration ? ' min' : ''}</span>
                    </div>
                </div>
            </div>`).join('');
    }
}

// Expose for app.js
window.Personalization = Personalization;
