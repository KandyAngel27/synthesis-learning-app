import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { Search, Filter, Clock, ChevronRight } from 'lucide-react';
import { useStore } from '../store/useStore';
import booksDatabase, { categories, Book } from '../data/booksData';
import { artHistoryData } from '../data/artHistoryData';
import Navigation from '../components/Navigation';
import './Library.css';

// Combined book type for display
interface DisplayBook {
  id: string;
  title: string;
  author: string;
  category: string;
  lessonsCount: number;
  totalDuration: number;
  difficulty?: string;
  tags?: string[];
  coverGradient?: string[];
  isArtHistory: boolean;
}

const Library: React.FC = () => {
  const navigate = useNavigate();
  const { category: urlCategory } = useParams<{ category?: string }>();
  const userProgress = useStore((state) => state.userProgress);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(urlCategory || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'title' | 'duration' | 'popular'>('title');

  // Convert art history books to display format
  const artHistoryBooks: DisplayBook[] = useMemo(() => {
    return artHistoryData.books.map(book => ({
      id: book.id,
      title: book.title,
      author: book.author,
      category: 'art-history',
      lessonsCount: book.lessonList.length,
      totalDuration: book.duration,
      difficulty: 'intermediate',
      tags: ['Art', 'History', 'Visual Arts'],
      coverGradient: ['#ec4899', '#8b5cf6'],
      isArtHistory: true
    }));
  }, []);

  // Convert regular books to display format
  const regularBooks: DisplayBook[] = useMemo(() => {
    return booksDatabase.map(book => ({
      id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
      lessonsCount: book.lessons.length,
      totalDuration: book.totalDuration,
      difficulty: book.difficulty,
      tags: book.tags,
      coverGradient: book.coverGradient,
      isArtHistory: false
    }));
  }, []);

  // Combine all books
  const allBooks = useMemo(() => [...regularBooks, ...artHistoryBooks], [regularBooks, artHistoryBooks]);

  // Filter and sort books
  const filteredBooks = useMemo(() => {
    let filtered = allBooks;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(book =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        (book.tags && book.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }

    // Difficulty filter
    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(book => book.difficulty === selectedDifficulty);
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'duration':
          return a.totalDuration - b.totalDuration;
        case 'popular':
          // Sort by number of completions (mock implementation)
          const aProgress = userProgress[a.id]?.completedLessons?.length || 0;
          const bProgress = userProgress[b.id]?.completedLessons?.length || 0;
          return bProgress - aProgress;
        default:
          return a.title.localeCompare(b.title);
      }
    });

    return sorted;
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy, userProgress, allBooks]);

  const getBookProgress = (book: DisplayBook) => {
    const progress = userProgress[book.id];
    if (!progress) return 0;
    return (progress.completedLessons.length / book.lessonsCount) * 100;
  };

  const handleBookClick = (book: DisplayBook) => {
    if (book.isArtHistory) {
      navigate(`/art-history/${book.id}`);
    } else {
      navigate(`/book/${book.id}`);
    }
  };

  return (
    <div className="library-container">
      <Navigation />
      
      <div className="library-content">
        {/* Header */}
        <motion.div 
          className="library-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="library-title">Library</h1>
          <p className="library-subtitle">{filteredBooks.length} books available</p>
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="search-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="search-input-wrapper">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search books, authors, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          className="category-filter-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="filter-chips">
            <motion.button
              className={`filter-chip ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`filter-chip ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  backgroundColor: selectedCategory === category.id ? category.color : 'transparent',
                  borderColor: category.color
                }}
              >
                <span>{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Additional Filters */}
        <motion.div 
          className="additional-filters"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="filter-group">
            <Filter size={18} />
            <select
              className="filter-select"
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className="filter-group">
            <span>Sort by:</span>
            <select
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
            >
              <option value="title">Title</option>
              <option value="duration">Duration</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </motion.div>

        {/* Books Grid */}
        <motion.div 
          className="books-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <AnimatePresence mode="popLayout">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                className={`book-card ${book.isArtHistory ? 'art-history-book' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                onClick={() => handleBookClick(book)}
              >
                <div
                  className="book-cover"
                  style={{
                    background: book.coverGradient
                      ? `linear-gradient(135deg, ${book.coverGradient.join(', ')})`
                      : 'linear-gradient(135deg, #ec4899, #8b5cf6)'
                  }}
                >
                  <div className="book-cover-overlay">
                    <span className="book-category-badge">
                      {categories.find(c => c.id === book.category)?.icon}
                    </span>
                    {book.difficulty && (
                      <span className="book-difficulty-badge">
                        {book.difficulty}
                      </span>
                    )}
                  </div>
                </div>

                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">{book.author}</p>

                  <div className="book-meta">
                    <span className="book-meta-item">
                      <Clock size={14} />
                      {book.totalDuration} min
                    </span>
                    <span className="book-meta-item">
                      {book.lessonsCount} lessons
                    </span>
                  </div>

                  {book.tags && book.tags.length > 0 && (
                    <div className="book-tags">
                      {book.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="book-tag">{tag}</span>
                      ))}
                    </div>
                  )}

                  {userProgress[book.id] && (
                    <div className="book-card-progress">
                      <div className="book-card-progress-bar">
                        <motion.div
                          className="book-card-progress-fill"
                          initial={{ width: 0 }}
                          animate={{ width: `${getBookProgress(book)}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <span className="book-card-progress-text">
                        {Math.round(getBookProgress(book))}% complete
                      </span>
                    </div>
                  )}
                </div>

                <div className="book-card-footer">
                  <motion.button
                    className="book-card-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {userProgress[book.id] ? 'Continue' : 'Start'}
                    <ChevronRight size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredBooks.length === 0 && (
          <motion.div
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3>No books found</h3>
            <p>Try adjusting your filters or search query</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Library;
