import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useStore } from './store/useStore';
import Home from './pages/Home';
import Library from './pages/Library';
import BookDetail from './pages/BookDetail';
import LessonView from './pages/LessonView';
import Profile from './pages/Profile';
import ArtHistoryBookDetail from './pages/ArtHistoryBookDetail';
import ArtHistoryLessonView from './pages/ArtHistoryLessonView';
import './App.css';

// Component to handle route persistence
const RouteTracker: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Save current route to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('synthesis-last-route', location.pathname);
  }, [location.pathname]);

  // Restore last route on initial load
  useEffect(() => {
    const savedRoute = localStorage.getItem('synthesis-last-route');
    if (savedRoute && savedRoute !== '/' && location.pathname === '/') {
      navigate(savedRoute, { replace: true });
    }
  }, []); // Only run once on mount

  return null;
};

function AppContent() {
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
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <RouteTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/library/:category" element={<Library />} />
        <Route path="/book/:bookId" element={<BookDetail />} />
        <Route path="/book/:bookId/lesson/:lessonId" element={<LessonView />} />
        <Route path="/art-history/:bookId" element={<ArtHistoryBookDetail />} />
        <Route path="/art-history/:bookId/lesson/:lessonId" element={<ArtHistoryLessonView />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
