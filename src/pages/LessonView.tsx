import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ChevronLeft, ChevronRight, Check, X, BookOpen, 
  Clock, Lightbulb, MessageSquare, Activity 
} from 'lucide-react';
import { useStore } from '../store/useStore';
import booksDatabase from '../data/booksData';
import './LessonView.css';

const LessonView: React.FC = () => {
  const navigate = useNavigate();
  const { bookId, lessonId } = useParams<{ bookId: string; lessonId: string }>();
  const completeLesson = useStore((state) => state.completeLesson);
  const addNote = useStore((state) => state.addNote);
  const userProgress = useStore((state) => state.userProgress);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [notes, setNotes] = useState('');
  const [interactiveResponses, setInteractiveResponses] = useState<{ [key: number]: string }>({});
  const [startTime] = useState(Date.now());
  const [showKeyTakeaways, setShowKeyTakeaways] = useState(false);

  const book = booksDatabase.find(b => b.id === bookId);
  const lesson = book?.lessons.find(l => l.id === lessonId);

  useEffect(() => {
    // Load saved note if exists
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

  const totalSlides = lesson.content.length + lesson.quiz.length + lesson.interactive.length + 2; // +2 for intro and summary

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleQuizAnswer = (quizIndex: number, answerIndex: number) => {
    setQuizAnswers({ ...quizAnswers, [quizIndex]: answerIndex });
  };

  const calculateQuizScore = () => {
    let correct = 0;
    lesson.quiz.forEach((quiz, index) => {
      if (quizAnswers[index] === quiz.correctAnswer) {
        correct++;
      }
    });
    return (correct / lesson.quiz.length) * 100;
  };

  const handleCompleteLesson = () => {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000 / 60); // in minutes
    const quizScore = calculateQuizScore();
    
    if (bookId && lessonId) {
      completeLesson(bookId, lessonId, timeSpent, quizScore);
      if (notes) {
        addNote(bookId, lessonId, notes);
      }
    }

    setShowQuizResults(true);
    
    // Navigate to next lesson or book detail after 3 seconds
    setTimeout(() => {
      const currentLessonIndex = book.lessons.findIndex(l => l.id === lessonId);
      if (currentLessonIndex < book.lessons.length - 1) {
        const nextLesson = book.lessons[currentLessonIndex + 1];
        navigate(`/book/${bookId}/lesson/${nextLesson.id}`);
      } else {
        navigate(`/book/${bookId}`);
      }
    }, 3000);
  };

  const renderSlide = () => {
    // Intro slide
    if (currentSlide === 0) {
      return (
        <motion.div
          className="slide intro-slide"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <BookOpen size={64} className="intro-icon" />
          <h1 className="lesson-title">{lesson.title}</h1>
          <div className="lesson-meta-info">
            <span className="meta-item">
              <Clock size={18} />
              {lesson.duration} minutes
            </span>
            <span className="meta-item">
              {lesson.content.length} content slides
            </span>
            <span className="meta-item">
              {lesson.quiz.length} quiz questions
            </span>
          </div>
          <p className="lesson-intro-text">Let's explore the key concepts together</p>
        </motion.div>
      );
    }

    // Content slides
    const contentSlideIndex = currentSlide - 1;
    if (contentSlideIndex < lesson.content.length) {
      return (
        <motion.div
          className="slide content-slide"
          key={`content-${contentSlideIndex}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <div className="slide-number">
            {currentSlide} / {totalSlides - 1}
          </div>
          <div className="content-text">
            {lesson.content[contentSlideIndex]}
          </div>
          
          {contentSlideIndex === lesson.content.length - 1 && (
            <motion.button
              className="show-takeaways-button"
              onClick={() => setShowKeyTakeaways(!showKeyTakeaways)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Lightbulb size={20} />
              {showKeyTakeaways ? 'Hide' : 'Show'} Key Takeaways
            </motion.button>
          )}

          <AnimatePresence>
            {showKeyTakeaways && contentSlideIndex === lesson.content.length - 1 && (
              <motion.div
                className="key-takeaways-panel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <h3>✨ Key Takeaways</h3>
                <ul>
                  {lesson.keyTakeaways.map((takeaway, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {takeaway}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    }

    // Interactive slides
    const interactiveSlideIndex = contentSlideIndex - lesson.content.length;
    if (interactiveSlideIndex >= 0 && interactiveSlideIndex < lesson.interactive.length) {
      const interactive = lesson.interactive[interactiveSlideIndex];
      
      return (
        <motion.div
          className="slide interactive-slide"
          key={`interactive-${interactiveSlideIndex}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <div className="interactive-header">
            <Activity size={32} />
            <h2>Time to Reflect</h2>
          </div>
          
          <p className="interactive-prompt">{interactive.prompt}</p>
          
          {interactive.type === 'reflection' || interactive.type === 'exercise' || interactive.type === 'journal' ? (
            <textarea
              className="interactive-textarea"
              placeholder={interactive.placeholder}
              value={interactiveResponses[interactiveSlideIndex] || ''}
              onChange={(e) => setInteractiveResponses({
                ...interactiveResponses,
                [interactiveSlideIndex]: e.target.value
              })}
              rows={6}
            />
          ) : interactive.type === 'calculator' ? (
            <div className="calculator-interactive">
              <input
                type="text"
                className="interactive-input"
                placeholder={interactive.placeholder}
                value={interactiveResponses[interactiveSlideIndex] || ''}
                onChange={(e) => setInteractiveResponses({
                  ...interactiveResponses,
                  [interactiveSlideIndex]: e.target.value
                })}
              />
            </div>
          ) : null}

          {interactive.options && (
            <div className="interactive-options">
              {interactive.options.map((option, idx) => (
                <div key={idx} className="interactive-option">
                  {option}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      );
    }

    // Quiz slides
    const quizSlideIndex = interactiveSlideIndex - lesson.interactive.length;
    if (quizSlideIndex >= 0 && quizSlideIndex < lesson.quiz.length) {
      const quiz = lesson.quiz[quizSlideIndex];
      const selectedAnswer = quizAnswers[quizSlideIndex];
      const isAnswered = selectedAnswer !== undefined;
      const isCorrect = selectedAnswer === quiz.correctAnswer;

      return (
        <motion.div
          className="slide quiz-slide"
          key={`quiz-${quizSlideIndex}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <div className="quiz-header">
            <h3>Question {quizSlideIndex + 1} of {lesson.quiz.length}</h3>
          </div>

          <p className="quiz-question">{quiz.question}</p>

          <div className="quiz-options">
            {quiz.options.map((option, index) => (
              <motion.button
                key={index}
                className={`quiz-option ${
                  isAnswered
                    ? index === quiz.correctAnswer
                      ? 'correct'
                      : index === selectedAnswer
                      ? 'incorrect'
                      : ''
                    : selectedAnswer === index
                    ? 'selected'
                    : ''
                }`}
                onClick={() => !isAnswered && handleQuizAnswer(quizSlideIndex, index)}
                disabled={isAnswered}
                whileHover={!isAnswered ? { scale: 1.02 } : {}}
                whileTap={!isAnswered ? { scale: 0.98 } : {}}
              >
                <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
                {isAnswered && index === quiz.correctAnswer && <Check size={20} />}
                {isAnswered && index === selectedAnswer && index !== quiz.correctAnswer && <X size={20} />}
              </motion.button>
            ))}
          </div>

          {isAnswered && (
            <motion.div
              className={`quiz-explanation ${isCorrect ? 'correct' : 'incorrect'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h4>{isCorrect ? '✅ Correct!' : '❌ Not quite'}</h4>
              <p>{quiz.explanation}</p>
            </motion.div>
          )}
        </motion.div>
      );
    }

    // Summary slide
    return (
      <motion.div
        className="slide summary-slide"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        <div className="summary-header">
          <Check size={64} className="summary-icon" />
          <h2>Lesson Complete! 🎉</h2>
        </div>

        <div className="summary-stats">
          <div className="summary-stat">
            <h3>{calculateQuizScore().toFixed(0)}%</h3>
            <p>Quiz Score</p>
          </div>
          <div className="summary-stat">
            <h3>{lesson.duration}</h3>
            <p>Minutes</p>
          </div>
        </div>

        <div className="practical-action-box">
          <h3>🎯 Take Action</h3>
          <p>{lesson.practicalAction}</p>
        </div>

        <div className="notes-section">
          <h3>
            <MessageSquare size={20} />
            Your Notes
          </h3>
          <textarea
            className="notes-textarea"
            placeholder="Write your thoughts, insights, or action items..."
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
    <div className="lesson-view-container">
      {/* Navigation Header */}
      <div className="lesson-nav-header">
        <motion.button
          className="back-button"
          onClick={() => navigate(`/book/${bookId}`)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft size={20} />
          Back to Book
        </motion.button>

        <div className="lesson-progress-bar">
          <motion.div
            className="lesson-progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${(currentSlide / (totalSlides - 1)) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="lesson-content-area">
        <AnimatePresence mode="wait">
          {renderSlide()}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="lesson-controls">
        <motion.button
          className="nav-button"
          onClick={handlePrevious}
          disabled={currentSlide === 0}
          whileHover={currentSlide > 0 ? { scale: 1.1 } : {}}
          whileTap={currentSlide > 0 ? { scale: 0.9 } : {}}
        >
          <ChevronLeft size={24} />
          Previous
        </motion.button>

        <span className="slide-indicator">
          {currentSlide + 1} / {totalSlides}
        </span>

        <motion.button
          className="nav-button"
          onClick={handleNext}
          disabled={currentSlide === totalSlides - 1}
          whileHover={currentSlide < totalSlides - 1 ? { scale: 1.1 } : {}}
          whileTap={currentSlide < totalSlides - 1 ? { scale: 0.9 } : {}}
        >
          Next
          <ChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  );
};

export default LessonView;
