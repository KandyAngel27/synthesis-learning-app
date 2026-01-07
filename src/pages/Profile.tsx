import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, Flame, Book, Clock, Award, Target, Settings, 
  Moon, Sun, Type, Volume2, VolumeX, TrendingUp, Calendar
} from 'lucide-react';
import { useStore } from '../store/useStore';
import booksDatabase from '../data/booksData';
import Navigation from '../components/Navigation';
import './Profile.css';

const Profile: React.FC = () => {
  const userStats = useStore((state) => state.userStats);
  const userProgress = useStore((state) => state.userProgress);
  const darkMode = useStore((state) => state.darkMode);
  const fontSize = useStore((state) => state.fontSize);
  const soundEnabled = useStore((state) => state.soundEnabled);
  const toggleDarkMode = useStore((state) => state.toggleDarkMode);
  const setFontSize = useStore((state) => state.setFontSize);
  const dailyGoalMinutes = useStore((state) => state.dailyGoalMinutes);

  const statsCards = [
    {
      icon: <Flame size={32} />,
      label: 'Current Streak',
      value: `${userStats.currentStreak} days`,
      color: '#FF6B6B'
    },
    {
      icon: <Flame size={32} />,
      label: 'Longest Streak',
      value: `${userStats.longestStreak} days`,
      color: '#FFA07A'
    },
    {
      icon: <Book size={32} />,
      label: 'Books Started',
      value: userStats.totalBooksStarted,
      color: '#4ECDC4'
    },
    {
      icon: <Book size={32} />,
      label: 'Books Completed',
      value: userStats.totalBooksCompleted,
      color: '#95E1D3'
    },
    {
      icon: <TrendingUp size={32} />,
      label: 'Lessons Completed',
      value: userStats.totalLessonsCompleted,
      color: '#F38181'
    },
    {
      icon: <Clock size={32} />,
      label: 'Total Time',
      value: `${Math.floor(userStats.totalTimeSpent / 60)}h ${userStats.totalTimeSpent % 60}m`,
      color: '#AA96DA'
    }
  ];

  // Get books in progress
  const booksInProgress = Object.keys(userProgress)
    .map(bookId => {
      const book = booksDatabase.find(b => b.id === bookId);
      const progress = userProgress[bookId];
      if (!book) return null;
      
      const completionRate = (progress.completedLessons.length / book.lessons.length) * 100;
      return {
        book,
        progress,
        completionRate
      };
    })
    .filter(Boolean)
    .filter(item => item && item.completionRate < 100)
    .sort((a, b) => (b?.progress.lastAccessed.getTime() || 0) - (a?.progress.lastAccessed.getTime() || 0));

  return (
    <div className="profile-container">
      <Navigation />
      
      <div className="profile-content">
        {/* Header */}
        <motion.div 
          className="profile-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="profile-avatar">
            <User size={48} />
          </div>
          <div className="profile-info">
            <h1>Your Learning Journey</h1>
            <p>Keep up the great work! 🚀</p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.section 
          className="profile-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="section-title">
            <TrendingUp size={24} />
            Your Stats
          </h2>
          <div className="profile-stats-grid">
            {statsCards.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="profile-stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-icon-profile" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
                <div className="stat-details">
                  <h3 className="stat-value-profile">{stat.value}</h3>
                  <p className="stat-label-profile">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Daily Goal */}
        <motion.section 
          className="profile-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="section-title">
            <Target size={24} />
            Daily Goal
          </h2>
          <div className="daily-goal-card">
            <div className="goal-info">
              <p className="goal-label">Your daily learning goal</p>
              <h3 className="goal-value">{dailyGoalMinutes} minutes</h3>
            </div>
            <Calendar size={48} color="#8b5cf6" opacity={0.2} />
          </div>
        </motion.section>

        {/* Books in Progress */}
        {booksInProgress.length > 0 && (
          <motion.section 
            className="profile-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="section-title">
              <Book size={24} />
              Books in Progress
            </h2>
            <div className="progress-books-list">
              {booksInProgress.map((item, index) => {
                if (!item) return null;
                const { book, progress, completionRate } = item;
                
                return (
                  <motion.div
                    key={book.id}
                    className="progress-book-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div 
                      className="progress-book-cover"
                      style={{
                        background: `linear-gradient(135deg, ${book.coverGradient.join(', ')})`
                      }}
                    />
                    <div className="progress-book-details">
                      <h4>{book.title}</h4>
                      <p>{book.author}</p>
                      <div className="progress-book-bar">
                        <div 
                          className="progress-book-fill"
                          style={{ width: `${completionRate}%` }}
                        />
                      </div>
                      <span className="progress-book-text">
                        {progress.completedLessons.length} / {book.lessons.length} lessons
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Achievements */}
        <motion.section 
          className="profile-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="section-title">
            <Award size={24} />
            Achievements
          </h2>
          <div className="achievements-grid">
            <div className={`achievement-badge ${userStats.currentStreak >= 7 ? 'earned' : 'locked'}`}>
              <div className="badge-icon">🔥</div>
              <div className="badge-info">
                <h4>Week Warrior</h4>
                <p>7 day streak</p>
              </div>
            </div>
            
            <div className={`achievement-badge ${userStats.totalLessonsCompleted >= 10 ? 'earned' : 'locked'}`}>
              <div className="badge-icon">📚</div>
              <div className="badge-info">
                <h4>Knowledge Seeker</h4>
                <p>10 lessons completed</p>
              </div>
            </div>
            
            <div className={`achievement-badge ${userStats.totalBooksCompleted >= 1 ? 'earned' : 'locked'}`}>
              <div className="badge-icon">🎓</div>
              <div className="badge-info">
                <h4>Book Master</h4>
                <p>Complete your first book</p>
              </div>
            </div>
            
            <div className={`achievement-badge ${userStats.currentStreak >= 30 ? 'earned' : 'locked'}`}>
              <div className="badge-icon">💎</div>
              <div className="badge-info">
                <h4>Diamond Mind</h4>
                <p>30 day streak</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Settings */}
        <motion.section 
          className="profile-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="section-title">
            <Settings size={24} />
            Settings
          </h2>
          
          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-info">
                {darkMode ? <Moon size={20} /> : <Sun size={20} />}
                <div>
                  <h4>Dark Mode</h4>
                  <p>Toggle dark theme</p>
                </div>
              </div>
              <button 
                className={`toggle-button ${darkMode ? 'active' : ''}`}
                onClick={toggleDarkMode}
              >
                <div className="toggle-slider" />
              </button>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <Type size={20} />
                <div>
                  <h4>Font Size</h4>
                  <p>Adjust text size</p>
                </div>
              </div>
              <div className="font-size-buttons">
                <button 
                  className={`font-button ${fontSize === 'small' ? 'active' : ''}`}
                  onClick={() => setFontSize('small')}
                >
                  A
                </button>
                <button 
                  className={`font-button ${fontSize === 'medium' ? 'active' : ''}`}
                  onClick={() => setFontSize('medium')}
                >
                  A
                </button>
                <button 
                  className={`font-button ${fontSize === 'large' ? 'active' : ''}`}
                  onClick={() => setFontSize('large')}
                >
                  A
                </button>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                <div>
                  <h4>Sound Effects</h4>
                  <p>Enable audio feedback</p>
                </div>
              </div>
              <button className={`toggle-button ${soundEnabled ? 'active' : ''}`}>
                <div className="toggle-slider" />
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Profile;
