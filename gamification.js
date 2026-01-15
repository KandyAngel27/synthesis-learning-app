// ============================================
// GAMIFICATION SYSTEM
// XP, Levels, Daily Challenges, Badges, Stats
// ============================================

class GamificationSystem {
    constructor(app) {
        this.app = app;
        this.initializeDailyChallenges();
    }

    // ============================================
    // XP & LEVEL SYSTEM
    // ============================================

    awardXP(amount, reason) {
        const user = APP_DATA.user;
        user.xp += amount;
        user.totalXpEarned += amount;

        // Check for level up
        while (user.xp >= user.xpToNextLevel) {
            this.levelUp();
        }

        // Show XP notification
        this.showXPNotification(amount, reason);

        // Check XP badges
        this.checkXPBadges();

        saveProgress();
        this.updateXPDisplay();
    }

    levelUp() {
        const user = APP_DATA.user;
        user.xp -= user.xpToNextLevel;
        user.level += 1;
        // XP required increases each level
        user.xpToNextLevel = Math.floor(100 * Math.pow(1.15, user.level - 1));

        // Show level up notification
        this.showLevelUpNotification();

        // Check level badges
        this.checkLevelBadges();
    }

    getLevelTitle() {
        const user = APP_DATA.user;
        const titles = user.levelTitles;
        let currentTitle = titles[0];

        for (const t of titles) {
            if (user.level >= t.level) {
                currentTitle = t;
            }
        }

        return currentTitle;
    }

    showXPNotification(amount, reason) {
        const notification = document.createElement('div');
        notification.className = 'xp-notification';
        notification.innerHTML = `
            <div class="xp-amount">+${amount} XP</div>
            <div class="xp-reason">${reason}</div>
        `;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 10);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    showLevelUpNotification() {
        const user = APP_DATA.user;
        const title = this.getLevelTitle();

        const modal = document.createElement('div');
        modal.className = 'level-up-modal';
        modal.innerHTML = `
            <div class="level-up-content">
                <div class="level-up-icon">${title.icon}</div>
                <h2>LEVEL UP!</h2>
                <div class="level-up-level">Level ${user.level}</div>
                <div class="level-up-title">${title.title}</div>
                <button onclick="this.parentElement.parentElement.remove()" class="btn-primary">Awesome!</button>
            </div>
        `;
        document.body.appendChild(modal);

        setTimeout(() => modal.classList.add('show'), 10);
    }

    updateXPDisplay() {
        const user = APP_DATA.user;
        const xpBar = document.getElementById('xp-bar-fill');
        const xpText = document.getElementById('xp-text');
        const levelText = document.getElementById('level-text');

        if (xpBar) {
            const percentage = (user.xp / user.xpToNextLevel) * 100;
            xpBar.style.width = `${percentage}%`;
        }

        if (xpText) {
            xpText.textContent = `${user.xp} / ${user.xpToNextLevel} XP`;
        }

        if (levelText) {
            const title = this.getLevelTitle();
            levelText.textContent = `Level ${user.level} - ${title.title}`;
        }
    }

    // ============================================
    // DAILY CHALLENGES
    // ============================================

    initializeDailyChallenges() {
        const today = new Date().toISOString().split('T')[0];
        const challenges = APP_DATA.user.dailyChallenges;

        if (challenges.currentDate !== today) {
            // New day - generate new challenges
            this.generateDailyChallenges();
            challenges.currentDate = today;
            challenges.completedToday = [];

            // Reset daily progress
            APP_DATA.user.studyGoals.currentProgress.todayMinutes = 0;
            APP_DATA.user.studyGoals.currentProgress.todayLessons = 0;

            saveProgress();
        }
    }

