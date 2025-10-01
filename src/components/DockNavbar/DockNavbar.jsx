import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './DockNavbar.css';

const DockNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      path: '/',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>,
      label: 'Home'
    },
    {
      path: '/About',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>,
      label: 'About'
    },
    {
      path: '/projects',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-2.5l-1.1-1.1c-.4-.4-.9-.6-1.4-.6H9c-.5 0-1 .2-1.4.6L6.5 6H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/></svg>,
      label: 'Projects'
    },
    {
      path: '/Mentor',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>,
      label: 'Mentor'
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dock-navbar">
      <div className="dock-container">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <div
              key={item.path}
              className={`dock-item ${isActive ? 'active' : ''}`}
              onClick={() => handleNavigation(item.path)}
              title={item.label}
            >
              <span className={`dock-icon ${isActive ? 'active' : ''}`}>
                {item.icon}
              </span>
              <span className="dock-label">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DockNavbar;