import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft, Clock, PlayCircle, CheckCircle, Award, BookMarked } from 'lucide-react';
import { useStore } from '../store/useStore';
import booksDatabase, { categories } from '../data/booksData';
import './BookDetail.css';

const BookDetail: React.FC = () => {
  const navigate = useNavigate();
  const { bookId } = useParams<{ bookId: string }>();
  const userProgress = useStore((state) => state.userProgress);

  const book = booksDatabase.find(b => b.id === bookId);

  if (!book) {
    return (
      <div className="book-not-found">
        <h2>Book not found</h2>
        <button onClick={() => navigate('/library')}>Back to Library</button>
      </div>
    );
  }

  const progress = userProgress[book.id];
  const completedLessons = progress?.completedLessons || [];
  const progressPercentage = (completedLessons.length / book.lessons.length) * 100;
  const category = categories.find(c => c.id === book.category);

  const getNextLesson = () => {
    if (!progress || completedLessons.length === 0) {
      return book.lessons[0];
    }
    
    const nextIncompleteIndex = book.lessons.findIndex(
      lesson => !completedLessons.includes(lesson.id)
    );
    
    return nextIncompleteIndex !== -1 
      ? book.lessons[nextIncompleteIndex]
      : book.lessons[book.lessons.length - 1];
  };

  const nextLesson = getNextLesson();

  return (
    <div className="book-detail-container">
      {/* Header with gradient background */}
      <div 
        className="book-detail-header"
        style={{
          background: `linear-gradient(180deg, ${book.coverGradient.join(', ')})`
        }}
      >
        <motion.button
          className="back-button-detail"
          onClick={() => navigate('/library')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={20} />
          Back
        </motion.button>

        <motion.div 
          className="book-header-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="book-category-badge-detail">
            {category?.icon} {category?.name}
          </span>
          
          <h1 className="book-detail-title">{book.title}</h1>
          <p className="book-detail-author">by {book.author}</p>
          
          <div className="book-detail-meta">
            <span className="meta-badge">
              <Clock size={16} />
              {book.totalDuration} min
            </span>
            <span className="meta-badge">
              {book.lessons.length} lessons
            </span>
            <span className="meta-badge">
              {book.difficulty}
            </span>
          </div>

          {progress && (
            <div className="book-detail-progress">
              <div className="progress-bar-detail">
                <motion.div
                  className="progress-bar-fill-detail"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
              <span className="progress-text-detail">
                {completedLessons.length} of {book.lessons.length} lessons completed
              </span>
            </div>
          )}

          <motion.button
            className="start-learning-button"
            onClick={() => navigate(`/book/${book.id}/lesson/${nextLesson.id}`)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PlayCircle size={20} />
            {progress ? 'Continue Learning' : 'Start Learning'}
          </motion.button>
        </motion.div>
      </div>

      {/* Book Content */}
      <div className="book-detail-content">
        {/* Description */}
        <motion.section 
          className="book-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="section-title-detail">About This Book</h2>
          <p className="book-description-detail">{book.description}</p>
        </motion.section>

        {/* Key Themes */}
        <motion.section 
          className="book-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="section-title-detail">Key Themes</h2>
          <div className="themes-grid">
            {book.keyThemes.map((theme, index) => (
              <motion.div
                key={index}
                className="theme-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {theme}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Lessons List */}
        <motion.section 
          className="book-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="section-title-detail">
            <BookMarked size={24} />
            Lessons
          </h2>
          <div className="lessons-list">
            {book.lessons.map((lesson, index) => {
              const isCompleted = completedLessons.includes(lesson.id);
              const score = progress?.quizScores[lesson.id];
              
              return (
                <motion.div
                  key={lesson.id}
                  className={`lesson-card ${isCompleted ? 'completed' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  onClick={() => navigate(`/book/${book.id}/lesson/${lesson.id}`)}
                >
                  <div className="lesson-card-number">
                    {isCompleted ? (
                      <CheckCircle size={24} color="#10b981" />
                    ) : (
                      <span className="lesson-number">{index + 1}</span>
                    )}
                  </div>

                  <div className="lesson-card-content">
                    <h3 className="lesson-card-title">{lesson.title}</h3>
                    <div className="lesson-card-meta">
                      <span>
                        <Clock size={14} />
                        {lesson.duration} min
                      </span>
                      {lesson.quiz.length > 0 && (
                        <span>{lesson.quiz.length} quiz questions</span>
                      )}
                      {isCompleted && score !== undefined && (
                        <span className="quiz-score">
                          <Award size={14} />
                          {score.toFixed(0)}% quiz score
                        </span>
                      )}
                    </div>
                  </div>

                  <motion.div 
                    className="lesson-card-arrow"
                    whileHover={{ x: 5 }}
                  >
                    <PlayCircle size={20} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Tags */}
        <motion.section 
          className="book-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="section-title-detail">Tags</h2>
          <div className="tags-list">
            {book.tags.map((tag, index) => (
              <span key={index} className="tag-item">
                {tag}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Related Books */}
        {book.relatedBooks.length > 0 && (
          <motion.section 
            className="book-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="section-title-detail">You Might Also Like</h2>
            <div className="related-books-grid">
              {book.relatedBooks.slice(0, 3).map((relatedId, index) => {
                const relatedBook = booksDatabase.find(b => b.id === relatedId);
                if (!relatedBook) return null;

                return (
                  <motion.div
                    key={relatedBook.id}
                    className="related-book-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => navigate(`/book/${relatedBook.id}`)}
                  >
                    <div 
                      className="related-book-cover"
                      style={{
                        background: `linear-gradient(135deg, ${relatedBook.coverGradient.join(', ')})`
                      }}
                    />
                    <div className="related-book-info">
                      <h4>{relatedBook.title}</h4>
                      <p>{relatedBook.author}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default BookDetail;
