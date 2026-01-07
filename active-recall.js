// ============================================
// ACTIVE RECALL SYSTEM
// Flashcards, Quick Quiz, Feynman Technique
// ============================================

class ActiveRecallSystem {
    constructor(app) {
        this.app = app;
        this.currentFlashcard = null;
        this.flashcardQueue = [];
        this.quizQuestions = [];
        this.currentQuizIndex = 0;
        this.quizScore = 0;
        this.feynmanConcept = null;
        this.setupEventListeners();
    }

    setupEventListeners() {
        // Back buttons
        const backBtns = ['flashcards', 'quick-quiz', 'feynman'];
        backBtns.forEach(view => {
            const btn = document.getElementById(`${view}-back-btn`);
            if (btn) {
                btn.addEventListener('click', () => this.app.switchView('home'));
            }
        });
    }

    // ============================================
    // FLASHCARD SYSTEM
    // ============================================

    renderFlashcards() {
        const container = document.getElementById('flashcards-content');
        if (!container) return;

        // Ensure flashcards data structure exists
        if (!APP_DATA.user.flashcards) {
            APP_DATA.user.flashcards = { cards: [], settings: { newCardsPerDay: 20, reviewsPerDay: 100 }, stats: {} };
        }
        if (!APP_DATA.user.flashcards.settings) {
            APP_DATA.user.flashcards.settings = { newCardsPerDay: 20, reviewsPerDay: 100 };
        }

        const dueCards = this.getDueFlashcards();
        const allCards = APP_DATA.user.flashcards.cards || [];
        const reviewedCount = APP_DATA.user.learningStats?.flashcardsReviewed || 0;

        const html = `
            <div class="flashcard-stats">
                <div class="fc-stat">
                    <span class="fc-stat-value">${allCards.length}</span>
                    <span class="fc-stat-label">Total Cards</span>
                </div>
                <div class="fc-stat">
                    <span class="fc-stat-value">${dueCards.length}</span>
                    <span class="fc-stat-label">Due Today</span>
                </div>
                <div class="fc-stat">
                    <span class="fc-stat-value">${reviewedCount}</span>
                    <span class="fc-stat-label">Reviewed</span>
                </div>
            </div>

            ${dueCards.length > 0 ? `
                <div class="flashcard-review-section">
                    <h3>Ready to Review</h3>
                    <p class="fc-subtitle">${dueCards.length} cards waiting for you</p>
                    <button class="btn-primary fc-start-btn" onclick="window.activeRecall.startFlashcardReview()">
                        Start Review Session
                    </button>
                </div>
            ` : `
                <div class="flashcard-empty">
                    <div class="empty-icon">🎉</div>
                    <h3>All caught up!</h3>
                    <p>No cards due for review right now. Complete more lessons to generate flashcards.</p>
                </div>
            `}

            <div class="flashcard-decks">
                <h3>Your Card Decks</h3>
                <div class="deck-list" id="deck-list">
                    ${this.renderDeckList()}
                </div>
            </div>

            <div class="flashcard-settings">
                <h3>Settings</h3>
                <div class="setting-row">
                    <label>New cards per day</label>
                    <input type="number" value="${APP_DATA.user.flashcards.settings.newCardsPerDay || 20}"
                           onchange="window.activeRecall.updateSetting('newCardsPerDay', this.value)" class="setting-input">
                </div>
                <div class="setting-row">
                    <label>Reviews per day</label>
                    <input type="number" value="${APP_DATA.user.flashcards.settings.reviewsPerDay || 100}"
                           onchange="window.activeRecall.updateSetting('reviewsPerDay', this.value)" class="setting-input">
                </div>
            </div>
        `;

        container.innerHTML = html;
        this.updateDueBadge();
    }

    renderDeckList() {
        const cards = APP_DATA.user.flashcards?.cards || [];
        const deckMap = {};

        cards.forEach(card => {
            if (!deckMap[card.bookId]) {
                const book = getBookById(card.bookId);
                deckMap[card.bookId] = {
                    name: book ? book.title : 'Unknown',
                    count: 0,
                    due: 0
                };
            }
            deckMap[card.bookId].count++;
            if (new Date(card.nextReview) <= new Date()) {
                deckMap[card.bookId].due++;
            }
        });

        if (Object.keys(deckMap).length === 0) {
            return '<p class="no-decks">No flashcard decks yet. Complete lessons to auto-generate cards!</p>';
        }

        return Object.entries(deckMap).map(([bookId, deck]) => `
            <div class="deck-item" onclick="window.activeRecall.reviewDeck('${bookId}')">
                <div class="deck-info">
                    <div class="deck-name">${deck.name}</div>
                    <div class="deck-count">${deck.count} cards</div>
                </div>
                ${deck.due > 0 ? `<span class="deck-due">${deck.due} due</span>` : '<span class="deck-done">✓</span>'}
            </div>
        `).join('');
    }

