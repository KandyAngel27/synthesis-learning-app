import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ChevronLeft, Clock, BookOpen, CheckCircle, Lock, Play, Palette
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { getArtHistoryBook } from '../data/artHistoryData';
import './ArtHistoryBookDetail.css';

const ArtHistoryBookDetail: React.FC = () => {
  const navigate = useNavigate();
  const { bookId } = useParams<{ bookId: string }>();
  const userProgress = useStore((state) => state.userProgress);

  const book = bookId ? getArtHistoryBook(bookId) : null;

  if (!book) {
    return (
      <div className="art-book-not-found">
        <h2>Book not found</h2>
        <button onClick={() => navigate('/library')}>Back to Library</button>
      </div>
    );
  }

  const bookProgress = userProgress[bookId] || { completedLessons: [], totalScore: 0, notes: {} };
  const completedCount = bookProgress.completedLessons?.length || 0;
  const progressPercent = (completedCount / book.lessonList.length) * 100;

  const isLessonUnlocked = (lessonIndex: number) => {
    if (lessonIndex === 0) return true;
    const previousLesson = book.lessonList[lessonIndex - 1];
    return bookProgress.completedLessons?.includes(String(previousLesson.id)) || false;
  };

  const isLessonCompleted = (lessonId: number) => {
    return bookProgress.completedLessons?.includes(String(lessonId)) || false;
  };

  return (
    <div className="art-book-container">
      {/* Header */}
      <div className="art-book-header">
        <motion.button
          className="back-button"
          onClick={() => navigate('/library')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={20} />
          Back to Library
        </motion.button>

        <div className="book-hero">
          <div className="book-icon-large">
            <Palette size={48} />
          </div>
          <div className="book-info">
            <h1 className="book-title">{book.title}</h1>
            <p className="book-author">{book.author}</p>
            <p className="book-description">{book.description}</p>
            <div className="book-meta">
              <span className="meta-item">
                <BookOpen size={16} />
                {book.lessonList.length} lessons
              </span>
              <span className="meta-item">
                <Clock size={16} />
                {book.duration} min total
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="book-progress-section">
          <div className="progress-info">
            <span className="progress-label">Your Progress</span>
            <span className="progress-value">{progressPercent.toFixed(0)}%</span>
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <span className="progress-detail">
            {completedCount} of {book.lessonList.length} lessons completed
          </span>
        </div>
      </div>

      {/* Lessons List */}
      <div className="lessons-section">
        <h2 className="lessons-title">
          <BookOpen size={24} />
          Lessons
        </h2>

        <div className="lessons-grid">
          {book.lessonList.map((lesson, index) => {
            const unlocked = isLessonUnlocked(index);
            const completed = isLessonCompleted(lesson.id);

            return (
              <motion.div
                key={lesson.id}
                className={`lesson-card ${!unlocked ? 'locked' : ''} ${completed ? 'completed' : ''}`}
                onClick={() => unlocked && navigate(`/art-history/${bookId}/lesson/${lesson.id}`)}
                whileHover={unlocked ? { scale: 1.02, y: -4 } : {}}
                whileTap={unlocked ? { scale: 0.98 } : {}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="lesson-number">
                  {completed ? (
                    <CheckCircle size={28} className="completed-icon" />
                  ) : unlocked ? (
                    <span className="number">{index + 1}</span>
                  ) : (
                    <Lock size={20} className="lock-icon" />
                  )}
                </div>

                <div className="lesson-info">
                  <h3 className="lesson-title">{lesson.title}</h3>
                  <div className="lesson-meta">
                    <span className="meta-item">
                      <Clock size={14} />
                      {lesson.duration} min
                    </span>
                    <span className="meta-item">
                      <BookOpen size={14} />
                      {lesson.cards.length} cards
                    </span>
                  </div>
                </div>

                {unlocked && !completed && (
                  <div className="play-button">
                    <Play size={20} />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArtHistoryBookDetail;
