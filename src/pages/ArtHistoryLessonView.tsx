import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ChevronLeft, ChevronRight, Check, X, Palette,
  Clock, BookOpen, Sparkles
} from 'lucide-react';
import { useStore } from '../store/useStore';
import { getArtHistoryBook, getArtHistoryLesson } from '../data/artHistoryData';
import type { ArtHistoryCard } from '../data/artHistoryTypes';
import './ArtHistoryLessonView.css';

const ArtHistoryLessonView: React.FC = () => {
  const navigate = useNavigate();
  const { bookId, lessonId } = useParams<{ bookId: string; lessonId: string }>();
  const completeLesson = useStore((state) => state.completeLesson);
  const addNote = useStore((state) => state.addNote);
  const userProgress = useStore((state) => state.userProgress);

  const [currentCard, setCurrentCard] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [notes, setNotes] = useState('');
  const [startTime] = useState(Date.now());

  const book = bookId ? getArtHistoryBook(bookId) : null;
  const lesson = bookId && lessonId ? getArtHistoryLesson(bookId, parseInt(lessonId)) : null;

  useEffect(() => {
    if (bookId && lessonId && userProgress[bookId]?.notes[lessonId]) {
      setNotes(userProgress[bookId].notes[lessonId]);
    }
  }, [bookId, lessonId, userProgress]);

  if (!book || !lesson) {
    return (
      <div className="lesson-not-found">
        <h2>Lesson not found</h2>
        <button onClick={() => navigate('/library')}>Back to Library</button>
      </div>
    );
  }

  const cards = lesson.cards;
  const totalCards = cards.length + 1; // +1 for summary slide
  const quizCards = cards.filter(c => c.type === 'quiz');

  const handleNext = () => {
    if (currentCard < totalCards - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  const handleQuizAnswer = (cardIndex: number, answerIndex: number) => {
    setQuizAnswers({ ...quizAnswers, [cardIndex]: answerIndex });
  };

  const calculateQuizScore = () => {
    if (quizCards.length === 0) return 100;
    let correct = 0;
    cards.forEach((card, index) => {
      if (card.type === 'quiz' && card.options) {
        const selectedIndex = quizAnswers[index];
        if (selectedIndex !== undefined && card.options[selectedIndex]?.correct) {
          correct++;
        }
      }
    });
    return (correct / quizCards.length) * 100;
  };

  const handleCompleteLesson = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000 / 60);
    const quizScore = calculateQuizScore();

    if (bookId && lessonId) {
      completeLesson(bookId, lessonId, timeSpent, quizScore);
      if (notes) {
        addNote(bookId, lessonId, notes);
      }
    }

    setShowQuizResults(true);

    setTimeout(() => {
      const currentLessonIndex = book.lessonList.findIndex(l => l.id === parseInt(lessonId));
      if (currentLessonIndex < book.lessonList.length - 1) {
        const nextLesson = book.lessonList[currentLessonIndex + 1];
        navigate(`/art-history/${bookId}/lesson/${nextLesson.id}`);
      } else {
        navigate(`/art-history/${bookId}`);
      }
    }, 3000);
  };

  const renderCard = (card: ArtHistoryCard, index: number) => {
    const cardTypeIcons: { [key: string]: React.ReactNode } = {
      intro: <Sparkles size={28} className="card-type-icon intro" />,
      concept: <BookOpen size={28} className="card-type-icon concept" />,
      example: <Palette size={28} className="card-type-icon example" />,
      quiz: <Check size={28} className="card-type-icon quiz" />
    };

    if (card.type === 'quiz') {
      const selectedAnswer = quizAnswers[index];
      const isAnswered = selectedAnswer !== undefined;
      const isCorrect = isAnswered && card.options && card.options[selectedAnswer]?.correct;

      return (
        <motion.div
          className="art-card quiz-card"
          key={`card-${index}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <div className="card-header">
            {cardTypeIcons[card.type]}
            <span className="card-type-label">Knowledge Check</span>
          </div>

          <h2 className="quiz-question">{card.question}</h2>

          <div className="quiz-options">
            {card.options?.map((option, optIdx) => (
              <motion.button
                key={optIdx}
                className={`quiz-option ${
                  isAnswered
                    ? option.correct
                      ? 'correct'
                      : optIdx === selectedAnswer
                      ? 'incorrect'
                      : ''
                    : selectedAnswer === optIdx
                    ? 'selected'
                    : ''
                }`}
                onClick={() => !isAnswered && handleQuizAnswer(index, optIdx)}
                disabled={isAnswered}
                whileHover={!isAnswered ? { scale: 1.02 } : {}}
                whileTap={!isAnswered ? { scale: 0.98 } : {}}
              >
                <span className="option-letter">{String.fromCharCode(65 + optIdx)}</span>
                <span className="option-text">{option.text}</span>
                {isAnswered && option.correct && <Check size={20} />}
                {isAnswered && optIdx === selectedAnswer && !option.correct && <X size={20} />}
              </motion.button>
            ))}
          </div>

          {isAnswered && (
            <motion.div
              className={`quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h4>{isCorrect ? 'Correct!' : 'Not quite'}</h4>
              <p>{card.explanation}</p>
            </motion.div>
          )}
        </motion.div>
      );
    }

    // Content cards (intro, concept, example)
    return (
      <motion.div
        className={`art-card content-card ${card.type}-card`}
        key={`card-${index}`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
      >
        <div className="card-header">
          {cardTypeIcons[card.type]}
          <span className="card-type-label">
            {card.type === 'intro' ? 'Introduction' : card.type === 'concept' ? 'Key Concept' : 'Case Study'}
          </span>
        </div>

        <h2 className="card-title">{card.title}</h2>

        <div className="card-body">
          {card.visual?.svg && (
            <div
              className="svg-visual"
              dangerouslySetInnerHTML={{ __html: card.visual.svg }}
            />
          )}

          <div className="card-content">
            {card.content?.split('\n\n').map((paragraph, pIdx) => (
              <p key={pIdx} className="content-paragraph">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderSlide = () => {
    // Card slides
    if (currentCard < cards.length) {
      return renderCard(cards[currentCard], currentCard);
    }

    // Summary slide
    return (
      <motion.div
        className="art-card summary-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <div className="summary-header">
          <Check size={64} className="summary-icon" />
          <h2>Lesson Complete!</h2>
        </div>

        <div className="summary-stats">
          <div className="summary-stat">
            <h3>{calculateQuizScore().toFixed(0)}%</h3>
            <p>Quiz Score</p>
          </div>
          <div className="summary-stat">
            <h3>{cards.length}</h3>
            <p>Cards Studied</p>
          </div>
          <div className="summary-stat">
            <h3>{quizCards.length}</h3>
            <p>Questions</p>
          </div>
        </div>

        <div className="notes-section">
          <h3>
            <BookOpen size={20} />
            Your Notes
          </h3>
          <textarea
            className="notes-textarea"
            placeholder="Write your thoughts, insights, or questions about this lesson..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
          />
        </div>

        {!showQuizResults && (
          <motion.button
            className="complete-lesson-button"
            onClick={handleCompleteLesson}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Complete Lesson
          </motion.button>
        )}

        {showQuizResults && (
          <motion.div
            className="completion-message"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p>Great job! Moving to the next lesson...</p>
          </motion.div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="art-lesson-container">
      {/* Navigation Header */}
      <div className="art-lesson-header">
        <motion.button
          className="back-button"
          onClick={() => navigate(`/art-history/${bookId}`)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={20} />
          Back to Book
        </motion.button>

        <div className="lesson-info">
          <Palette size={20} className="lesson-icon" />
          <span className="lesson-title-small">{lesson.title}</span>
          <span className="lesson-meta">
            <Clock size={14} />
            {lesson.duration} min
          </span>
        </div>

        <div className="lesson-progress-bar">
          <motion.div
            className="lesson-progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${((currentCard + 1) / totalCards) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="art-lesson-content">
        <AnimatePresence mode="wait">
          {renderSlide()}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="art-lesson-controls">
        <motion.button
          className="nav-button"
          onClick={handlePrevious}
          disabled={currentCard === 0}
          whileHover={currentCard > 0 ? { scale: 1.1 } : {}}
          whileTap={currentCard > 0 ? { scale: 0.9 } : {}}
        >
          <ChevronLeft size={24} />
          Previous
        </motion.button>

        <span className="card-indicator">
          {currentCard + 1} / {totalCards}
        </span>

        <motion.button
          className="nav-button"
          onClick={handleNext}
          disabled={currentCard === totalCards - 1}
          whileHover={currentCard < totalCards - 1 ? { scale: 1.1 } : {}}
          whileTap={currentCard < totalCards - 1 ? { scale: 0.9 } : {}}
        >
          Next
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default ArtHistoryLessonView;
