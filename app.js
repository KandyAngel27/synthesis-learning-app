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
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });

        const targetView = document.getElementById(`${viewName}-view`);
        if (targetView) {
            targetView.classList.add('active');
            this.currentView = viewName;
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

    showCategory(categoryId) {
        this.currentCategory = getCategoryById(categoryId);
        if (!this.currentCategory) return;

        document.getElementById('category-title').textContent = this.currentCategory.name;
        
        const container = document.getElementById('category-books');
        container.innerHTML = this.currentCategory.books.map(book => `
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

    showBook(bookId) {
        this.currentBook = getBookById(bookId);
        if (!this.currentBook) return;

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
                    ${this.currentBook.lessonList.map((lesson, index) => `
                        <div class="lesson-item" onclick="app.startLesson('${this.currentBook.id}', ${lesson.id})">
                            <div style="display: flex; align-items: center; flex: 1;">
                                <div class="lesson-number">${index + 1}</div>
                                <div class="lesson-item-info">
                                    <div class="lesson-item-title">${lesson.title}</div>
                                    <div class="lesson-item-duration">${lesson.duration} min</div>
                                </div>
                            </div>
                            ${lesson.completed ? '<span class="lesson-status">✓ Complete</span>' : ''}
                        </div>
                    `).join('')}
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

        this.currentBook = book;
        this.currentLesson = book.lessonList.find(l => l.id === lessonId);
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
        document.getElementById('lesson-progress-text').textContent = 
            `Lesson ${this.currentLesson.id} • Card ${this.currentCard + 1} of ${totalCards}`;

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
                    <p>${this.formatContent(card.content)}</p>
                    ${card.visual && card.visual.svg ? `
                        <div class="visual-diagram" style="margin-top: 1.5rem;">
                            ${card.visual.svg}
                        </div>
                        ${card.visual.caption ? `<p class="visual-caption">${card.visual.caption}</p>` : ''}
                    ` : ''}
                </div>
            `;
        } else if (card.type === 'visual') {
            html += `
                <div class="visual-card">
                    ${card.visual && card.visual.svg ? `
                        <div class="visual-diagram">
                            ${card.visual.svg}
                        </div>
                        ${card.visual.caption ? `<p class="visual-caption">${card.visual.caption}</p>` : ''}
                    ` : ''}
                    ${card.content ? `<p>${this.formatContent(card.content)}</p>` : ''}
                </div>
            `;
        } else if (card.type === 'quiz') {
            html += this.renderQuiz(card);
        } else {
            // Default case handles intro, concept, and other text-based cards
            html += `<p>${this.formatContent(card.content)}</p>`;
            // Render visual if present (for intro, concept cards with visuals)
            if (card.visual && card.visual.svg) {
                html += `
                    <div class="visual-diagram" style="margin-top: 1.5rem;">
                        ${card.visual.svg}
                    </div>
                    ${card.visual.caption ? `<p class="visual-caption">${card.visual.caption}</p>` : ''}
                `;
            }
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
        // Convert newlines to paragraphs and format lists
        return content
            .split('\n\n')
            .map(para => {
                if (para.trim().startsWith('•') || para.trim().startsWith('-')) {
                    const items = para.split('\n').map(item => 
                        `<li>${item.replace(/^[•-]\s*/, '')}</li>`
                    ).join('');
                    return `<ul>${items}</ul>`;
                }
                return `<p>${para}</p>`;
            })
            .join('');
    }

    previousCard() {
        if (this.currentCard > 0) {
            this.currentCard--;
            this.renderLesson();
        }
    }

    nextCard() {
        const totalCards = this.currentLesson.cards.length;
        
        if (this.currentCard < totalCards - 1) {
            this.currentCard++;
            this.renderLesson();
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

        // Show completion message
        const xpEarned = APP_DATA.user.xpRewards.lessonComplete + (bookJustCompleted ? APP_DATA.user.xpRewards.bookComplete : 0);
        alert(`🎉 Lesson completed! You've finished "${this.currentLesson.title}"\n\n+${xpEarned} XP earned!\nBook Progress: ${this.currentBook.progress}%`);

        // Return to book view
        this.showBook(this.currentBook.id);
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
        alert('Search functionality coming soon! 🔍');
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
