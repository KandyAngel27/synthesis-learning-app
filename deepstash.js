// ============================================
// SYNTHESIS — DEEPSTASH-STYLE IDEAS FEED
// A feed of bite-sized ideas ("stashes") pulled from across the whole
// library — the way Deepstash works: swipe/scroll through single ideas,
// filter by topic, save the ones you like into your collection, and tap
// through to the full lesson a given idea came from.
//
// Ideas are extracted at runtime from existing lesson cards (their title +
// content) — no new content authoring required. Saved ideas live in
// APP_DATA.user.savedIdeas and persist via the existing saveProgress().
// Fully self-contained: only reads APP_DATA + a few tiny app.js hooks.
// ============================================

class DeepstashFeed {
    constructor(app) {
        this.app = app;
        this.tab = 'discover';       // 'discover' | 'saved'
        this.activeTopic = 'all';    // category id or 'all'
        this.factsOnly = false;      // when true, show only standalone facts (not book ideas)
        this.visibleCount = 24;      // progressive reveal in the discover feed
        this._pool = null;           // cached idea pool (built once)
        this._pageSize = 24;
        this.HOME_CARD_COUNT = 5;    // how many teaser cards on the home page (rest via "See all")
    }

    // ---------- idea pool ----------
    // Walk every book → lesson → card, turning content-bearing cards into
    // lightweight "idea" objects. Built once and cached.
    buildPool() {
        if (this._pool) return this._pool;
        const ideas = [];
        (APP_DATA.categories || []).forEach(cat => {
            (cat.books || []).forEach(book => {
                (book.lessonList || []).forEach(lesson => {
                    (lesson.cards || []).forEach((card, cardIndex) => {
                        const text = this.extractIdeaText(card);
                        if (!text) return;
                        ideas.push({
                            key: `${book.id}::${lesson.id}::${cardIndex}`,
                            title: (card.title || lesson.title || '').trim(),
                            text,
                            type: card.type || 'idea',
                            bookId: book.id,
                            bookTitle: book.title,
                            author: book.author || '',
                            lessonId: lesson.id,
                            categoryId: cat.id,
                            categoryName: cat.name,
                            categoryIcon: cat.icon || '📘',
                            categoryColor: cat.color || '#6366f1',
                        });
                    });
                });
            });
        });

        // Merge in standalone, book-independent ideas (general knowledge,
        // trivia, science, life skills, …) from ideas-data.js, if present.
        const stdTopics = (window.SYNTHESIS_IDEAS && window.SYNTHESIS_IDEAS.topics) || {};
        const stdIdeas = (window.SYNTHESIS_IDEAS && window.SYNTHESIS_IDEAS.ideas) || [];
        stdIdeas.forEach(it => {
            if (!it || !it.text) return;
            const t = stdTopics[it.topic] || {};
            ideas.push({
                key: `fact::${it.id}`,
                title: (it.title || '').trim(),
                text: String(it.text).trim(),
                type: 'fact',
                standalone: true,
                source: it.source || '',
                bookId: null,
                bookTitle: '',
                author: '',
                lessonId: null,
                categoryId: `topic-${it.topic}`,
                categoryName: t.name || 'Ideas',
                categoryIcon: t.icon || '💡',
                categoryColor: t.color || '#6366f1',
            });
        });

        this._pool = ideas;
        return ideas;
    }

