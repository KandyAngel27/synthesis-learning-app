import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Library, User, Sparkles } from 'lucide-react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/library', icon: Library, label: 'Library' },
    { path: '/profile', icon: User, label: 'Profile' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navigation">
      <div className="nav-header">
        <div className="nav-logo" onClick={() => navigate('/')}>
          <Sparkles size={28} />
          <span className="nav-brand">Synthesis</span>
        </div>
      </div>

      <div className="nav-items">
        {navItems.map((item) => (
          <motion.button
            key={item.path}
            className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <item.icon size={22} />
            <span className="nav-label">{item.label}</span>
            {isActive(item.path) && (
              <motion.div
                className="nav-indicator"
                layoutId="nav-indicator"
                initial={false}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