    getDueFlashcards() {
        const now = new Date();
        const cards = APP_DATA.user.flashcards?.cards || [];
        return cards.filter(card => {
            return new Date(card.nextReview) <= now;
        });
    }

    updateDueBadge() {
        const badge = document.getElementById('flashcards-due-badge');
        if (badge) {
            const dueCount = this.getDueFlashcards().length;
            badge.textContent = `${dueCount} due`;
            badge.style.display = dueCount > 0 ? 'block' : 'none';
        }
    }

    startFlashcardReview() {
        this.flashcardQueue = [...this.getDueFlashcards()];
        if (this.flashcardQueue.length === 0) return;

        this.showNextFlashcard();
    }

    reviewDeck(bookId) {
        const now = new Date();
        this.flashcardQueue = APP_DATA.user.flashcards.cards.filter(card => {
            return card.bookId === bookId && new Date(card.nextReview) <= now;
        });

        if (this.flashcardQueue.length === 0) {
            alert('No cards due in this deck!');
            return;
        }

        this.showNextFlashcard();
    }

    showNextFlashcard() {
        if (this.flashcardQueue.length === 0) {
            this.showReviewComplete();
            return;
        }

        this.currentFlashcard = this.flashcardQueue.shift();
        const container = document.getElementById('flashcards-content');

        const html = `
            <div class="flashcard-review">
                <div class="fc-header">
                    <button class="btn-back-inline" onclick="window.activeRecall.renderFlashcards()">
                        ← Back to Flashcards
                    </button>
                    <div class="fc-progress">
                        <span>${this.flashcardQueue.length + 1} cards remaining</span>
                    </div>
                </div>

                <div class="flashcard" id="active-flashcard" onclick="window.activeRecall.flipCard()">
                    <div class="flashcard-inner" id="flashcard-inner">
                        <div class="flashcard-front">
                            <div class="fc-label">Question</div>
                            <div class="fc-content">${this.currentFlashcard.front}</div>
                            <div class="fc-hint">Tap to reveal answer</div>
                        </div>
                        <div class="flashcard-back">
                            <div class="fc-label">Answer</div>
                            <div class="fc-content">${this.currentFlashcard.back}</div>
                        </div>
                    </div>
                </div>

                <div class="fc-actions" id="fc-actions" style="display: none;">
                    <p class="fc-rate-label">How well did you know this?</p>
                    <div class="fc-buttons">
                        <button class="fc-btn fc-again" onclick="window.activeRecall.rateCard(0)">
                            <span class="fc-btn-icon">❌</span>
                            <span>Again</span>
                        </button>
                        <button class="fc-btn fc-hard" onclick="window.activeRecall.rateCard(1)">
                            <span class="fc-btn-icon">😓</span>
                            <span>Hard</span>
                        </button>
                        <button class="fc-btn fc-good" onclick="window.activeRecall.rateCard(2)">
                            <span class="fc-btn-icon">👍</span>
                            <span>Good</span>
                        </button>
                        <button class="fc-btn fc-easy" onclick="window.activeRecall.rateCard(3)">
                            <span class="fc-btn-icon">🎯</span>
                            <span>Easy</span>
                        </button>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    flipCard() {
        const cardInner = document.getElementById('flashcard-inner');
        const actions = document.getElementById('fc-actions');

        if (cardInner && !cardInner.classList.contains('flipped')) {
            cardInner.classList.add('flipped');
            if (actions) actions.style.display = 'block';
        }
    }

    rateCard(quality) {
        if (!this.currentFlashcard) return;

        // Use gamification system's SM-2 algorithm
        if (window.gamification) {
            window.gamification.reviewFlashcard(this.currentFlashcard.id, quality);
        }

        // Show next card
        this.showNextFlashcard();
    }

    showReviewComplete() {
        const container = document.getElementById('flashcards-content');
        const reviewed = APP_DATA.user.learningStats.flashcardsReviewed;

        container.innerHTML = `
            <div class="review-complete">
                <div class="complete-icon">🎉</div>
                <h2>Review Complete!</h2>
                <p>You've reviewed all due cards for now.</p>
                <div class="complete-stats">
                    <div class="complete-stat">
                        <span class="complete-value">${reviewed}</span>
                        <span class="complete-label">Total Reviews</span>
                    </div>
                </div>
                <button class="btn-primary" onclick="window.activeRecall.renderFlashcards()">Back to Flashcards</button>
            </div>
        `;
    }

    updateSetting(key, value) {
        APP_DATA.user.flashcards.settings[key] = parseInt(value);
        saveProgress();
    }

    // ============================================
    // QUICK QUIZ MODE
    // ============================================

    renderQuickQuiz() {
        const container = document.getElementById('quick-quiz-content');
        if (!container) return;

        // Gather all quiz questions from completed lessons
        const allQuizzes = this.gatherAllQuizzes();

        const html = `
            <div class="quiz-intro">
                <div class="quiz-intro-icon">⚡</div>
                <h2>Quick Quiz Mode</h2>
                <p>Test your knowledge with random questions from lessons you've completed!</p>

                <div class="quiz-options">
                    <div class="quiz-option-card" onclick="window.activeRecall.startQuiz(5)">
                        <span class="option-number">5</span>
                        <span class="option-label">Quick</span>
                        <span class="option-time">~2 min</span>
                    </div>
                    <div class="quiz-option-card" onclick="window.activeRecall.startQuiz(10)">
                        <span class="option-number">10</span>
                        <span class="option-label">Standard</span>
                        <span class="option-time">~5 min</span>
                    </div>
                    <div class="quiz-option-card" onclick="window.activeRecall.startQuiz(20)">
                        <span class="option-number">20</span>
                        <span class="option-label">Challenge</span>
                        <span class="option-time">~10 min</span>
                    </div>
                </div>

                <div class="quiz-stats">
                    <p><strong>${allQuizzes.length}</strong> questions available from your completed lessons</p>
                </div>
            </div>

            <div class="quiz-history">
                <h3>Recent Results</h3>
                <div class="history-list">
                    ${this.renderQuizHistory()}
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    gatherAllQuizzes() {
        const quizzes = [];

        // First, add sample quizzes (always available for testing)
        if (APP_DATA.user.sampleQuizzes && APP_DATA.user.sampleQuizzes.length > 0) {
            APP_DATA.user.sampleQuizzes.forEach(quiz => {
                quizzes.push({
                    type: 'quiz',
                    question: quiz.question,
                    options: quiz.options,
                    explanation: quiz.explanation,
                    bookTitle: quiz.bookTitle,
                    lessonTitle: quiz.lessonTitle
                });
            });
        }

        // Then add quizzes from completed lessons
        APP_DATA.categories.forEach(category => {
            category.books.forEach(book => {
                if (book.lessonList) {
                    book.lessonList.forEach(lesson => {
                        if (lesson.completed && lesson.cards) {
                            lesson.cards.forEach(card => {
                                if (card.type === 'quiz' && card.question && card.options) {
                                    quizzes.push({
                                        ...card,
                                        bookTitle: book.title,
                                        lessonTitle: lesson.title
                                    });
                                }
                            });
                        }
                    });
                }
            });
        });

        return quizzes;
    }

    renderQuizHistory() {
        const quizHistory = APP_DATA.user.learningStats?.quizHistory || [];
        const history = quizHistory.slice(-5).reverse();

        if (history.length === 0) {
            return '<p class="no-history">No quiz history yet. Start a quiz to track your progress!</p>';
        }

        return history.map(entry => `
            <div class="history-item">
                <div class="history-score ${entry.perfect ? 'perfect' : ''}">${entry.score}/${entry.total}</div>
                <div class="history-info">
                    <div class="history-date">${formatDateMMDDYYYY(entry.date)}</div>
                    <div class="history-perc">${Math.round(entry.percentage)}%</div>
                </div>
            </div>
        `).join('');
    }

    startQuiz(count) {
        const allQuizzes = this.gatherAllQuizzes();

        if (allQuizzes.length === 0) {
            alert('No quiz questions available! Complete some lessons with quizzes first.');
            return;
        }

        // Shuffle and pick questions
        const shuffled = [...allQuizzes].sort(() => Math.random() - 0.5);
        this.quizQuestions = shuffled.slice(0, Math.min(count, shuffled.length));
        this.currentQuizIndex = 0;
        this.quizScore = 0;

        this.showQuizQuestion();
    }

    showQuizQuestion() {
        if (this.currentQuizIndex >= this.quizQuestions.length) {
            this.showQuizResults();
            return;
        }

        const container = document.getElementById('quick-quiz-content');
        const question = this.quizQuestions[this.currentQuizIndex];
        const progress = ((this.currentQuizIndex + 1) / this.quizQuestions.length) * 100;

        const html = `
            <div class="quiz-active">
                <div class="quiz-header">
                    <button class="btn-back-inline" onclick="window.activeRecall.renderQuickQuiz()">
                        ← Back to Quiz Menu
                    </button>
                </div>

                <div class="quiz-progress-bar">
                    <div class="quiz-progress-fill" style="width: ${progress}%"></div>
                </div>
                <div class="quiz-counter">
                    Question ${this.currentQuizIndex + 1} of ${this.quizQuestions.length}
                </div>

                <div class="quiz-source">
                    From: ${question.bookTitle} - ${question.lessonTitle}
                </div>

                <div class="quiz-question-card">
                    <h3 class="quiz-question-text">${question.question}</h3>
                    <div class="quiz-options-list">
                        ${question.options.map((opt, i) => `
                            <button class="quiz-option-btn" id="quiz-opt-${i}"
                                    onclick="window.activeRecall.selectQuizAnswer(${i}, ${opt.correct})">
                                ${opt.text}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="quiz-explanation-box" id="quiz-explanation-box" style="display: none;">
                    <div class="explanation-content" id="explanation-content"></div>
                    <button class="btn-primary" onclick="window.activeRecall.nextQuizQuestion()">
                        ${this.currentQuizIndex < this.quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                    </button>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    selectQuizAnswer(index, isCorrect) {
        // Disable all options
        document.querySelectorAll('.quiz-option-btn').forEach((btn, i) => {
            btn.disabled = true;
            const question = this.quizQuestions[this.currentQuizIndex];
            if (question.options[i].correct) {
                btn.classList.add('correct');
            }
        });

        const selectedBtn = document.getElementById(`quiz-opt-${index}`);
        if (isCorrect) {
            this.quizScore++;
            selectedBtn.classList.add('correct');
        } else {
            selectedBtn.classList.add('incorrect');
        }

        // Show explanation
        const explanationBox = document.getElementById('quiz-explanation-box');
        const explanationContent = document.getElementById('explanation-content');
        const question = this.quizQuestions[this.currentQuizIndex];

        explanationContent.innerHTML = `
            <div class="${isCorrect ? 'correct-msg' : 'incorrect-msg'}">
                ${isCorrect ? '✅ Correct!' : '❌ Incorrect'}
            </div>
            ${question.explanation ? `<p>${question.explanation}</p>` : ''}
        `;
        explanationBox.style.display = 'block';
    }

    nextQuizQuestion() {
        this.currentQuizIndex++;
        this.showQuizQuestion();
    }

    showQuizResults() {
        const container = document.getElementById('quick-quiz-content');
        const total = this.quizQuestions.length;
        const percentage = Math.round((this.quizScore / total) * 100);
        const isPerfect = this.quizScore === total;

        // Record results
        if (window.gamification) {
            window.gamification.recordQuizResult('quick-quiz', 0, this.quizScore, total);
        }

        let grade, gradeClass;
        if (percentage >= 90) { grade = 'A'; gradeClass = 'grade-a'; }
        else if (percentage >= 80) { grade = 'B'; gradeClass = 'grade-b'; }
        else if (percentage >= 70) { grade = 'C'; gradeClass = 'grade-c'; }
        else if (percentage >= 60) { grade = 'D'; gradeClass = 'grade-d'; }
        else { grade = 'F'; gradeClass = 'grade-f'; }

        const html = `
            <div class="quiz-results">
                <div class="results-icon">${isPerfect ? '🏆' : percentage >= 70 ? '🎉' : '📚'}</div>
                <h2>Quiz Complete!</h2>

                <div class="results-grade ${gradeClass}">${grade}</div>

                <div class="results-score">
                    <span class="score-value">${this.quizScore}</span>
                    <span class="score-total">/ ${total}</span>
                </div>

                <div class="results-percentage">${percentage}%</div>

                <div class="results-message">
                    ${isPerfect ? 'Perfect score! You\'re a master!' :
                      percentage >= 80 ? 'Great job! Keep it up!' :
                      percentage >= 60 ? 'Good effort! Review the topics you missed.' :
                      'Keep studying! You\'ll get better with practice.'}
                </div>

                <div class="results-actions">
                    <button class="btn-secondary" onclick="window.activeRecall.renderQuickQuiz()">Back to Quiz Menu</button>
                    <button class="btn-primary" onclick="window.activeRecall.startQuiz(${total})">Try Again</button>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    // ============================================
    // FEYNMAN TECHNIQUE
    // ============================================

    renderFeynman() {
        const container = document.getElementById('feynman-content');
        if (!container) return;

        const concepts = this.getFeynmanConcepts();

        const html = `
            <div class="feynman-intro">
                <div class="feynman-quote">
                    <p>"If you can't explain it simply, you don't understand it well enough."</p>
                    <span class="quote-author">- Richard Feynman</span>
                </div>

                <div class="feynman-steps">
                    <h3>The Feynman Technique</h3>
                    <div class="step-list">
                        <div class="step-item">
                            <span class="step-num">1</span>
                            <span class="step-text">Choose a concept you want to understand</span>
                        </div>
                        <div class="step-item">
                            <span class="step-num">2</span>
                            <span class="step-text">Explain it as if teaching a child</span>
                        </div>
                        <div class="step-item">
                            <span class="step-num">3</span>
                            <span class="step-text">Identify gaps in your explanation</span>
                        </div>
                        <div class="step-item">
                            <span class="step-num">4</span>
                            <span class="step-text">Review and simplify</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="feynman-practice">
                <h3>Practice Now</h3>
                <p>Select a concept from your completed lessons:</p>

                <div class="concept-selector">
                    <select id="feynman-concept-select" onchange="window.activeRecall.selectFeynmanConcept(this.value)">
                        <option value="">-- Choose a concept --</option>
                        ${concepts.map(c => `
                            <option value="${c.id}">${c.title} (${c.book})</option>
                        `).join('')}
                    </select>
                </div>

                <div id="feynman-workspace" class="feynman-workspace" style="display: none;">
                    <div class="workspace-header">
                        <h4 id="feynman-concept-title"></h4>
                        <p class="workspace-prompt">Explain this concept in your own words, as if teaching it to a 5-year-old:</p>
                    </div>

                    <textarea id="feynman-explanation" class="feynman-textarea"
                              placeholder="Start typing your explanation...&#10;&#10;Tips:&#10;- Use simple words&#10;- Give real-world examples&#10;- Avoid jargon&#10;- If you get stuck, that's a gap in your understanding!"></textarea>

                    <div class="workspace-actions">
                        <button class="btn-secondary" onclick="window.activeRecall.clearFeynman()">Clear</button>
                        <button class="btn-primary" onclick="window.activeRecall.saveFeynman()">Save Explanation</button>
                    </div>
                </div>
            </div>

            <div class="feynman-history">
                <h3>Your Explanations</h3>
                <div id="feynman-saved-list">
                    ${this.renderFeynmanHistory()}
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    getFeynmanConcepts() {
        const concepts = [];

        // First, add sample Feynman concepts (always available for testing)
        if (APP_DATA.user.sampleFeynmanConcepts && APP_DATA.user.sampleFeynmanConcepts.length > 0) {
            APP_DATA.user.sampleFeynmanConcepts.forEach(concept => {
                concepts.push({
                    id: concept.id,
                    title: concept.title,
                    content: concept.content,
                    book: concept.book,
                    lesson: concept.lesson
                });
            });
        }

        // Then add concepts from completed lessons
        APP_DATA.categories.forEach(category => {
            category.books.forEach(book => {
                if (book.lessonList) {
                    book.lessonList.forEach(lesson => {
                        if (lesson.completed && lesson.cards) {
                            lesson.cards.forEach((card, i) => {
                                if (card.type === 'concept' && card.title) {
                                    concepts.push({
                                        id: `${book.id}-${lesson.id}-${i}`,
                                        title: card.title,
                                        content: card.content,
                                        book: book.title,
                                        lesson: lesson.title
                                    });
                                }
                            });
                        }
                    });
                }
            });
        });

        return concepts;
    }

    selectFeynmanConcept(conceptId) {
        if (!conceptId) {
            document.getElementById('feynman-workspace').style.display = 'none';
            return;
        }

        const concepts = this.getFeynmanConcepts();
        this.feynmanConcept = concepts.find(c => c.id === conceptId);

        if (this.feynmanConcept) {
            document.getElementById('feynman-concept-title').textContent = this.feynmanConcept.title;
            document.getElementById('feynman-workspace').style.display = 'block';
            document.getElementById('feynman-explanation').value = '';
        }
    }

    clearFeynman() {
        document.getElementById('feynman-explanation').value = '';
    }

    saveFeynman() {
        const explanation = document.getElementById('feynman-explanation').value.trim();

        if (!explanation) {
            alert('Please write an explanation first!');
            return;
        }

        if (!this.feynmanConcept) return;

        // Initialize feynman array if needed
        if (!APP_DATA.user.feynmanExplanations) {
            APP_DATA.user.feynmanExplanations = [];
        }

        APP_DATA.user.feynmanExplanations.push({
            id: Date.now(),
            conceptId: this.feynmanConcept.id,
            conceptTitle: this.feynmanConcept.title,
            book: this.feynmanConcept.book,
            explanation: explanation,
            date: new Date().toISOString()
        });

        saveProgress();

        // Award XP
        if (window.gamification) {
            window.gamification.awardXP(30, 'Feynman Technique Practice');
        }

        alert('Explanation saved! +30 XP');
        this.renderFeynman();
    }

    renderFeynmanHistory() {
        const explanations = APP_DATA.user.feynmanExplanations || [];

        if (explanations.length === 0) {
            return '<p class="no-explanations">No saved explanations yet. Practice explaining concepts above!</p>';
        }

        return explanations.slice(-5).reverse().map(exp => `
            <div class="feynman-saved-item">
                <div class="saved-header">
                    <h4>${exp.conceptTitle}</h4>
                    <span class="saved-date">${formatDateMMDDYYYY(exp.date)}</span>
                </div>
                <p class="saved-book">From: ${exp.book}</p>
                <p class="saved-explanation">${exp.explanation.substring(0, 200)}${exp.explanation.length > 200 ? '...' : ''}</p>
            </div>
        `).join('');
    }

    // ============================================
    // FAVORITES SHELF
    // ============================================

    renderFavorites() {
        const container = document.getElementById('favorites-shelf');
        if (!container) return;

        const favorites = APP_DATA.user.favoriteBooks || [];

        if (favorites.length === 0) {
            container.innerHTML = `
                <div class="no-favorites">
                    <p>No favorite books yet. Add books to your favorites from any book detail page!</p>
                </div>
            `;
            return;
        }

        const favoriteBooks = favorites.map(id => getBookById(id)).filter(b => b);

        container.innerHTML = favoriteBooks.map(book => `
            <div class="favorite-book-card" onclick="app.showBook('${book.id}')">
                <div class="fav-book-cover" style="background: linear-gradient(135deg, ${this.getCategoryColor(book.category)} 0%, ${this.getCategoryColorDark(book.category)} 100%)">
                    ${book.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
                </div>
                <div class="fav-book-title">${book.title}</div>
                <div class="fav-book-progress">${book.progress}%</div>
            </div>
        `).join('');
    }

    toggleFavorite(bookId) {
        if (!APP_DATA.user.favoriteBooks) {
            APP_DATA.user.favoriteBooks = [];
        }

        const index = APP_DATA.user.favoriteBooks.indexOf(bookId);
        if (index > -1) {
            APP_DATA.user.favoriteBooks.splice(index, 1);
        } else {
            if (APP_DATA.user.favoriteBooks.length >= 5) {
                alert('You can only have 5 favorite books. Remove one first!');
                return;
            }
            APP_DATA.user.favoriteBooks.push(bookId);
        }

        saveProgress();
        this.renderFavorites();
    }

    isFavorite(bookId) {
        return (APP_DATA.user.favoriteBooks || []).includes(bookId);
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
}

// Initialize active recall system
let activeRecall;
document.addEventListener('DOMContentLoaded', () => {
    // Will be initialized when app is ready
});

window.ActiveRecallSystem = ActiveRecallSystem;