    // Turn a card into a clean, tweet-sized idea. Returns '' for cards that
    // don't make good standalone ideas (quizzes, empty/too-short content).
    extractIdeaText(card) {
        if (!card || card.type === 'quiz') return '';
        let raw = card.content;
        if (!raw || typeof raw !== 'string') return '';
        let s = raw
            .replace(/\*\*/g, '')
            .replace(/\*/g, '')
            .replace(/`/g, '')
            .replace(/•/g, '')
            .replace(/\s*\n+\s*/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        if (s.length < 45) return '';
        // Trim to ~2 sentences / ~280 chars, breaking on a sentence end.
        const LIMIT = 280;
        if (s.length > LIMIT) {
            let cut = s.slice(0, LIMIT);
            const lastStop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('! '), cut.lastIndexOf('? '));
            if (lastStop > 140) cut = cut.slice(0, lastStop + 1);
            else cut = cut.slice(0, cut.lastIndexOf(' ')) + '…';
            s = cut.trim();
        }
        return s;
    }

    // ---------- saved ideas ----------
    savedKeys() {
        if (!APP_DATA.user) APP_DATA.user = {};
        if (!Array.isArray(APP_DATA.user.savedIdeas)) APP_DATA.user.savedIdeas = [];
        return APP_DATA.user.savedIdeas;
    }
    isSaved(key) { return this.savedKeys().includes(key); }
    toggleSave(key) {
        const arr = this.savedKeys();
        const i = arr.indexOf(key);
        if (i >= 0) { arr.splice(i, 1); if (window.toast) toast('Removed from saved', 'info'); }
        else { arr.push(key); if (window.toast) toast('💾 Saved to your ideas', 'success'); }
        if (typeof saveProgress === 'function') saveProgress();
        // Re-render whichever surface is visible.
        if (this.app.currentView === 'deepstash') this.render();
        else this.renderHomeStrip();
    }
    ideaByKey(key) {
        return this.buildPool().find(i => i.key === key) || null;
    }

    // ---------- topics ----------
    // Derived from the pool itself so both book categories AND standalone
    // knowledge topics (Science, Trivia, …) surface as filter chips. The
    // curated standalone topics are listed first so they're easy to find.
    topicsWithIdeas() {
        const map = {};
        this.buildPool().forEach(i => {
            if (!map[i.categoryId]) {
                map[i.categoryId] = {
                    id: i.categoryId,
                    name: i.categoryName,
                    icon: i.categoryIcon,
                    color: i.categoryColor,
                    count: 0,
                    standalone: !!i.standalone,
                };
            }
            map[i.categoryId].count++;
        });
        return Object.values(map).sort((a, b) => {
            if (a.standalone !== b.standalone) return a.standalone ? -1 : 1;
            return b.count - a.count;
        });
    }

    // Weave curated standalone facts through book ideas so they're always
    // visible in the "All" feed: one fact roughly every `gap` items.
    interleave(primary, secondary, gap) {
        const out = [];
        let pi = 0, si = 0;
        while (pi < primary.length || si < secondary.length) {
            for (let k = 0; k < gap - 1 && si < secondary.length; k++) out.push(secondary[si++]);
            if (pi < primary.length) out.push(primary[pi++]);
        }
        return out;
    }

    // ---------- deterministic daily shuffle ----------
    dailySeed() {
        const d = new Date();
        return d.getFullYear() * 1000 + this.dayOfYear(d);
    }
    dayOfYear(d) {
        const start = new Date(d.getFullYear(), 0, 0);
        return Math.floor((d - start) / 86400000);
    }
    seededShuffle(arr, seed) {
        // mulberry32 PRNG → Fisher–Yates. Stable for a given seed.
        let a = seed >>> 0;
        const rand = () => {
            a |= 0; a = (a + 0x6D2B79F5) | 0;
            let t = Math.imul(a ^ (a >>> 15), 1 | a);
            t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
            return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
        };
        const out = arr.slice();
        for (let i = out.length - 1; i > 0; i--) {
            const j = Math.floor(rand() * (i + 1));
            [out[i], out[j]] = [out[j], out[i]];
        }
        return out;
    }

    // The ordered discover feed for the active topic (daily-stable order).
    feedIdeas() {
        const pool = this.buildPool();
        const seed = this.dailySeed();
        if (this.activeTopic !== 'all') {
            let filtered = pool.filter(i => i.categoryId === this.activeTopic);
            if (this.factsOnly) filtered = filtered.filter(i => i.standalone);
            return this.seededShuffle(filtered, seed + this._topicSeedOffset());
        }
        // "All": interleave curated facts through book ideas so both show up.
        const facts = this.seededShuffle(pool.filter(i => i.standalone), seed + 1);
        if (this.factsOnly) return facts;
        const bookIdeas = this.seededShuffle(pool.filter(i => !i.standalone), seed + 2);
        if (!facts.length) return bookIdeas;
        return this.interleave(facts, bookIdeas, 4);
    }

    setFactsOnly(v) {
        this.factsOnly = !!v;
        // If switching to facts-only while on a book-category topic, reset to All
        // (a book category has no standalone facts, so it'd show nothing).
        if (this.factsOnly && this.activeTopic !== 'all' && !String(this.activeTopic).startsWith('topic-')) {
            this.activeTopic = 'all';
        }
        this.visibleCount = this._pageSize;
        this.render();
    }
    _topicSeedOffset() {
        // Vary order per topic so switching topics doesn't feel identical.
        let h = 0; const s = String(this.activeTopic);
        for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
        return h;
    }

    // ============================================
    // RENDERING — full feed view
    // ============================================
    render() {
        const host = document.getElementById('deepstash-content');
        if (!host) return;
        host.innerHTML = `
            <div class="ds-wrap">
                ${this.renderTabs()}
                ${this.tab === 'discover' ? this.renderDiscover() : this.renderSaved()}
            </div>`;
        host.scrollTop = 0;
        window.scrollTo(0, 0);
    }

    renderTabs() {
        const savedN = this.savedKeys().length;
        return `
            <div class="ds-tabs">
                <button class="ds-tab ${this.tab === 'discover' ? 'ds-tab-on' : ''}" onclick="window.deepstash.setTab('discover')">🧭 For You</button>
                <button class="ds-tab ${this.tab === 'saved' ? 'ds-tab-on' : ''}" onclick="window.deepstash.setTab('saved')">💾 Saved${savedN ? ` (${savedN})` : ''}</button>
            </div>`;
    }

    setTab(t) { this.tab = t; this.visibleCount = this._pageSize; this.render(); }

    renderDiscover() {
        // Topics as a dropdown. When "Facts only" is on, only standalone topics.
        let topics = this.topicsWithIdeas();
        if (this.factsOnly) topics = topics.filter(t => t.standalone);
        const options = [`<option value="all" ${this.activeTopic === 'all' ? 'selected' : ''}>✨ All topics</option>`]
            .concat(topics.map(t => `<option value="${t.id}" ${this.activeTopic === t.id ? 'selected' : ''}>${t.icon} ${escapeHtml(t.name)}</option>`)).join('');
        const topicDropdown = `
            <div class="ds-topic-field">
                <label class="ds-topic-label" for="ds-topic-select">Topic</label>
                <select id="ds-topic-select" class="ds-topic-select" onchange="window.deepstash.setTopic(this.value)">${options}</select>
            </div>`;

        const factsToggle = `
            <label class="ds-toggle ${this.factsOnly ? 'ds-toggle-on' : ''}">
                <input type="checkbox" ${this.factsOnly ? 'checked' : ''} onchange="window.deepstash.setFactsOnly(this.checked)">
                <span class="ds-toggle-track"><span class="ds-toggle-thumb"></span></span>
                <span class="ds-toggle-label">💡 Facts only</span>
            </label>`;

        const all = this.feedIdeas();
        const shown = all.slice(0, this.visibleCount);
        const cards = shown.map(i => this.ideaCard(i)).join('');
        const moreBtn = all.length > this.visibleCount
            ? `<button class="ds-more" onclick="window.deepstash.showMore()">Show more ideas</button>`
            : `<p class="ds-end">You've reached the end — check back tomorrow for a fresh mix ✨</p>`;

        return `
            <div class="ds-intro">
                <h2 class="ds-heading">Discover something new</h2>
                <p class="ds-subheading">Bite-sized insights and facts from across the library and beyond. Save the ones that click.</p>
            </div>
            <div class="ds-controls">${topicDropdown}${factsToggle}</div>
            <div class="ds-feed">${cards || this.emptyState('No ideas in this topic yet.')}</div>
            ${cards ? moreBtn : ''}`;
    }

    renderSaved() {
        const keys = this.savedKeys();
        const ideas = keys.map(k => this.ideaByKey(k)).filter(Boolean);
        if (!ideas.length) {
            return this.emptyState('No saved ideas yet. Tap the 💾 on any idea in Discover to stash it here.');
        }
        // Newest saved first.
        const cards = ideas.reverse().map(i => this.ideaCard(i)).join('');
        return `
            <div class="ds-intro">
                <h2 class="ds-heading">Your stash</h2>
                <p class="ds-subheading">${ideas.length} idea${ideas.length > 1 ? 's' : ''} you've saved.</p>
            </div>
            <div class="ds-feed">${cards}</div>`;
    }

    ideaCard(i) {
        const saved = this.isSaved(i.key);
        return `
            <article class="ds-card" style="--ds-cat:${i.categoryColor}">
                <div class="ds-card-top">
                    <span class="ds-tag">${i.categoryIcon} ${escapeHtml(i.categoryName)}</span>
                    <button class="ds-save ${saved ? 'ds-save-on' : ''}" title="${saved ? 'Remove from saved' : 'Save this idea'}"
                            aria-label="${saved ? 'Remove from saved' : 'Save this idea'}"
                            onclick="window.deepstash.toggleSave('${i.key}')">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="${saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                        </svg>
                    </button>
                </div>
                ${i.title ? `<h3 class="ds-card-title">${escapeHtml(i.title)}</h3>` : ''}
                <p class="ds-card-text">${escapeHtml(i.text)}</p>
                ${i.standalone
                    ? `<div class="ds-fact-note">💡 ${escapeHtml(i.categoryName)}${i.source ? ` · ${escapeHtml(i.source)}` : ' · Good to know'}</div>`
                    : `<button class="ds-source" onclick="app.startLesson('${i.bookId}', '${i.lessonId}')">
                        <span class="ds-source-label">FROM</span>
                        <span class="ds-source-book">${escapeHtml(i.bookTitle)}${i.author ? ` · ${escapeHtml(i.author)}` : ''}</span>
                        <span class="ds-source-arrow">Read lesson →</span>
                    </button>`}
            </article>`;
    }

    emptyState(msg) {
        return `<div class="ds-empty"><span class="ds-empty-icon">💡</span><p>${escapeHtml(msg)}</p></div>`;
    }

    setTopic(id) { this.activeTopic = id; this.visibleCount = this._pageSize; this.render(); }
    showMore() { this.visibleCount += this._pageSize; this.render(); }

    // ============================================
    // HOME STRIP — a horizontal teaser row on the home screen
    // ============================================
    renderHomeStrip() {
        const strip = document.getElementById('deepstash-home-strip');
        if (!strip) return;
        const pool = this.buildPool();
        const seed = this.dailySeed();
        // Mix a few curated facts into the daily teaser row.
        const facts = this.seededShuffle(pool.filter(i => i.standalone), seed + 5);
        const bookIdeas = this.seededShuffle(pool.filter(i => !i.standalone), seed + 6);
        // Only a handful of cards on the home page — they lay out in a grid
        // that fits the page margin; the header's "See all" opens the rest.
        const daily = (facts.length ? this.interleave(facts, bookIdeas, 3) : bookIdeas).slice(0, this.HOME_CARD_COUNT);
        if (!daily.length) { strip.innerHTML = ''; return; }
        strip.innerHTML = daily.map(i => {
            const saved = this.isSaved(i.key);
            const openAction = i.standalone
                ? `app.switchView('deepstash')`
                : `app.startLesson('${i.bookId}', '${i.lessonId}')`;
            const srcLabel = i.standalone ? `💡 ${i.categoryName}` : i.bookTitle;
            return `
                <div class="ds-mini" style="--ds-cat:${i.categoryColor}">
                    <div class="ds-mini-top">
                        <span class="ds-mini-tag">${i.categoryIcon} ${escapeHtml(i.categoryName)}</span>
                        <button class="ds-mini-save ${saved ? 'ds-save-on' : ''}" title="${saved ? 'Remove from saved' : 'Save this idea'}"
                                aria-label="${saved ? 'Remove from saved' : 'Save this idea'}"
                                onclick="event.stopPropagation(); window.deepstash.toggleSave('${i.key}')">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="${saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" aria-hidden="true">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                            </svg>
                        </button>
                    </div>
                    <p class="ds-mini-text" onclick="${openAction}">${escapeHtml(i.text)}</p>
                    <div class="ds-mini-src" onclick="${openAction}">${escapeHtml(srcLabel)}</div>
                </div>`;
        }).join('');
    }
}

// Expose for app.js
window.DeepstashFeed = DeepstashFeed;
