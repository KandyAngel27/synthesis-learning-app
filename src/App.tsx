import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStore } from './store/useStore';
import Home from './pages/Home';
import Library from './pages/Library';
import BookDetail from './pages/BookDetail';
import LessonView from './pages/LessonView';
import Profile from './pages/Profile';
import './App.css';

function App() {
  const darkMode = useStore((state) => state.darkMode);

  useEffect(() => {
    // Apply dark mode class to body
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/library/:category" element={<Library />} />
          <Route path="/book/:bookId" element={<BookDetail />} />
          <Route path="/book/:bookId/lesson/:lessonId" element={<LessonView />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