    generateDailyChallenges() {
        const templates = APP_DATA.user.challengeTemplates;
        const challenges = APP_DATA.user.dailyChallenges;

        // Pick 3 random challenges (avoiding duplicates)
        const shuffled = [...templates].sort(() => Math.random() - 0.5);
        const selected = [];

        // Get one lesson-based, one time-based, and one misc
        const lessonChallenges = shuffled.filter(c => c.type === 'lessons' || c.type === 'quiz_perfect' || c.type === 'quiz_pass');
        const timeChallenges = shuffled.filter(c => c.type === 'study_time' || c.type === 'time_specific');
        const miscChallenges = shuffled.filter(c => !['lessons', 'quiz_perfect', 'quiz_pass', 'study_time', 'time_specific'].includes(c.type));

        if (lessonChallenges.length > 0) selected.push({ ...lessonChallenges[0], progress: 0 });
        if (timeChallenges.length > 0) selected.push({ ...timeChallenges[0], progress: 0 });
        if (miscChallenges.length > 0) selected.push({ ...miscChallenges[0], progress: 0 });

        // Fill remaining slots if needed
        while (selected.length < 3 && shuffled.length > selected.length) {
            const next = shuffled.find(c => !selected.some(s => s.id === c.id));
            if (next) selected.push({ ...next, progress: 0 });
            else break;
        }

        challenges.challenges = selected;
    }

    updateChallengeProgress(type, amount = 1) {
        const challenges = APP_DATA.user.dailyChallenges;
        let challengeCompleted = false;

        challenges.challenges.forEach(challenge => {
            if (challenge.type === type && !challenges.completedToday.includes(challenge.id)) {
                challenge.progress = (challenge.progress || 0) + amount;

                if (challenge.progress >= challenge.target) {
                    // Challenge completed!
                    challenges.completedToday.push(challenge.id);
                    challenges.totalChallengesCompleted++;
                    challengeCompleted = true;

                    // Award XP
                    this.awardXP(challenge.xp, `Daily Challenge: ${challenge.description}`);

                    // Show completion notification
                    this.showChallengeCompleteNotification(challenge);
                }
            }
        });

        // Check if all challenges completed
        if (challenges.completedToday.length === challenges.challenges.length) {
            challenges.currentChallengeStreak++;
            if (challenges.currentChallengeStreak > challenges.longestChallengeStreak) {
                challenges.longestChallengeStreak = challenges.currentChallengeStreak;
            }
            this.checkChallengeBadges();
        }

        saveProgress();
        this.renderDailyChallenges();

        return challengeCompleted;
    }

    checkTimeSpecificChallenge() {
        const hour = new Date().getHours();
        const challenges = APP_DATA.user.dailyChallenges;

        challenges.challenges.forEach(challenge => {
            if (challenge.type === 'time_specific' && !challenges.completedToday.includes(challenge.id)) {
                if (hour >= challenge.timeStart && hour < challenge.timeEnd) {
                    this.updateChallengeProgress('time_specific');
                }
            }
        });

        // Also check for Night Owl / Early Bird badges
        if (hour >= 22 || hour < 2) {
            this.unlockBadge('night_owl');
        }
        if (hour >= 4 && hour < 6) {
            this.unlockBadge('early_bird');
        }
    }

