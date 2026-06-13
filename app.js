// ============================================
// SYNTHESIS LEARNING APP - MAIN APPLICATION
// ============================================

class SynthesisApp {
    constructor() {
        this.currentView = 'home';
        this.currentCategory = null;
        this.currentBook = null;
        this.currentLesson = null;
        this.currentCard = 0;
        this.init();
    }

    init() {
        // Hide loading screen after 2 seconds
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('app').style.display = 'flex';
            this.render();
            this.updateGreeting();
            this.updateDailyInsight();

            // Restore last view from localStorage
            this.restoreLastView();
        }, 2000);

        // Set up event listeners
        this.setupEventListeners();

        // Update streak
        this.updateStreak();
        
        // Initialize premium features
        if (typeof PremiumFeatures !== 'undefined') {
            window.premiumFeatures = new PremiumFeatures(this);
        }

        // Initialize gamification system
        if (typeof GamificationSystem !== 'undefined') {
            window.gamification = new GamificationSystem(this);
            this.updateHeaderXP();
        }

        // Initialize active recall system
        if (typeof ActiveRecallSystem !== 'undefined') {
            window.activeRecall = new ActiveRecallSystem(this);
        }

        // Initialize exam center
        if (typeof ExamCenter !== 'undefined') {
            window.examCenter = new ExamCenter(this);
            examCenter = window.examCenter;
        }

        // Initialize fitness tracker
        if (typeof FitnessTracker !== 'undefined') {
            window.fitnessTracker = new FitnessTracker(this);
        }
    }

    updateHeaderXP() {
        if (!window.gamification) return;

        const user = APP_DATA.user;
        const title = window.gamification.getLevelTitle();

        const levelIcon = document.getElementById('header-level-icon');
        const levelText = document.getElementById('header-level');

        if (levelIcon) levelIcon.textContent = title.icon;
        if (levelText) levelText.textContent = `Lv.${user.level}`;
    }

    updateGreeting() {
        const hour = new Date().getHours();
        let greeting;

        if (hour >= 5 && hour < 12) {
            greeting = 'Good morning';
        } else if (hour >= 12 && hour < 17) {
            greeting = 'Good afternoon';
        } else {
            greeting = 'Good evening';
        }

        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            heroTitle.textContent = `${greeting}, Kandy 👋`;
        }
    }

    updateDailyInsight() {
        // Collect all lessons with actual content that haven't been completed
        const availableLessons = [];

        APP_DATA.categories.forEach(category => {
            category.books.forEach(book => {
                if (book.lessonList) {
                    book.lessonList.forEach(lesson => {
                        // Only include lessons that have cards (actual content)
                        if (lesson.cards && lesson.cards.length > 0) {
                            availableLessons.push({
                                bookId: book.id,
                                bookTitle: book.title,
                                bookAuthor: book.author,
                                lessonId: lesson.id,
                                lessonTitle: lesson.title,
                                duration: lesson.duration,
                                completed: lesson.completed,
                                category: category.name,
                                categoryIcon: category.icon,
                                // Get excerpt from first card content
                                excerpt: this.getExcerptFromLesson(lesson)
                            });
                        }
                    });
                }
            });
        });

        // Prefer incomplete lessons, but fall back to any lesson if all complete
        let lessonsPool = availableLessons.filter(l => !l.completed);
        if (lessonsPool.length === 0) {
            lessonsPool = availableLessons;
        }

        if (lessonsPool.length === 0) {
            // Fallback if no lessons have content yet
            return;
        }

        // Use day of year as seed for consistent daily random selection
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);

        // Seeded random selection - same lesson all day, different each day
        const randomIndex = this.seededRandom(dayOfYear, lessonsPool.length);
        const todayLesson = lessonsPool[randomIndex];

        // Store for startDailyLesson to use
        this.todayInsightLesson = todayLesson;

        // Update the UI
        const insightTitle = document.querySelector('.insight-title');
        const insightExcerpt = document.querySelector('.insight-excerpt');
        const insightTime = document.querySelector('.insight-time');
        const insightBadge = document.querySelector('.insight-badge');

        if (insightTitle) {
            insightTitle.textContent = todayLesson.lessonTitle;
        }
        if (insightExcerpt) {
            insightExcerpt.textContent = todayLesson.excerpt;
        }
        if (insightTime) {
            insightTime.textContent = `${todayLesson.duration} min • ${todayLesson.bookTitle}`;
        }
        if (insightBadge) {
            insightBadge.textContent = `${todayLesson.categoryIcon} ${todayLesson.category}`;
        }
    }

    // Get a preview excerpt from the lesson's first card
    getExcerptFromLesson(lesson) {
        if (!lesson.cards || lesson.cards.length === 0) {
            return 'Discover new insights in this lesson...';
        }

        // Find first card with content
        for (const card of lesson.cards) {
            if (card.content) {
                // Clean up markdown and get first ~120 chars
                let excerpt = card.content
                    .replace(/\*\*/g, '') // Remove bold markers
                    .replace(/\n/g, ' ')  // Replace newlines with spaces
                    .replace(/•/g, '')    // Remove bullets
                    .replace(/\s+/g, ' ') // Collapse multiple spaces
                    .trim();

                if (excerpt.length > 120) {
                    excerpt = excerpt.substring(0, 117) + '...';
                }
                return excerpt;
            }
        }
        return 'Explore this lesson to expand your knowledge...';
    }

    // Seeded random number generator for consistent daily selection
    seededRandom(seed, max) {
        const x = Math.sin(seed * 9999) * 10000;
        return Math.floor((x - Math.floor(x)) * max);
    }

    setupEventListeners() {
        // Bottom navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const view = e.currentTarget.dataset.view;
                this.switchView(view);
                this.updateActiveNav(e.currentTarget);
            });
        });

        // Header buttons
        document.getElementById('search-btn').addEventListener('click', () => {
            this.showSearch();
        });

        document.getElementById('profile-btn').addEventListener('click', () => {
            this.switchView('profile');
        });

        document.getElementById('daily-lesson-btn').addEventListener('click', () => {
            this.startDailyLesson();
        });

        // Back buttons
        document.getElementById('category-back-btn').addEventListener('click', () => {
            this.switchView('home');
        });

        document.getElementById('book-back-btn').addEventListener('click', () => {
            if (this.currentCategory) {
                this.showCategory(this.currentCategory.id);
            } else {
                this.switchView('home');
            }
        });

        document.getElementById('lesson-back-btn').addEventListener('click', () => {
            this.showBook(this.currentBook.id);
        });

        document.getElementById('profile-back-btn').addEventListener('click', () => {
            this.switchView('home');
        });

        const examBackBtn = document.getElementById('exam-back-btn');
        if (examBackBtn) {
            examBackBtn.addEventListener('click', () => {
                this.switchView('home');
            });
        }

        // Lesson navigation
        document.getElementById('prev-card-btn').addEventListener('click', () => {
            this.previousCard();
        });

        document.getElementById('next-card-btn').addEventListener('click', () => {
            this.nextCard();
        });
    }

    updateActiveNav(activeItem) {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        activeItem.classList.add('active');
    }

    switchView(viewName) {
        // Always scroll to top when switching views
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;

        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });

        const targetView = document.getElementById(`${viewName}-view`);
        if (targetView) {
            targetView.classList.add('active');
            this.currentView = viewName;
            // Also scroll the view container to top
            targetView.scrollTop = 0;
            // Save current view to localStorage
            this.saveCurrentView();
        }

        // Update Recipe Assistant visibility (only shows in nutrition hub)
        if (typeof updateRecipeAssistantVisibility === 'function') {
            updateRecipeAssistantVisibility(viewName);
        }

        // Render specific view content
        if (viewName === 'profile') {
            this.renderProfile();
        } else if (viewName === 'home') {
            this.renderHome();
        } else if (viewName === 'vision-board') {
            window.premiumFeatures?.renderVisionBoard();
        } else if (viewName === 'manifestation') {
            window.premiumFeatures?.renderManifestation();
        } else if (viewName === 'shadow-work') {
            window.premiumFeatures?.renderShadowWork();
        } else if (viewName === 'workout') {
            window.fitnessTracker?.renderWorkoutHub();
        } else if (viewName === 'flashcards') {
            window.activeRecall?.renderFlashcards();
        } else if (viewName === 'quick-quiz') {
            window.activeRecall?.renderQuickQuiz();
        } else if (viewName === 'exam') {
            window.examCenter?.renderExamHome();
        } else if (viewName === 'feynman') {
            window.activeRecall?.renderFeynman();
        } else if (viewName === 'body-metrics') {
            window.fitnessTracker?.renderBodyMetrics();
        } else if (viewName === 'trt') {
            window.fitnessTracker?.renderTRT();
        } else if (viewName === 'supplements') {
            window.fitnessTracker?.renderSupplements();
        } else if (viewName === 'nutrition') {
            window.fitnessTracker?.renderNutrition();
        }
    }

    // Save current view state to localStorage for persistence on refresh
    saveCurrentView() {
        const state = {
            view: this.currentView,
            categoryId: this.currentCategory?.id || null,
            bookId: this.currentBook?.id || null,
            lessonId: this.currentLesson?.id || null,
            cardIndex: this.currentCard
        };
        localStorage.setItem('synthesis_last_view', JSON.stringify(state));
    }

    // Restore last view from localStorage
    restoreLastView() {
        try {
            const savedState = localStorage.getItem('synthesis_last_view');
            if (!savedState) return;

            const state = JSON.parse(savedState);

            // Don't restore if we're already on home
            if (!state.view || state.view === 'home') return;

            // Restore based on the saved view
            if (state.view === 'library') {
                this.switchView('library');
                this.renderLibrary();
            } else if (state.view === 'category' && state.categoryId) {
                const category = APP_DATA.categories.find(c => c.id === state.categoryId);
                if (category) {
                    this.currentCategory = category;
                    this.switchView('category');
                    this.renderCategory();
                }
            } else if (state.view === 'book' && state.bookId) {
                const book = this.findBookById(state.bookId);
                if (book) {
                    this.currentBook = book;
                    this.switchView('book');
                    this.renderBookDetail();
                }
            } else if (state.view === 'lesson' && state.bookId && state.lessonId) {
                const book = this.findBookById(state.bookId);
                if (book) {
                    this.currentBook = book;
                    const lesson = book.lessonList?.find(l => String(l.id) === String(state.lessonId));
                    if (lesson) {
                        this.currentLesson = lesson;
                        this.currentCard = state.cardIndex || 0;
                        this.switchView('lesson');
                        this.renderLesson();
                    }
                }
            } else if (state.view === 'profile') {
                this.switchView('profile');
            } else {
                // For other views (premium features, fitness, etc.)
                this.switchView(state.view);
            }
        } catch (e) {
            console.log('Could not restore last view:', e);
        }
    }

    // Helper to find a book by ID across all categories
    findBookById(bookId) {
        for (const category of APP_DATA.categories) {
            const book = category.books?.find(b => b.id === bookId);
            if (book) return book;
        }
        return null;
    }

    updateStreak() {
        document.getElementById('streak-count').textContent = APP_DATA.user.streak;
    }

    render() {
        this.renderHome();
    }

    renderHome() {
        this.renderContinueLearning();
        this.renderCategories();
        this.renderFeaturedBooks();
        this.renderWhatsNewBooks();

        // Render daily challenges
        if (window.gamification) {
            window.gamification.renderDailyChallenges();
        }

        // Render favorites shelf
        if (window.activeRecall) {
            window.activeRecall.renderFavorites();
            window.activeRecall.updateDueBadge();
        }
    }

    manageFavorites() {
        alert('You can add books to your favorites from any book detail page! Look for the star icon.');
    }

    toggleFavorite(bookId) {
        if (window.activeRecall) {
            window.activeRecall.toggleFavorite(bookId);
            this.showBook(bookId); // Refresh the view
        }
    }

    renderContinueLearning() {
        const container = document.getElementById('continue-learning');
        const booksInProgress = getBooksInProgress();

        if (booksInProgress.length === 0) {
            container.innerHTML = '<p style="color: var(--color-text-secondary); text-align: center; padding: 2rem;">No books in progress. Start learning below!</p>';
            return;
        }

        container.innerHTML = booksInProgress.map(book => `
            <div class="book-progress-card" onclick="app.showBook('${book.id}')">
                <div class="book-thumbnail" style="background: linear-gradient(135deg, ${this.getCategoryColor(book.category)} 0%, ${this.getCategoryColorDark(book.category)} 100%)">
                    ${this.getBookInitials(book.title)}
                </div>
                <div class="book-progress-info">
                    <div class="book-progress-title">${book.title}</div>
                    <div class="book-progress-author">${book.author}</div>
                    <div class="progress-container">
                        <div class="progress-bar-bg">
                            <div class="progress-bar-fill" style="width: ${book.progress}%"></div>
                        </div>
                        <span class="progress-percent">${book.progress}% complete • ${book.lessons} lessons</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderCategories() {
        const container = document.getElementById('categories-grid');
        container.innerHTML = APP_DATA.categories.map(category => `
            <div class="category-card" style="--category-color: ${category.color}" onclick="app.showCategory('${category.id}')">
                <span class="category-icon">${category.icon}</span>
                <div class="category-name">${category.name}</div>
                <div class="category-count">${category.books.length} books</div>
            </div>
        `).join('');
    }

    renderFeaturedBooks() {
        const container = document.getElementById('featured-books');
        const featured = getTrendingBooks();

        container.innerHTML = featured.map(book => `
            <div class="featured-book-card" onclick="app.showBook('${book.id}')">
                <div class="book-cover" style="background: linear-gradient(135deg, ${this.getCategoryColor(book.category)} 0%, ${this.getCategoryColorDark(book.category)} 100%)">
                    <div class="book-cover-text">${book.title}</div>
                </div>
                <div class="book-info">
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">${book.author}</div>
                    <div class="book-meta">
                        <span class="book-lessons">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>
                            ${book.lessons} lessons
                        </span>
                        <span class="book-time">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            ${book.duration} min
                        </span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    renderWhatsNewBooks() {
        const container = document.getElementById('whats-new-books');
        if (!container) return;
        const books = (typeof getWhatsNewBooks === 'function') ? getWhatsNewBooks() : [];
        if (books.length === 0) {
            container.innerHTML = '';
            return;
        }
        container.innerHTML = books.map(book => `
            <div class="featured-book-card" onclick="app.showBook('${book.id}')">
                <div class="book-cover" style="background: linear-gradient(135deg, ${this.getCategoryColor(book.category)} 0%, ${this.getCategoryColorDark(book.category)} 100%)">
                    <div class="book-cover-text">${book.title}</div>
                </div>
                <div class="book-info">
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">${book.author}</div>
                    <div class="book-meta">
                        <span class="book-lessons">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                            </svg>
                            ${book.lessons} lessons
                        </span>
                        <span class="book-time">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            ${book.duration} min
                        </span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    showCategory(categoryId) {
        this.currentCategory = getCategoryById(categoryId);
        if (!this.currentCategory) return;

        document.getElementById('category-title').textContent = this.currentCategory.name;

        const container = document.getElementById('category-books');
        container.classList.toggle('mbc-mode', categoryId === 'medical-billing-coding');

        // Medical Billing, Coding & HIM Track gets a dedicated course-and-exam
        // hub layout instead of the generic book grid.
        if (categoryId === 'medical-billing-coding') {
            this.renderMedicalBillingCourse();
            this.switchView('category');
            return;
        }

        // Exam Center track banner — explains how the curriculum + Exam Center
        // work together, shows direct links to the exam modes.
        let banner = '';
        if (this.currentCategory.examCenterTrack) {
            banner = `
                <div class="exam-track-banner" style="background: linear-gradient(135deg, #0ea5e9, #0369a1); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
                    <h3 style="margin: 0 0 0.5rem 0; font-size: 1.25rem;">📘 How This Course Works</h3>
                    <p style="margin: 0 0 1rem 0; opacity: 0.95; line-height: 1.5;">
                        This is a <strong>10-book curriculum</strong> paired with the <strong>Exam Center</strong>. Start at the top book (US Healthcare & Insurance 101) and work down. After each lesson, take its quiz in the Exam Center. <strong>Score 80% or higher to unlock the next lesson.</strong>
                    </p>
                    <ul style="margin: 0 0 1rem 1.25rem; padding: 0; opacity: 0.95; line-height: 1.6;">
                        <li><strong>Lesson mode:</strong> one lesson's quiz — gating exam, must pass 80%</li>
                        <li><strong>Unit mode:</strong> one book's unlocked questions, mixed</li>
                        <li><strong>Comprehensive:</strong> ALL unlocked questions across the whole track</li>
                        <li><strong>Daily mode:</strong> spaced-repetition queue of due + previously-missed questions</li>
                    </ul>
                    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
                        <button onclick="app.switchView('exam')" style="background: white; color: #0369a1; border: none; padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 600; cursor: pointer;">
                            Open Exam Center →
                        </button>
                        <button onclick="if(window.examCenter){window.examCenter.startDailyReview();} app.switchView('exam');" style="background: rgba(255,255,255,0.18); color: white; border: 1px solid rgba(255,255,255,0.4); padding: 0.6rem 1.2rem; border-radius: 8px; font-weight: 600; cursor: pointer;">
                            Start Today's Spaced Review
                        </button>
                    </div>
                </div>
            `;
        }

        container.innerHTML = banner + this.currentCategory.books.map(book => `
            <div class="featured-book-card" onclick="app.showBook('${book.id}')">
                <div class="book-cover" style="background: linear-gradient(135deg, ${this.currentCategory.color} 0%, ${this.getCategoryColorDark(book.category)} 100%)">
                    <div class="book-cover-text">${book.title}</div>
                </div>
                <div class="book-info">
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">${book.author}</div>
                    <div class="book-meta">
                        <span class="book-lessons">${book.lessons} lessons</span>
                        <span class="book-time">${book.duration} min</span>
                    </div>
                    ${book.progress > 0 ? `
                        <div class="progress-container" style="margin-top: 0.5rem;">
                            <div class="progress-bar-bg">
                                <div class="progress-bar-fill" style="width: ${book.progress}%"></div>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');

        this.switchView('category');
    }

    // ============================================================
    // Medical Billing, Coding & HIM Track — dedicated course page
    // ============================================================
    getMBCStats(category) {
        const books = category.books || [];
        const ec = window.examCenter;
        let lessonsTotal = 0, lessonsPassed = 0;
        let nextBookId = null, nextLessonId = null;
        let questionsTotal = 0, questionsMastered = 0;
        const bookStats = [];

        for (const book of books) {
            const lessons = book.lessonList || [];
            let bookLessonsPassed = 0;
            let bookLessonsUnlocked = 0;
            for (const lesson of lessons) {
                lessonsTotal++;
                const unlocked = ec ? ec.isLessonUnlocked(book.id, lesson.id) : (lessonsTotal === 1);
                const passed = ec ? ec.isLessonPassed(book.id, lesson.id) : false;
                if (unlocked) bookLessonsUnlocked++;
                if (passed) { lessonsPassed++; bookLessonsPassed++; }
                if (unlocked && !passed && !nextBookId) {
                    nextBookId = book.id;
                    nextLessonId = lesson.id;
                }
            }
            let pool = [];
            if (ec) {
                try { pool = ec.harvestPool({ bookId: book.id }); } catch (_) { pool = []; }
            }
            const bookMastered = pool.filter(q =>
                ec && ec.masteryOf(q.id) >= 0.85 && ec.getStat(q.id).seen > 0
            ).length;
            questionsTotal += pool.length;
            questionsMastered += bookMastered;
            const pct = lessons.length ? Math.round((bookLessonsPassed / lessons.length) * 100) : 0;
            bookStats.push({
                book,
                lessons: lessons.length,
                passed: bookLessonsPassed,
                unlocked: bookLessonsUnlocked,
                percent: pct,
                pool: pool.length,
                mastered: bookMastered,
            });
        }

        const booksCompleted = bookStats.filter(s => s.lessons > 0 && s.passed === s.lessons).length;
        const percentComplete = lessonsTotal ? Math.round((lessonsPassed / lessonsTotal) * 100) : 0;
        const examHistory = (APP_DATA.user && APP_DATA.user.examHistory) || [];
        const examsTaken = examHistory.length;
        const avgScore = examsTaken
            ? Math.round(examHistory.reduce((a, e) => a + e.pct, 0) / examsTaken)
            : 0;

        return {
            books, bookStats,
            lessonsTotal, lessonsPassed, percentComplete,
            booksTotal: books.length, booksCompleted,
            questionsTotal, questionsMastered,
            examsTaken, avgScore,
            nextBookId, nextLessonId,
        };
    }

    renderMedicalBillingCourse() {
        const cat = this.currentCategory;
        const s = this.getMBCStats(cat);
        const container = document.getElementById('category-books');
        const ecReady = !!window.examCenter;

        const continueLabel = s.lessonsPassed === 0 ? 'Start the Course' : 'Continue Course';
        const continueTarget = s.nextBookId && s.nextLessonId
            ? `app.startLesson('${s.nextBookId}','${s.nextLessonId}')`
            : (s.books[0] ? `app.showBook('${s.books[0].id}')` : '');

        // Split into two parts: Billing & Coding (1-5) and HIM/Data/Quality (6-10).
        const part1Ids = new Set(['him-insurance-101','him-revenue-cycle','him-coding-fundamentals','him-claim-forms','him-compliance']);
        const part1 = s.bookStats.filter(b => part1Ids.has(b.book.id));
        const part2 = s.bookStats.filter(b => !part1Ids.has(b.book.id));

        const renderModule = (entry, indexInCourse) => {
            const b = entry.book;
            const pct = entry.percent;
            let statusPill;
            if (entry.lessons === 0) statusPill = '<span class="mbc-pill mbc-pill-locked">No content</span>';
            else if (entry.passed === entry.lessons) statusPill = '<span class="mbc-pill mbc-pill-done">✓ Completed</span>';
            else if (entry.passed > 0) statusPill = `<span class="mbc-pill mbc-pill-active">In Progress · ${entry.passed}/${entry.lessons}</span>`;
            else if (entry.unlocked > 0) statusPill = '<span class="mbc-pill mbc-pill-ready">Ready to Start</span>';
            else statusPill = '<span class="mbc-pill mbc-pill-locked">🔒 Locked</span>';

            const unitBtn = (ecReady && entry.pool > 0)
                ? `<button class="mbc-mod-btn mbc-mod-btn-secondary" onclick="event.stopPropagation(); window.examCenter && (app.switchView('exam'), window.examCenter.startUnit('${b.id}'))">Unit Quiz</button>`
                : '';

            return `
                <div class="mbc-module" onclick="app.showBook('${b.id}')">
                    <div class="mbc-mod-number">${indexInCourse}</div>
                    <div class="mbc-mod-body">
                        <div class="mbc-mod-head">
                            <div class="mbc-mod-title">${b.title}</div>
                            ${statusPill}
                        </div>
                        <div class="mbc-mod-meta">
                            <span>${entry.lessons} lessons</span>
                            <span>·</span>
                            <span>${b.duration} min</span>
                            ${entry.pool > 0 ? `<span>·</span><span>${entry.mastered}/${entry.pool} Qs mastered</span>` : ''}
                        </div>
                        <div class="mbc-mod-progress">
                            <div class="mbc-mod-progress-bar" style="width:${pct}%"></div>
                        </div>
                    </div>
                    <div class="mbc-mod-actions">
                        <button class="mbc-mod-btn mbc-mod-btn-primary" onclick="event.stopPropagation(); app.showBook('${b.id}')">Open</button>
                        ${unitBtn}
                    </div>
                </div>`;
        };

        let cursor = 0;
        const part1Html = part1.map(e => renderModule(e, ++cursor)).join('');
        const part2Html = part2.map(e => renderModule(e, ++cursor)).join('');

        container.innerHTML = `
            <div class="mbc-page">
                <section class="mbc-hero">
                    <div class="mbc-hero-top">
                        <span class="mbc-hero-icon">${cat.icon || '🩺'}</span>
                        <div class="mbc-hero-title-block">
                            <div class="mbc-hero-eyebrow">Full Course · Exam-Gated Curriculum</div>
                            <h1 class="mbc-hero-title">${cat.name}</h1>
                        </div>
                    </div>
                    <p class="mbc-hero-desc">${cat.description || ''}</p>
                    <div class="mbc-hero-progress">
                        <div class="mbc-hero-progress-row">
                            <span class="mbc-hero-progress-label">Course Progress</span>
                            <span class="mbc-hero-progress-pct">${s.percentComplete}%</span>
                        </div>
                        <div class="mbc-hero-progress-bar-bg">
                            <div class="mbc-hero-progress-bar-fill" style="width:${s.percentComplete}%"></div>
                        </div>
                        <div class="mbc-hero-progress-meta">
                            ${s.lessonsPassed}/${s.lessonsTotal} lessons passed · ${s.booksCompleted}/${s.booksTotal} books completed${s.questionsTotal ? ` · ${s.questionsMastered}/${s.questionsTotal} questions mastered` : ''}
                        </div>
                    </div>
                    <div class="mbc-hero-actions">
                        <button class="mbc-cta mbc-cta-primary" onclick="${continueTarget}">
                            <span class="mbc-cta-icon">▶</span> ${continueLabel}
                        </button>
                        <button class="mbc-cta mbc-cta-secondary" onclick="app.switchView('exam'); window.examCenter && window.examCenter.startDaily && window.examCenter.startDaily();">
                            <span class="mbc-cta-icon">🔁</span> Today's Spaced Review
                        </button>
                        <button class="mbc-cta mbc-cta-tertiary" onclick="app.switchView('exam')">
                            Open Exam Center →
                        </button>
                    </div>
                </section>

                <section class="mbc-stats">
                    <div class="mbc-stat-tile">
                        <span class="mbc-stat-val">${s.booksTotal}</span>
                        <span class="mbc-stat-lbl">Books</span>
                    </div>
                    <div class="mbc-stat-tile">
                        <span class="mbc-stat-val">${s.lessonsTotal}</span>
                        <span class="mbc-stat-lbl">Lessons</span>
                    </div>
                    <div class="mbc-stat-tile">
                        <span class="mbc-stat-val">${s.examsTaken}</span>
                        <span class="mbc-stat-lbl">Exams Taken</span>
                    </div>
                    <div class="mbc-stat-tile">
                        <span class="mbc-stat-val">${s.avgScore}%</span>
                        <span class="mbc-stat-lbl">Avg Score</span>
                    </div>
                </section>

                <section class="mbc-exam-panel">
                    <div class="mbc-section-head">
                        <h2 class="mbc-section-title">🎓 Exam Center</h2>
                        <p class="mbc-section-sub">Retrieval practice — get tested, miss some, repeat.</p>
                    </div>
                    <div class="mbc-exam-grid">
                        <button class="mbc-exam-tile mbc-exam-lesson" onclick="app.switchView('exam')">
                            <span class="mbc-exam-tile-icon">📝</span>
                            <span class="mbc-exam-tile-title">Lesson Quizzes</span>
                            <span class="mbc-exam-tile-desc">80% to unlock the next lesson</span>
                        </button>
                        <button class="mbc-exam-tile mbc-exam-unit" onclick="app.switchView('exam')">
                            <span class="mbc-exam-tile-icon">📚</span>
                            <span class="mbc-exam-tile-title">Unit Exams</span>
                            <span class="mbc-exam-tile-desc">One book's unlocked questions, mixed</span>
                        </button>
                        <button class="mbc-exam-tile mbc-exam-comp" onclick="app.switchView('exam'); window.examCenter && window.examCenter.chooseComprehensive && window.examCenter.chooseComprehensive();">
                            <span class="mbc-exam-tile-icon">🎓</span>
                            <span class="mbc-exam-tile-title">Comprehensive</span>
                            <span class="mbc-exam-tile-desc">Every unlocked question across the track</span>
                        </button>
                        <button class="mbc-exam-tile mbc-exam-daily" onclick="app.switchView('exam'); window.examCenter && window.examCenter.startDaily && window.examCenter.startDaily();">
                            <span class="mbc-exam-tile-icon">🔁</span>
                            <span class="mbc-exam-tile-title">Daily Review</span>
                            <span class="mbc-exam-tile-desc">Spaced repetition — due + missed first</span>
                        </button>
                    </div>
                </section>

                <section class="mbc-roadmap">
                    <div class="mbc-section-head">
                        <h2 class="mbc-section-title">📚 Curriculum Roadmap</h2>
                        <p class="mbc-section-sub">${s.booksTotal} books, ${s.lessonsTotal} lessons — work top to bottom. Pass each lesson's quiz (80%) to unlock the next.</p>
                    </div>

                    <div class="mbc-part">
                        <div class="mbc-part-header">
                            <span class="mbc-part-num">Part I</span>
                            <span class="mbc-part-title">Billing &amp; Coding Core</span>
                            <span class="mbc-part-count">${part1.length} books</span>
                        </div>
                        <div class="mbc-modules">${part1Html}</div>
                    </div>

                    <div class="mbc-part">
                        <div class="mbc-part-header">
                            <span class="mbc-part-num">Part II</span>
                            <span class="mbc-part-title">HIM, Data &amp; Quality</span>
                            <span class="mbc-part-count">${part2.length} books</span>
                        </div>
                        <div class="mbc-modules">${part2Html}</div>
                    </div>
                </section>
            </div>
        `;
    }

    showAllBooks() {
        this.currentCategory = null;

        const allBooks = APP_DATA.categories.flatMap(c => c.books || []);
        document.getElementById('category-title').textContent = `All Books (${allBooks.length})`;

        const container = document.getElementById('category-books');
        container.classList.remove('mbc-mode');
        container.innerHTML = allBooks.map(book => `
            <div class="featured-book-card" onclick="app.showBook('${book.id}')">
                <div class="book-cover" style="background: linear-gradient(135deg, ${this.getCategoryColor(book.category)} 0%, ${this.getCategoryColorDark(book.category)} 100%)">
                    <div class="book-cover-text">${book.title}</div>
                </div>
                <div class="book-info">
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">${book.author}</div>
                    <div class="book-meta">
                        <span class="book-lessons">${book.lessons} lessons</span>
                        <span class="book-time">${book.duration} min</span>
                    </div>
                    ${book.progress > 0 ? `
                        <div class="progress-container" style="margin-top: 0.5rem;">
                            <div class="progress-bar-bg">
                                <div class="progress-bar-fill" style="width: ${book.progress}%"></div>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');

        this.switchView('category');
    }

    showBook(bookId) {
        this.currentBook = getBookById(bookId);
        if (!this.currentBook) return;
        this.saveCurrentView();

        const categoryColor = this.getCategoryColor(this.currentBook.category);
        const categoryColorDark = this.getCategoryColorDark(this.currentBook.category);

        const detailHtml = `
            <div class="book-detail-header">
                <div class="book-detail-cover" style="background: linear-gradient(135deg, ${categoryColor} 0%, ${categoryColorDark} 100%)">
                    <div class="book-cover-text">${this.currentBook.title}</div>
                </div>
                <div class="book-detail-info">
                    <h1>${this.currentBook.title}</h1>
                    <div class="book-detail-author">by ${this.currentBook.author}</div>
                    <div class="book-stats">
                        <div class="stat">
                            <span class="stat-value">${this.currentBook.lessons}</span>
                            <span class="stat-label">Lessons</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${this.currentBook.duration}</span>
                            <span class="stat-label">Minutes</span>
                        </div>
                        <div class="stat">
                            <span class="stat-value">${this.currentBook.progress}%</span>
                            <span class="stat-label">Complete</span>
                        </div>
                    </div>
                    <p class="book-description">${this.currentBook.description}</p>
                    <div class="book-actions">
                        <button class="start-book-btn" onclick="app.startBook('${this.currentBook.id}')">
                            ${this.currentBook.progress > 0 ? 'Continue Learning' : 'Start Learning'}
                        </button>
                        <button class="favorite-btn ${window.activeRecall?.isFavorite(this.currentBook.id) ? 'favorited' : ''}"
                                onclick="app.toggleFavorite('${this.currentBook.id}')">
                            ${window.activeRecall?.isFavorite(this.currentBook.id) ? '⭐ Favorited' : '☆ Add to Favorites'}
                        </button>
                    </div>
                </div>
            </div>

            ${this.currentBook.lessonList ? `
                <div class="lessons-list">
                    <h2>Lessons</h2>
                    ${this.currentBook.lessonList.map((lesson, index) => {
                        const bookId = this.currentBook.id;
                        const unlocked = window.examCenter ? window.examCenter.isLessonUnlocked(bookId, lesson.id) : true;
                        const passed = window.examCenter ? window.examCenter.isLessonPassed(bookId, lesson.id) : false;
                        let statusHtml = '';
                        if (passed) statusHtml = '<span class="lesson-status">✓ Passed</span>';
                        else if (lesson.completed) statusHtml = '<span class="lesson-status" style="color:#3bafbf">Read</span>';
                        else if (!unlocked) statusHtml = '<span class="lesson-status" style="color:#888">🔒 Locked</span>';
                        const click = unlocked
                            ? `app.startLesson('${bookId}', '${lesson.id}')`
                            : `window.examCenter && window.examCenter.toast('Locked — pass the previous lesson\\'s quiz (80%) to unlock this.')`;
                        return `
                        <div class="lesson-item" style="${unlocked ? '' : 'opacity:0.55;'}" onclick="${click}">
                            <div style="display: flex; align-items: center; flex: 1;">
                                <div class="lesson-number">${unlocked ? (index + 1) : '🔒'}</div>
                                <div class="lesson-item-info">
                                    <div class="lesson-item-title">${lesson.title}</div>
                                    <div class="lesson-item-duration">${lesson.duration || 11} min</div>
                                </div>
                            </div>
                            ${statusHtml}
                        </div>`;
                    }).join('')}
                </div>
            ` : ''}
        `;

        document.getElementById('book-detail').innerHTML = detailHtml;
        this.switchView('book');
    }

    startBook(bookId) {
        const book = getBookById(bookId);
        if (!book || !book.lessonList || book.lessonList.length === 0) return;

        // Find first incomplete lesson or start from lesson 1
        const firstIncompleteLesson = book.lessonList.find(l => !l.completed) || book.lessonList[0];
        this.startLesson(bookId, firstIncompleteLesson.id);
    }

    startLesson(bookId, lessonId) {
        const book = getBookById(bookId);
        if (!book || !book.lessonList) return;

        // Strict gating: block locked curriculum lessons
        if (window.examCenter && !window.examCenter.isLessonUnlocked(bookId, lessonId)) {
            window.examCenter.toast('Locked — pass the previous lesson\'s quiz (80%) to unlock this.');
            return;
        }

        this.currentBook = book;
        this.currentLesson = book.lessonList.find(l => String(l.id) === String(lessonId));
        if (!this.currentLesson) return;

        // If lesson doesn't have cards, create placeholder content
        if (!this.currentLesson.cards || this.currentLesson.cards.length === 0) {
            this.currentLesson.cards = [
                {
                    type: "intro",
                    title: this.currentLesson.title,
                    content: "This lesson is being developed! Check back soon for full content, or try Lesson 1 which is complete with interactive cards, examples, and quizzes."
                },
                {
                    type: "concept",
                    title: "Coming Soon",
                    content: `The full content for "${this.currentLesson.title}" is currently being created. \n\nIn the meantime:\n• Go back and complete other available lessons\n• Explore different books in the library\n• Try the fully-developed lessons in Atomic Habits\n• Use the Vision Board and Journal features\n\nNew lessons are added regularly!`
                }
            ];
        }

        this.currentCard = 0;
        this.renderLesson();
        this.switchView('lesson');
    }

    renderLesson() {
        if (!this.currentLesson || !this.currentLesson.cards) return;

        const totalCards = this.currentLesson.cards.length;
        const progress = ((this.currentCard + 1) / totalCards) * 100;

        // Update progress bar
        document.getElementById('lesson-progress-fill').style.width = `${progress}%`;
        // Format: "HITT 1305 • Lesson 11 • Card 3 of 6"
        const lessonId = String(this.currentLesson.id); // e.g. "hitt1305-11"
        const parts = lessonId.split('-');
        const bookCode = parts[0].replace(/([a-z]+)(\d+)/i, (_, letters, nums) =>
            letters.toUpperCase() + ' ' + nums).trim(); // "HITT 1305"
        const lessonNum = parts[1] || '';
        document.getElementById('lesson-progress-text').textContent =
            `${bookCode} • Lesson ${lessonNum} • Card ${this.currentCard + 1} of ${totalCards}`;

        // Render current card
        const card = this.currentLesson.cards[this.currentCard];
        const contentHtml = this.renderCard(card);

        document.getElementById('lesson-content').innerHTML = contentHtml;

        // Update navigation buttons
        const prevBtn = document.getElementById('prev-card-btn');
        const nextBtn = document.getElementById('next-card-btn');

        console.log('Updating buttons - prevBtn exists:', !!prevBtn, 'nextBtn exists:', !!nextBtn);

        // Make sure buttons are visible
        if (prevBtn) {
            prevBtn.style.display = 'block';
            prevBtn.disabled = this.currentCard === 0;
            prevBtn.style.opacity = this.currentCard === 0 ? '0.5' : '1';
        }

        if (nextBtn) {
            console.log('Setting Next button visible');
            nextBtn.style.display = 'block';
            nextBtn.style.visibility = 'visible';
            nextBtn.disabled = false;
            nextBtn.style.opacity = '1';
            
            if (this.currentCard === totalCards - 1) {
                nextBtn.textContent = 'Complete Lesson';
            } else {
                nextBtn.textContent = 'Next';
            }
            console.log('Next button text:', nextBtn.textContent);
        } else {
            console.error('ERROR: Next button not found!');
        }

        // Scroll to top
        window.scrollTo(0, 0);
    }

    getVisualHtml(visual) {
        if (!visual) return '';
        const svg = typeof visual === 'string' ? visual : visual.svg;
        const caption = typeof visual === 'object' ? visual.caption : '';
        if (!svg) return '';
        return `<div class="visual-diagram" style="margin-top:1.5rem;">${svg}</div>${caption ? `<p class="visual-caption">${caption}</p>` : ''}`;
    }

    renderCard(card) {
        const badgeColors = {
            intro: '#6366f1',
            concept: '#8b5cf6',
            visual: '#3b82f6',
            example: '#10b981',
            quote: '#ec4899',
            application: '#f59e0b',
            quiz: '#ef4444'
        };

        const badgeColor = badgeColors[card.type] || '#6366f1';

        let html = `<div class="lesson-card active">`;

        // Type badge
        html += `<span class="card-type-badge" style="background: ${badgeColor}">${card.type}</span>`;

        // Title
        if (card.title) {
            html += `<h2>${card.title}</h2>`;
        }

        // Main content based on type
        if (card.type === 'quote') {
            html += `
                <div class="quote-card">
                    "${card.content}"
                    ${card.author ? `<div style="margin-top: 1rem; text-align: right; font-style: normal; font-size: 1rem;">— ${card.author}</div>` : ''}
                </div>
            `;
        } else if (card.type === 'example') {
            html += `
                <div class="example-card">
                    <div class="example-label">Example</div>
                    ${this.formatContent(card.content)}
                    ${this.getVisualHtml(card.visual)}
                </div>
            `;
        } else if (card.type === 'visual') {
            html += `
                <div class="visual-card">
                    ${this.getVisualHtml(card.visual)}
                    ${card.content ? this.formatContent(card.content) : ''}
                </div>
            `;
        } else if (card.type === 'quiz' && card.options) {
            html += this.renderQuiz(card);
        } else if (card.type === 'quiz' && card.content) {
            html += this.renderContentQuiz(card);
        } else {
            html += this.formatContent(card.content);
            html += this.getVisualHtml(card.visual);
        }

        html += `</div>`;
        return html;
    }

    renderQuiz(card) {
        return `
            <div class="quiz-card">
                <div class="quiz-question">${card.question}</div>
                <div class="quiz-options">
                    ${card.options.map((option, index) => `
                        <div class="quiz-option" onclick="app.selectQuizOption(${index}, ${option.correct})" id="quiz-option-${index}">
                            ${option.text}
                        </div>
                    `).join('')}
                </div>
                <div id="quiz-explanation" style="display: none; margin-top: 1.5rem; padding: 1.5rem; background: var(--color-bg-secondary); border-radius: var(--radius-lg);">
                    <strong style="color: var(--color-success);">✓ Correct!</strong>
                    <p style="margin-top: 0.5rem; color: var(--color-text-secondary);">${card.explanation || ''}</p>
                </div>
            </div>
        `;
    }

    renderContentQuiz(card) {
        const content = (card.content || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');

        // Find correct answer letter anywhere in content
        const answerMatch = content.match(/answer:\s*\*{0,2}([A-D])\*{0,2}/i);
        const correctLetter = answerMatch ? answerMatch[1].toUpperCase() : null;

        // Find all option lines (A. / A) / **A)** formats)
        const optionRegex = /^[ \t]*\*{0,2}([A-D])[.)]\*{0,2}[ \t]+(.+)/gm;
        const parsedOptions = [];
        let m;
        while ((m = optionRegex.exec(content)) !== null) {
            parsedOptions.push({ letter: m[1].toUpperCase(), text: m[2].trim() });
        }
        if (parsedOptions.length === 0) return this.formatContent(content);

        // Question = everything before the first option line
        const firstOptPos = content.search(/^[ \t]*\*{0,2}[A-D][.)]/m);
        const questionRaw = content.substring(0, firstOptPos)
            .replace(/^#+\s+(Quiz\b.*|Question\s*\d*)\s*$/gim, '')
            .trim();

        // Explanation = everything after last option, minus the answer header
        const allMatches = [...content.matchAll(/^[ \t]*\*{0,2}[A-D][.)]\*{0,2}[ \t]+.+$/gm)];
        const lastM = allMatches[allMatches.length - 1];
        const afterOptions = lastM ? content.substring(lastM.index + lastM[0].length) : '';
        const explanationText = afterOptions
            .replace(/-{3,}/g, '')
            .replace(/\*\*Answer:[^*\n]*\*\*/gi, '')
            .replace(/^#+\s+Answer[^\n]*/gim, '')
            .replace(/^\*\*Explanation:\*\*\s*/im, '')
            .trim();

        this._cqId = (this._cqId || 0) + 1;
        const expId = `cq-explanation-${this._cqId}`;

        const optionsHtml = parsedOptions.map(({ letter, text }) => {
            const isCorrect = letter === correctLetter;
            return `<div class="quiz-option" data-correct="${isCorrect}" data-letter="${letter}" onclick="app.selectContentQuizOption(this, '${expId}')">
                <span style="font-weight:700;color:#3bafbf;margin-right:0.5rem">${letter})</span>${text}
            </div>`;
        }).join('');

        const visualHtml = this.getVisualHtml(card.visual);

        return `
            <div class="quiz-card">
                <div class="quiz-question">${this.formatContent(questionRaw)}</div>
                <div class="quiz-options">${optionsHtml}</div>
                <div id="${expId}" style="display:none;margin-top:1.5rem;padding:1.5rem;background:var(--color-bg-secondary);border-radius:var(--radius-lg)">
                    <strong class="exp-result" style="color:var(--color-success)">✓ Correct!</strong>
                    <div style="margin-top:0.75rem;color:var(--color-text-secondary)">${this.formatContent(explanationText)}</div>
                </div>
                ${visualHtml}
            </div>`;
    }

    selectContentQuizOption(el, explanationId) {
        const isCorrect = el.dataset.correct === 'true';
        el.closest('.quiz-options').querySelectorAll('.quiz-option').forEach(opt => {
            opt.style.pointerEvents = 'none';
            if (opt.dataset.correct === 'true') opt.classList.add('correct');
        });
        if (!isCorrect) el.classList.add('incorrect');

        const exp = document.getElementById(explanationId);
        if (exp) {
            exp.style.display = 'block';
            const label = exp.querySelector('.exp-result');
            if (!isCorrect && label) {
                label.textContent = '✗ Incorrect — see explanation below';
                label.style.color = 'var(--color-error, #ef4444)';
            }
        }
    }

    selectQuizOption(index, isCorrect) {
        // Disable all options
        document.querySelectorAll('.quiz-option').forEach(opt => {
            opt.style.pointerEvents = 'none';
        });

        const selectedOption = document.getElementById(`quiz-option-${index}`);

        if (isCorrect) {
            selectedOption.classList.add('correct');
            document.getElementById('quiz-explanation').style.display = 'block';

            // Record perfect quiz result via gamification
            if (window.gamification && this.currentBook && this.currentLesson) {
                window.gamification.recordQuizResult(
                    this.currentBook.id,
                    this.currentLesson.id,
                    1, // got it right
                    1  // out of 1
                );
            }
        } else {
            selectedOption.classList.add('incorrect');
            // Show correct answer
            document.querySelectorAll('.quiz-option').forEach((opt, i) => {
                const card = this.currentLesson.cards[this.currentCard];
                if (card.options[i].correct) {
                    opt.classList.add('correct');
                }
            });

            // Record failed quiz result
            if (window.gamification && this.currentBook && this.currentLesson) {
                window.gamification.recordQuizResult(
                    this.currentBook.id,
                    this.currentLesson.id,
                    0, // got it wrong
                    1  // out of 1
                );
            }
        }
    }

    formatContent(content) {
        if (!content) return '';
        content = content.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

        const inlineFormat = (text) => text
            .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/`([^`]+)`/g, '<code style="background:#1c2833;padding:2px 6px;border-radius:4px;font-family:monospace;font-size:0.9em">$1</code>');

        const lines = content.split('\n');
        let html = '';
        let i = 0;

        while (i < lines.length) {
            const line = lines[i];
            const trimmed = line.trim();

            // Headings
            if (/^#{1,6}\s/.test(trimmed)) {
                const level = trimmed.match(/^(#+)/)[1].length;
                const text = inlineFormat(trimmed.replace(/^#+\s+/, ''));
                const sizes = ['2em','1.5em','1.2em','1.1em','1em','1em'];
                const margins = ['1.2rem 0 0.5rem','1rem 0 0.4rem','0.8rem 0 0.3rem','0.6rem 0 0.2rem','0.5rem 0 0.2rem','0.5rem 0 0.2rem'];
                html += `<h${level} style="font-size:${sizes[level-1]};margin:${margins[level-1]};color:#e8e8e8;font-weight:700">${text}</h${level}>`;
                i++; continue;
            }

            // Horizontal rule
            if (/^---+$/.test(trimmed) || /^\*\*\*+$/.test(trimmed)) {
                html += `<hr style="border:none;border-top:1px solid #2a3545;margin:1rem 0">`;
                i++; continue;
            }

            // Blockquote
            if (trimmed.startsWith('>')) {
                let bqLines = [];
                while (i < lines.length && lines[i].trim().startsWith('>')) {
                    bqLines.push(inlineFormat(lines[i].trim().replace(/^>\s?/, '')));
                    i++;
                }
                html += `<blockquote style="border-left:4px solid #3bafbf;padding:0.5rem 1rem;margin:0.8rem 0;background:#1c2833;border-radius:0 8px 8px 0;color:#a8b2c1;font-style:italic">${bqLines.join('<br>')}</blockquote>`;
                continue;
            }

            // Table
            if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
                let tableLines = [];
                while (i < lines.length && lines[i].trim().startsWith('|')) {
                    tableLines.push(lines[i].trim());
                    i++;
                }
                const isSeparator = (row) => /^\|[\s\-:|]+\|$/.test(row);
                let tableHtml = `<div style="overflow-x:auto;margin:0.8rem 0"><table style="border-collapse:collapse;width:100%;font-size:0.9em">`;
                let inBody = false;
                for (const row of tableLines) {
                    if (isSeparator(row)) { inBody = true; continue; }
                    const cells = row.split('|').slice(1, -1).map(c => c.trim());
                    const tag = !inBody ? 'th' : 'td';
                    const style = !inBody
                        ? 'background:#1c2833;color:#3bafbf;padding:8px 12px;text-align:left;font-weight:700;border:1px solid #2a3545'
                        : 'padding:7px 12px;border:1px solid #2a3545;color:#e8e8e8;vertical-align:top';
                    tableHtml += `<tr>${cells.map(c => `<${tag} style="${style}">${inlineFormat(c)}</${tag}>`).join('')}</tr>`;
                }
                tableHtml += `</table></div>`;
                html += tableHtml;
                continue;
            }

            // Unordered list
            if (/^[-•*]\s/.test(trimmed)) {
                let listHtml = `<ul style="margin:0.5rem 0 0.5rem 1.2rem;padding:0">`;
                while (i < lines.length && /^[-•*]\s/.test(lines[i].trim())) {
                    listHtml += `<li style="margin:0.25rem 0;color:#e8e8e8">${inlineFormat(lines[i].trim().replace(/^[-•*]\s+/, ''))}</li>`;
                    i++;
                }
                listHtml += `</ul>`;
                html += listHtml;
                continue;
            }

            // Ordered list
            if (/^\d+\.\s/.test(trimmed)) {
                let listHtml = `<ol style="margin:0.5rem 0 0.5rem 1.2rem;padding:0">`;
                while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
                    listHtml += `<li style="margin:0.25rem 0;color:#e8e8e8">${inlineFormat(lines[i].trim().replace(/^\d+\.\s+/, ''))}</li>`;
                    i++;
                }
                listHtml += `</ol>`;
                html += listHtml;
                continue;
            }

            // Empty line
            if (trimmed === '') {
                i++; continue;
            }

            // Plain paragraph
            html += `<p style="margin:0.4rem 0;color:#e8e8e8;line-height:1.6">${inlineFormat(trimmed)}</p>`;
            i++;
        }

        return html;
    }

    previousCard() {
        if (this.currentCard > 0) {
            this.currentCard--;
            this.renderLesson();
            this.saveCurrentView();
        }
    }

    nextCard() {
        const totalCards = this.currentLesson.cards.length;

        if (this.currentCard < totalCards - 1) {
            this.currentCard++;
            this.renderLesson();
            this.saveCurrentView();
        } else {
            // Complete lesson
            this.completeLesson();
        }
    }

    completeLesson() {
        // Mark lesson as completed
        this.currentLesson.completed = true;

        // Update book progress
        const completedLessons = this.currentBook.lessonList.filter(l => l.completed).length;
        this.currentBook.progress = Math.round((completedLessons / this.currentBook.lessonList.length) * 100);

        // Update user stats
        APP_DATA.user.totalLearningTime += this.currentLesson.duration;

        // Check if book is completed
        const bookJustCompleted = this.currentBook.progress === 100 && completedLessons === this.currentBook.lessonList.length;
        if (bookJustCompleted) {
            APP_DATA.user.booksCompleted++;
        }

        // Save progress
        saveProgress();

        // Award XP and update challenges via gamification system
        if (window.gamification) {
            // Record study session (updates challenges and stats)
            window.gamification.recordStudySession(
                this.currentLesson.duration,
                this.currentBook.category,
                1 // 1 lesson completed
            );

            // Award lesson completion XP
            window.gamification.awardXP(
                APP_DATA.user.xpRewards.lessonComplete,
                `Completed: ${this.currentLesson.title}`
            );

            // Bonus XP for completing a book
            if (bookJustCompleted) {
                window.gamification.awardXP(
                    APP_DATA.user.xpRewards.bookComplete,
                    `Book Complete: ${this.currentBook.title}! 📚`
                );
            }

            // Generate flashcards from this lesson
            window.gamification.addFlashcardsFromLesson(this.currentBook.id, this.currentLesson);

            // Check all badges
            window.gamification.checkBadges();

            // Update header display
            this.updateHeaderXP();
        }

        // Show completion message with styled modal
        const xpEarned = APP_DATA.user.xpRewards.lessonComplete + (bookJustCompleted ? APP_DATA.user.xpRewards.bookComplete : 0);
        this.showLessonCompleteModal(this.currentLesson.title, xpEarned, this.currentBook.progress, bookJustCompleted, this.currentBook.id, this.currentLesson.id);
    }

    showLessonCompleteModal(lessonTitle, xpEarned, bookProgress, bookCompleted, bookId, lessonId) {
        // Does this lesson have a gating quiz? (curriculum lessons)
        const hasQuiz = !!(window.examCenter && window.examCenter.lessonHasContent(
            (getBookById(bookId)?.lessonList || []).find(l => String(l.id) === String(lessonId)) || {}
        ));
        const alreadyPassed = !!(window.examCenter && window.examCenter.isLessonPassed(bookId, lessonId));
        // Create modal HTML
        const modal = document.createElement('div');
        modal.className = 'lesson-complete-modal';
        modal.innerHTML = `
            <div class="lesson-complete-content">
                <div class="lesson-complete-icon">🎉</div>
                <h2 class="lesson-complete-title">Lesson Complete!</h2>
                <p class="lesson-complete-subtitle">You've finished "${lessonTitle}"</p>

                <div class="lesson-complete-xp-container">
                    <div class="lesson-complete-xp">+${xpEarned} XP</div>
                    <div class="lesson-complete-xp-label">Experience Earned</div>
                </div>

                <div class="lesson-complete-progress">
                    <div class="lesson-complete-progress-label">Book Progress</div>
                    <div class="lesson-complete-progress-bar">
                        <div class="lesson-complete-progress-fill" style="width: ${bookProgress}%"></div>
                    </div>
                    <div class="lesson-complete-progress-text">${bookProgress}% Complete</div>
                </div>

                ${bookCompleted ? '<div class="lesson-complete-bonus">📚 Book Completed! Bonus XP Earned!</div>' : ''}

                ${hasQuiz && !alreadyPassed ? '<div class="lesson-complete-bonus" style="background:rgba(99,102,241,0.18);color:#c7d2fe;">📝 Pass the lesson quiz (80%) to unlock the next lesson.</div>' : ''}

                ${hasQuiz && !alreadyPassed ? '<button class="lesson-complete-btn lesson-complete-quiz-btn" style="background:#6366f1;margin-bottom:0.6rem;">Take Quiz to Unlock Next →</button>' : ''}
                <button class="lesson-complete-btn">Continue</button>
            </div>
        `;

        document.body.appendChild(modal);

        // Trigger animation with slight delay to ensure transition
        setTimeout(() => {
            modal.classList.add('active');
        }, 50);

        // Handle continue button click
        const continueBtn = modal.querySelector('.lesson-complete-btn:not(.lesson-complete-quiz-btn)');
        const self = this;
        continueBtn.addEventListener('click', function() {
            modal.classList.remove('active');
            setTimeout(() => {
                modal.remove();
                // Return to book view showing all lessons
                self.showBook(bookId);
            }, 300);
        });

        // Handle "Take Quiz" button — launch the gating lesson quiz
        const quizBtn = modal.querySelector('.lesson-complete-quiz-btn');
        if (quizBtn) {
            quizBtn.addEventListener('click', function() {
                modal.classList.remove('active');
                setTimeout(() => {
                    modal.remove();
                    self.switchView('exam');
                    window.examCenter.startLessonQuiz(bookId, lessonId);
                }, 300);
            });
        }
    }

    startDailyLesson() {
        // Use the lesson selected by updateDailyInsight
        if (this.todayInsightLesson) {
            this.startLesson(this.todayInsightLesson.bookId, this.todayInsightLesson.lessonId);
        } else {
            // Fallback: find any lesson with content
            for (const category of APP_DATA.categories) {
                for (const book of category.books) {
                    if (book.lessonList) {
                        const lessonWithContent = book.lessonList.find(l => l.cards && l.cards.length > 0);
                        if (lessonWithContent) {
                            this.startLesson(book.id, lessonWithContent.id);
                            return;
                        }
                    }
                }
            }
            alert('No lessons available yet. Check back soon!');
        }
    }

    renderProfile() {
        // Render gamification stats overview
        if (window.gamification) {
            window.gamification.renderStatsOverview();
            window.gamification.renderHeatMap();
            window.gamification.renderBadges();
        } else {
            // Fallback if gamification not loaded
            const html = `
                <div class="profile-stats-grid">
                    <div class="profile-stat-card">
                        <span class="profile-stat-value">${APP_DATA.user.booksCompleted}</span>
                        <span class="profile-stat-label">Books Completed</span>
                    </div>
                    <div class="profile-stat-card">
                        <span class="profile-stat-value">${APP_DATA.user.streak}</span>
                        <span class="profile-stat-label">Day Streak</span>
                    </div>
                    <div class="profile-stat-card">
                        <span class="profile-stat-value">${Math.round(APP_DATA.user.totalLearningTime / 60)}</span>
                        <span class="profile-stat-label">Hours Learned</span>
                    </div>
                    <div class="profile-stat-card">
                        <span class="profile-stat-value">${getBooksInProgress().length}</span>
                        <span class="profile-stat-label">In Progress</span>
                    </div>
                </div>

                <div class="achievements-section">
                    <h2>Achievements</h2>
                    <div class="achievements-grid">
                        ${APP_DATA.user.achievements.map(achievement => `
                            <div class="achievement-badge ${!achievement.unlocked ? 'locked' : ''}">
                                <span class="achievement-icon">${achievement.icon}</span>
                                <div class="achievement-name">${achievement.name}</div>
                                <div class="achievement-description">${achievement.description}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div style="margin-top: 3rem; padding: 2rem; background: var(--color-bg-secondary); border-radius: var(--radius-xl);">
                    <h3 style="margin-bottom: 1rem;">Learning Goal</h3>
                    <p style="color: var(--color-text-secondary); margin-bottom: 1.5rem;">${APP_DATA.user.currentGoal}</p>
                    <button class="btn-primary" style="width: 100%;">Update Goal</button>
                </div>
            `;

            document.getElementById('profile-content').innerHTML = html;
        }
    }

    showSearch() {
        // Build the search overlay once, then reuse it
        let overlay = document.getElementById('search-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'search-overlay';
            overlay.innerHTML = `
                <style>
                    #search-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:9999; display:flex; align-items:flex-start; justify-content:center; padding-top:8vh; }
                    #search-overlay .search-modal { background:var(--color-bg, #fff); width:min(640px, 92vw); max-height:80vh; border-radius:16px; overflow:hidden; display:flex; flex-direction:column; box-shadow:0 24px 60px rgba(0,0,0,0.4); }
                    #search-overlay .search-input-row { display:flex; align-items:center; gap:12px; padding:18px 22px; border-bottom:1px solid rgba(0,0,0,0.08); }
                    #search-overlay .search-input-row svg { flex-shrink:0; opacity:0.5; }
                    #search-overlay input { flex:1; border:none; outline:none; font-size:1.05rem; background:transparent; color:var(--color-text, #111); }
                    #search-overlay .search-close { background:none; border:none; font-size:1.4rem; cursor:pointer; color:var(--color-text-secondary, #666); padding:4px 8px; }
                    #search-overlay .search-results { overflow-y:auto; padding:8px 0; flex:1; }
                    #search-overlay .search-result-item { padding:12px 22px; cursor:pointer; transition:background 0.15s; }
                    #search-overlay .search-result-item:hover { background:rgba(0,0,0,0.04); }
                    #search-overlay .search-result-title { font-weight:600; color:var(--color-text, #111); margin:0 0 2px; font-size:0.95rem; }
                    #search-overlay .search-result-meta { color:var(--color-text-secondary, #666); font-size:0.82rem; }
                    #search-overlay .search-empty { text-align:center; padding:32px 22px; color:var(--color-text-secondary, #666); font-size:0.9rem; }
                </style>
                <div class="search-modal" onclick="event.stopPropagation()">
                    <div class="search-input-row">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>
                        <input id="search-input" type="text" placeholder="Search books and authors..." autocomplete="off">
                        <button class="search-close" onclick="app.closeSearch()" aria-label="Close">&times;</button>
                    </div>
                    <div class="search-results" id="search-results">
                        <div class="search-empty">Start typing to search ${getAllBooks().length} books</div>
                    </div>
                </div>
            `;
            overlay.addEventListener('click', () => this.closeSearch());
            document.body.appendChild(overlay);
            const input = overlay.querySelector('#search-input');
            input.addEventListener('input', (e) => this.renderSearchResults(e.target.value));
            input.addEventListener('keydown', (e) => { if (e.key === 'Escape') this.closeSearch(); });
        }
        overlay.style.display = 'flex';
        setTimeout(() => document.getElementById('search-input').focus(), 50);
    }

    closeSearch() {
        const overlay = document.getElementById('search-overlay');
        if (overlay) {
            overlay.style.display = 'none';
            const input = document.getElementById('search-input');
            if (input) input.value = '';
        }
    }

    renderSearchResults(query) {
        const results = document.getElementById('search-results');
        const q = (query || '').trim().toLowerCase();
        if (!q) {
            results.innerHTML = `<div class="search-empty">Start typing to search ${getAllBooks().length} books</div>`;
            return;
        }
        const matches = getAllBooks().filter(b => {
            const title = (b.title || '').toLowerCase();
            const author = (b.author || '').toLowerCase();
            return title.includes(q) || author.includes(q);
        }).slice(0, 25);
        if (matches.length === 0) {
            results.innerHTML = `<div class="search-empty">No books match "${query.replace(/[<>"']/g,'')}"</div>`;
            return;
        }
        results.innerHTML = matches.map(b => `
            <div class="search-result-item" onclick="app.closeSearch(); app.showBook('${b.id}')">
                <div class="search-result-title">${(b.title || '').replace(/</g,'&lt;')}</div>
                <div class="search-result-meta">${(b.author || '').replace(/</g,'&lt;')} &middot; ${b.lessons || 0} lessons</div>
            </div>
        `).join('');
    }

    // ============================================
    // FULL APP RESET
    // ============================================
    confirmReset() {
        const confirmed = confirm(
            '⚠️ FULL APP RESET\n\n' +
            'This will permanently delete ALL your progress:\n\n' +
            '• XP and Level (back to Level 1)\n' +
            '• Day Streak (back to 0)\n' +
            '• All completed lessons\n' +
            '• All badges and achievements\n' +
            '• Flashcard progress\n' +
            '• Workout history\n' +
            '• Vision board and journal entries\n\n' +
            'Are you sure you want to start fresh?'
        );

        if (confirmed) {
            const doubleConfirm = confirm(
                '🔴 FINAL CONFIRMATION\n\n' +
                'This action CANNOT be undone!\n\n' +
                'Click OK to reset everything to Day 0.'
            );

            if (doubleConfirm) {
                this.performReset();
            }
        }
    }

    performReset() {
        // Call the reset function from data.js
        if (typeof resetAllProgress === 'function') {
            resetAllProgress();

            // Update UI elements
            this.updateStreak();
            this.updateHeaderXP();

            // Refresh gamification if loaded
            if (window.gamification) {
                window.gamification.refreshDailyChallenges();
            }

            // Show success message
            alert(
                '✅ RESET COMPLETE!\n\n' +
                'Your app has been reset to Day 0.\n\n' +
                '• All progress cleared\n' +
                '• All lessons unmarked\n' +
                '• Starting fresh!\n\n' +
                'The page will now reload.'
            );

            // Reload the page to ensure clean state
            window.location.reload();
        } else {
            alert('Error: Reset function not found. Please refresh the page and try again.');
        }
    }

    getCategoryColor(categoryId) {
        const category = APP_DATA.categories.find(c => c.id === categoryId);
        return category ? category.color : '#6366f1';
    }

    getCategoryColorDark(categoryId) {
        const colorMap = {
            'psychology': '#7c3aed',
            'productivity': '#2563eb',
            'philosophy': '#db2777',
            'personal-development': '#059669',
            'health': '#0f766e',
            'history': '#d97706',
            'business': '#4f46e5',
            'leadership': '#dc2626',
            'science': '#0891b2'
        };
        return colorMap[categoryId] || '#4f46e5';
    }

    getBookInitials(title) {
        return title
            .split(' ')
            .filter(word => word.length > 2)
            .slice(0, 2)
            .map(word => word[0])
            .join('');
    }
}

// Initialize app when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new SynthesisApp();
});
