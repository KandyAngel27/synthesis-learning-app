import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Book, TrendingUp, Award, Flame, Clock, Target } from 'lucide-react';
import { useStore } from '../store/useStore';
import booksDatabase, { categories } from '../data/booksData';
import Navigation from '../components/Navigation';
import './Home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const userStats = useStore((state) => state.userStats);
  const userProgress = useStore((state) => state.userProgress);
  const dailyGoalMinutes = useStore((state) => state.dailyGoalMinutes);
  
  const [greeting, setGreeting] = useState('');
  const [todayProgress, setTodayProgress] = useState(0);
  const [recommendedBook, setRecommendedBook] = useState(booksDatabase[0]);

  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');

    // Calculate today's progress
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let todayMinutes = 0;
    Object.values(userProgress).forEach(progress => {
      const lastAccessed = new Date(progress.lastAccessed);
      lastAccessed.setHours(0, 0, 0, 0);
      if (lastAccessed.getTime() === today.getTime()) {
        todayMinutes += progress.totalTimeSpent;
      }
    });
    
    setTodayProgress(Math.min((todayMinutes / dailyGoalMinutes) * 100, 100));

    // Smart book recommendation
    const inProgressBooks = Object.keys(userProgress).map(id => 
      booksDatabase.find(book => book.id === id)
    ).filter(Boolean);

    if (inProgressBooks.length > 0 && inProgressBooks[0]) {
      setRecommendedBook(inProgressBooks[0]);
    } else {
      // Recommend based on user's most completed category
      const categoryCount: { [key: string]: number } = {};
      Object.values(userProgress).forEach(progress => {
        const book = booksDatabase.find(b => b.id === progress.bookId);
        if (book) {
          categoryCount[book.category] = (categoryCount[book.category] || 0) + progress.completedLessons.length;
        }
      });

      const topCategory = Object.keys(categoryCount).sort((a, b) => 
        categoryCount[b] - categoryCount[a]
      )[0];

      if (topCategory) {
        const categoryBooks = booksDatabase.filter(b => b.category === topCategory);
        setRecommendedBook(categoryBooks[Math.floor(Math.random() * categoryBooks.length)]);
      }
    }
  }, [userProgress, dailyGoalMinutes]);

  const statsCards = [
    {
      icon: <Flame size={24} />,
      label: 'Current Streak',
      value: `${userStats.currentStreak} days`,
      color: '#FF6B6B',
      bgColor: 'rgba(255, 107, 107, 0.1)'
    },
    {
      icon: <Book size={24} />,
      label: 'Books Started',
      value: userStats.totalBooksStarted,
      color: '#4ECDC4',
      bgColor: 'rgba(78, 205, 196, 0.1)'
    },
    {
      icon: <Clock size={24} />,
      label: 'Time Learning',
      value: `${Math.floor(userStats.totalTimeSpent / 60)}h ${userStats.totalTimeSpent % 60}m`,
      color: '#95E1D3',
      bgColor: 'rgba(149, 225, 211, 0.1)'
    },
    {
      icon: <Award size={24} />,
      label: 'Achievements',
      value: userStats.achievements.length,
      color: '#FFD93D',
      bgColor: 'rgba(255, 217, 61, 0.1)'
    }
  ];

  return (
    <div className="home-container">
      <Navigation />
      
      <div className="home-content">
        {/* Hero Section */}
        <motion.div 
          className="hero-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title">
            {greeting}, Learner 🌟
          </h1>
          <p className="hero-subtitle">
            Your daily dose of wisdom awaits
          </p>
        </motion.div>

        {/* Daily Progress Card */}
        <motion.div 
          className="daily-progress-card"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="progress-header">
            <div>
              <h3 className="progress-title">Today's Goal</h3>
              <p className="progress-subtitle">{dailyGoalMinutes} minutes</p>
            </div>
            <Target size={32} color="#8b5cf6" />
          </div>
          
          <div className="progress-bar-container">
            <motion.div 
              className="progress-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${todayProgress}%` }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          
          <p className="progress-text">
            {todayProgress >= 100 ? '🎉 Goal achieved!' : `${Math.round(todayProgress)}% complete`}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="stats-grid">
          {statsCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              style={{ 
                backgroundColor: stat.bgColor,
                borderLeft: `4px solid ${stat.color}`
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              <div className="stat-info">
                <p className="stat-label">{stat.label}</p>
                <p className="stat-value">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continue Learning Section */}
        {recommendedBook && (
          <motion.div
            className="continue-learning-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="section-title">
              <TrendingUp size={24} />
              Continue Your Journey
            </h2>

            <motion.div
              className="featured-book-card"
              style={{
                background: `linear-gradient(135deg, ${recommendedBook.coverGradient.join(', ')})`
              }}
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate(`/book/${recommendedBook.id}`)}
            >
              <div className="featured-book-content">
                <div className="featured-book-info">
                  <span className="featured-book-category">
                    {categories.find(c => c.id === recommendedBook.category)?.icon}
                    {' '}
                    {categories.find(c => c.id === recommendedBook.category)?.name}
                  </span>
                  <h3 className="featured-book-title">{recommendedBook.title}</h3>
                  <p className="featured-book-author">by {recommendedBook.author}</p>
                  <p className="featured-book-description">{recommendedBook.description}</p>
                  
                  <div className="featured-book-meta">
                    <span className="meta-item">
                      <Clock size={16} />
                      {recommendedBook.totalDuration} min
                    </span>
                    <span className="meta-item">
                      {recommendedBook.lessons.length} lessons
                    </span>
                  </div>

                  {userProgress[recommendedBook.id] && (
                    <div className="book-progress">
                      <div className="book-progress-bar">
                        <motion.div 
                          className="book-progress-fill"
                          initial={{ width: 0 }}
                          animate={{ 
                            width: `${(userProgress[recommendedBook.id].completedLessons.length / recommendedBook.lessons.length) * 100}%` 
                          }}
                        />
                      </div>
                      <span className="book-progress-text">
                        {userProgress[recommendedBook.id].completedLessons.length} / {recommendedBook.lessons.length} lessons
                      </span>
                    </div>
                  )}
                </div>

                <motion.button
                  className="continue-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {userProgress[recommendedBook.id] ? 'Continue' : 'Start Learning'}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Quick Categories */}
        <motion.div
          className="categories-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="section-title">Explore Topics</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                className="category-card"
                style={{ backgroundColor: category.color + '20', borderColor: category.color }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                whileHover={{ scale: 1.05, backgroundColor: category.color + '30' }}
                onClick={() => navigate(`/library/${category.id}`)}
              >
                <span className="category-icon">{category.icon}</span>
                <span className="category-name">{category.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