    showChallengeCompleteNotification(challenge) {
        const notification = document.createElement('div');
        notification.className = 'challenge-complete-notification';
        notification.innerHTML = `
            <div class="challenge-complete-icon">${challenge.icon}</div>
            <div class="challenge-complete-text">
                <div class="challenge-complete-title">Challenge Complete!</div>
                <div class="challenge-complete-desc">${challenge.description}</div>
                <div class="challenge-complete-xp">+${challenge.xp} XP</div>
            </div>
        `;
        document.body.appendChild(notification);

        setTimeout(() => notification.classList.add('show'), 10);
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    renderDailyChallenges() {
        const container = document.getElementById('daily-challenges-container');
        if (!container) return;

        const challenges = APP_DATA.user.dailyChallenges;
        const today = new Date().toISOString().split('T')[0];

        // Make sure we have today's challenges
        if (challenges.currentDate !== today) {
            this.initializeDailyChallenges();
        }

        const html = `
            <div class="daily-challenges-header">
                <h3>Daily Challenges</h3>
                <div class="challenge-streak">
                    <span class="streak-icon">🎯</span>
                    <span class="streak-count">${challenges.currentChallengeStreak} day streak</span>
                </div>
            </div>
            <div class="daily-challenges-list">
                ${challenges.challenges.map(challenge => {
                    const isCompleted = challenges.completedToday.includes(challenge.id);
                    const target = challenge.target || 1;
                    const progress = Math.min(challenge.progress || 0, target);
                    const percentage = (progress / target) * 100;
                    const template = APP_DATA.user.challengeTemplates.find(t => t.id === challenge.id);
                    const icon = template ? template.icon : challenge.icon;

                    return `
                        <div class="challenge-card ${isCompleted ? 'completed' : ''}">
                            <div class="challenge-icon">${icon}</div>
                            <div class="challenge-info">
                                <div class="challenge-description">${challenge.description}</div>
                                <div class="challenge-progress-bar">
                                    <div class="challenge-progress-fill" style="width: ${percentage}%"></div>
                                </div>
                                <div class="challenge-progress-text">${progress}/${target}</div>
                            </div>
                            <div class="challenge-xp ${isCompleted ? 'earned' : ''}">
                                ${isCompleted ? '✅' : `+${challenge.xp} XP`}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        container.innerHTML = html;
    }

    // ============================================
    // BADGES & ACHIEVEMENTS
    // ============================================

    unlockBadge(badgeId) {
        const badge = APP_DATA.user.badges.find(b => b.id === badgeId);
        if (badge && !badge.unlocked) {
            badge.unlocked = true;
            badge.unlockedDate = new Date().toISOString();

            // Award XP for badge
            this.awardXP(APP_DATA.user.xpRewards.badgeUnlock, `Badge Unlocked: ${badge.name}`);

            // Show badge notification
            this.showBadgeNotification(badge);

            saveProgress();
        }
    }

    checkBadges() {
        this.checkStreakBadges();
        this.checkLessonBadges();
        this.checkBookBadges();
        this.checkQuizBadges();
        this.checkXPBadges();
        this.checkLevelBadges();
        this.checkChallengeBadges();
    }

    checkStreakBadges() {
        const streak = APP_DATA.user.streak;
        const badges = APP_DATA.user.badges.filter(b => b.category === 'streak');

        badges.forEach(badge => {
            if (!badge.unlocked && streak >= badge.requirement) {
                this.unlockBadge(badge.id);
            }
        });
    }

    checkLessonBadges() {
        const lessons = APP_DATA.user.learningStats.lessonsCompleted;
        const badges = APP_DATA.user.badges.filter(b => b.category === 'lessons');

        badges.forEach(badge => {
            if (!badge.unlocked && lessons >= badge.requirement) {
                this.unlockBadge(badge.id);
            }
        });
    }

    checkBookBadges() {
        const books = APP_DATA.user.booksCompleted;
        const badges = APP_DATA.user.badges.filter(b => b.category === 'books');

        badges.forEach(badge => {
            if (!badge.unlocked && books >= badge.requirement) {
                this.unlockBadge(badge.id);
            }
        });
    }

    checkQuizBadges() {
        const perfectQuizzes = APP_DATA.user.learningStats.quizzesPerfect;
        const badges = APP_DATA.user.badges.filter(b => b.category === 'quiz');

        badges.forEach(badge => {
            if (!badge.unlocked && perfectQuizzes >= badge.requirement) {
                this.unlockBadge(badge.id);
            }
        });
    }

    checkXPBadges() {
        const totalXP = APP_DATA.user.totalXpEarned;
        const badges = APP_DATA.user.badges.filter(b => b.category === 'xp');

        badges.forEach(badge => {
            if (!badge.unlocked && totalXP >= badge.requirement) {
                this.unlockBadge(badge.id);
            }
        });
    }

    checkLevelBadges() {
        const level = APP_DATA.user.level;
        const badges = APP_DATA.user.badges.filter(b => b.category === 'level');

        badges.forEach(badge => {
            if (!badge.unlocked && level >= badge.requirement) {
                this.unlockBadge(badge.id);
            }
        });
    }

    checkChallengeBadges() {
        const streak = APP_DATA.user.dailyChallenges.currentChallengeStreak;
        const badges = APP_DATA.user.badges.filter(b => b.category === 'challenges');

        badges.forEach(badge => {
            if (!badge.unlocked && streak >= badge.requirement) {
                this.unlockBadge(badge.id);
            }
        });
    }

    showBadgeNotification(badge) {
        const modal = document.createElement('div');
        modal.className = 'badge-unlock-modal';
        modal.innerHTML = `
            <div class="badge-unlock-content">
                <div class="badge-unlock-icon">${badge.icon}</div>
                <h2>Badge Unlocked!</h2>
                <div class="badge-unlock-name">${badge.name}</div>
                <div class="badge-unlock-desc">${badge.description}</div>
                <div class="badge-unlock-xp">+${APP_DATA.user.xpRewards.badgeUnlock} XP</div>
                <button onclick="this.parentElement.parentElement.remove()" class="btn-primary">Awesome!</button>
            </div>
        `;
        document.body.appendChild(modal);

        setTimeout(() => modal.classList.add('show'), 10);
    }

    renderBadges() {
        const container = document.getElementById('badges-container');
        if (!container) return;

        const badges = APP_DATA.user.badges;
        const unlockedCount = badges.filter(b => b.unlocked).length;

        const html = `
            <div class="badges-header">
                <h3>Badges & Achievements</h3>
                <div class="badges-count">${unlockedCount}/${badges.length} Unlocked</div>
            </div>
            <div class="badges-grid">
                ${badges.map(badge => `
                    <div class="badge-item ${badge.unlocked ? 'unlocked' : 'locked'}">
                        <div class="badge-icon">${badge.unlocked ? badge.icon : '🔒'}</div>
                        <div class="badge-name">${badge.name}</div>
                        <div class="badge-desc">${badge.description}</div>
                        ${badge.unlockedDate ? `<div class="badge-date">Unlocked ${formatDateMMDDYYYY(badge.unlockedDate)}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;

        container.innerHTML = html;
    }

    // ============================================
    // LEARNING STATS
    // ============================================

    recordStudySession(minutes, category, lessonsCompleted = 0) {
        const stats = APP_DATA.user.learningStats;
        const today = new Date().toISOString().split('T')[0];
        const hour = new Date().getHours();

        // Update totals
        stats.totalStudyMinutes += minutes;
        stats.lessonsCompleted += lessonsCompleted;

        // Update today's progress
        APP_DATA.user.studyGoals.currentProgress.todayMinutes += minutes;
        APP_DATA.user.studyGoals.currentProgress.todayLessons += lessonsCompleted;

        // Track category
        if (category && !stats.categoriesExplored.includes(category)) {
            stats.categoriesExplored.push(category);
        }

        // Update heat map
        if (!stats.heatMapData[today]) {
            stats.heatMapData[today] = { minutes: 0, lessons: 0 };
        }
        stats.heatMapData[today].minutes += minutes;
        stats.heatMapData[today].lessons += lessonsCompleted;

        // Track study history
        stats.studyHistory.push({
            date: new Date().toISOString(),
            minutes,
            lessons: lessonsCompleted,
            category,
            hour
        });

        // Update challenges
        if (minutes > 0) {
            this.updateChallengeProgress('study_time', minutes);
        }
        if (lessonsCompleted > 0) {
            this.updateChallengeProgress('lessons', lessonsCompleted);
            this.checkTimeSpecificChallenge();
        }

        saveProgress();
    }

    recordQuizResult(bookId, lessonId, score, total) {
        const stats = APP_DATA.user.learningStats;
        const percentage = (score / total) * 100;
        const isPerfect = score === total;

        stats.quizzesTaken++;
        if (isPerfect) {
            stats.quizzesPerfect++;
            this.updateChallengeProgress('quiz_perfect');
        }

        // Update average
        const totalScore = stats.averageQuizScore * (stats.quizzesTaken - 1) + percentage;
        stats.averageQuizScore = totalScore / stats.quizzesTaken;

        // Record in history
        stats.quizHistory.push({
            date: new Date().toISOString(),
            bookId,
            lessonId,
            score,
            total,
            percentage,
            perfect: isPerfect
        });

        // Award XP
        if (isPerfect) {
            this.awardXP(APP_DATA.user.xpRewards.quizPerfect, 'Perfect Quiz Score!');
        } else if (percentage >= 70) {
            this.awardXP(APP_DATA.user.xpRewards.quizPass, 'Quiz Passed');
        }

        // Check quiz badges
        this.checkQuizBadges();

        saveProgress();
    }

    renderStatsOverview() {
        const container = document.getElementById('stats-overview');
        if (!container) return;

        const user = APP_DATA.user;
        const stats = user.learningStats;
        const title = this.getLevelTitle();

        const html = `
            <div class="stats-hero">
                <div class="level-display">
                    <div class="level-icon">${title.icon}</div>
                    <div class="level-info">
                        <div class="level-number">Level ${user.level}</div>
                        <div class="level-title">${title.title}</div>
                    </div>
                </div>
                <div class="xp-bar-container">
                    <div class="xp-bar">
                        <div class="xp-bar-fill" id="xp-bar-fill" style="width: ${(user.xp / user.xpToNextLevel) * 100}%"></div>
                    </div>
                    <div class="xp-text" id="xp-text">${user.xp} / ${user.xpToNextLevel} XP</div>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon">🔥</div>
                    <div class="stat-value">${user.streak}</div>
                    <div class="stat-label">Day Streak</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📚</div>
                    <div class="stat-value">${stats.lessonsCompleted}</div>
                    <div class="stat-label">Lessons Done</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📖</div>
                    <div class="stat-value">${user.booksCompleted}</div>
                    <div class="stat-label">Books Completed</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">⏱️</div>
                    <div class="stat-value">${Math.floor(stats.totalStudyMinutes / 60)}h ${stats.totalStudyMinutes % 60}m</div>
                    <div class="stat-label">Total Study Time</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">🧠</div>
                    <div class="stat-value">${Math.round(stats.averageQuizScore)}%</div>
                    <div class="stat-label">Avg Quiz Score</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">✅</div>
                    <div class="stat-value">${stats.quizzesPerfect}</div>
                    <div class="stat-label">Perfect Quizzes</div>
                </div>
            </div>

            <div class="today-progress">
                <h3>Today's Progress</h3>
                <div class="progress-row">
                    <span>Study Time: ${user.studyGoals.currentProgress.todayMinutes}/${user.studyGoals.dailyMinutes} min</span>
                    <div class="mini-progress-bar">
                        <div class="mini-progress-fill" style="width: ${Math.min((user.studyGoals.currentProgress.todayMinutes / user.studyGoals.dailyMinutes) * 100, 100)}%"></div>
                    </div>
                </div>
                <div class="progress-row">
                    <span>Lessons: ${user.studyGoals.currentProgress.todayLessons}/${user.studyGoals.dailyLessons}</span>
                    <div class="mini-progress-bar">
                        <div class="mini-progress-fill" style="width: ${Math.min((user.studyGoals.currentProgress.todayLessons / user.studyGoals.dailyLessons) * 100, 100)}%"></div>
                    </div>
                </div>
            </div>
        `;

        container.innerHTML = html;
    }

    renderHeatMap() {
        const container = document.getElementById('heat-map-container');
        if (!container) return;

        const heatMapData = APP_DATA.user.learningStats.heatMapData;
        const today = new Date();
        const days = [];

        // Generate last 90 days
        for (let i = 89; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            const data = heatMapData[dateStr] || { minutes: 0, lessons: 0 };
            days.push({ date: dateStr, ...data });
        }

        // Determine intensity levels
        const getIntensity = (minutes) => {
            if (minutes === 0) return 0;
            if (minutes < 15) return 1;
            if (minutes < 30) return 2;
            if (minutes < 60) return 3;
            return 4;
        };

        const html = `
            <div class="heat-map-header">
                <h3>Study Activity</h3>
                <div class="heat-map-legend">
                    <span>Less</span>
                    <div class="legend-box intensity-0"></div>
                    <div class="legend-box intensity-1"></div>
                    <div class="legend-box intensity-2"></div>
                    <div class="legend-box intensity-3"></div>
                    <div class="legend-box intensity-4"></div>
                    <span>More</span>
                </div>
            </div>
            <div class="heat-map-grid">
                ${days.map(day => `
                    <div class="heat-map-day intensity-${getIntensity(day.minutes)}"
                         title="${day.date}: ${day.minutes} min, ${day.lessons} lessons">
                    </div>
                `).join('')}
            </div>
        `;

        container.innerHTML = html;
    }

    // ============================================
    // FLASHCARD SYSTEM
    // ============================================

    generateFlashcardsFromLesson(bookId, lesson) {
        const cards = [];

        lesson.cards.forEach((card, index) => {
            if (card.type === 'concept' || card.type === 'visual') {
                // Extract key concepts as flashcards
                const lines = card.content.split('\n').filter(l => l.includes('**') || l.includes(':'));
                lines.slice(0, 3).forEach((line, lineIndex) => {
                    cards.push({
                        id: `${bookId}-${lesson.id}-${index}-${lineIndex}`,
                        bookId,
                        lessonId: lesson.id,
                        front: card.title,
                        back: line.replace(/\*\*/g, '').trim(),
                        interval: 1,
                        nextReview: new Date().toISOString(),
                        easeFactor: 2.5,
                        reviewCount: 0
                    });
                });
            }

            if (card.type === 'quiz') {
                // Create flashcard from quiz question
                const correctOption = card.options.find(o => o.correct);
                cards.push({
                    id: `${bookId}-${lesson.id}-quiz-${index}`,
                    bookId,
                    lessonId: lesson.id,
                    front: card.question,
                    back: correctOption ? correctOption.text : card.explanation,
                    interval: 1,
                    nextReview: new Date().toISOString(),
                    easeFactor: 2.5,
                    reviewCount: 0
                });
            }
        });

        return cards;
    }

    addFlashcardsFromLesson(bookId, lesson) {
        const newCards = this.generateFlashcardsFromLesson(bookId, lesson);
        const existingIds = APP_DATA.user.flashcards.cards.map(c => c.id);

        newCards.forEach(card => {
            if (!existingIds.includes(card.id)) {
                APP_DATA.user.flashcards.cards.push(card);
            }
        });

        APP_DATA.user.flashcards.stats.totalCards = APP_DATA.user.flashcards.cards.length;
        saveProgress();
    }

    getDueFlashcards() {
        const now = new Date();
        return APP_DATA.user.flashcards.cards.filter(card => {
            return new Date(card.nextReview) <= now;
        });
    }

    reviewFlashcard(cardId, quality) {
        // Quality: 0 = forgot, 1 = hard, 2 = good, 3 = easy
        const card = APP_DATA.user.flashcards.cards.find(c => c.id === cardId);
        if (!card) return;

        card.reviewCount++;

        // SM-2 algorithm implementation
        if (quality < 2) {
            // Failed - reset
            card.interval = 1;
            card.easeFactor = Math.max(1.3, card.easeFactor - 0.2);
        } else {
            if (card.reviewCount === 1) {
                card.interval = 1;
            } else if (card.reviewCount === 2) {
                card.interval = 6;
            } else {
                card.interval = Math.round(card.interval * card.easeFactor);
            }

            card.easeFactor = card.easeFactor + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02));
            card.easeFactor = Math.max(1.3, card.easeFactor);
        }

        // Set next review date
        const nextReview = new Date();
        nextReview.setDate(nextReview.getDate() + card.interval);
        card.nextReview = nextReview.toISOString();

        // Update stats
        APP_DATA.user.learningStats.flashcardsReviewed++;
        this.updateChallengeProgress('flashcards');

        // Award XP for reviewing
        this.awardXP(APP_DATA.user.xpRewards.flashcardReview, 'Flashcard Review');

        saveProgress();
    }
}

// Initialize gamification when app loads
let gamification;
document.addEventListener('DOMContentLoaded', () => {
    // Will be initialized when app is ready
});

// Make globally accessible
window.GamificationSystem = GamificationSystem;
