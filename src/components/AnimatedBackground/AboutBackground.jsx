// src/components/AnimatedBackground/AboutBackground.jsx

import React from 'react';

const AboutBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient background with orange/pink theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-500/10 to-pink-600/20"></div>
      
      {/* Floating geometric shapes */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute opacity-60 ${
            i % 4 === 0 ? 'animate-sparkle' :
            i % 4 === 1 ? 'animate-float-bubble rounded-full' :
            i % 4 === 2 ? 'animate-pulse-glow' : 'animate-wave-ripple rounded-full'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: i % 4 === 0 ? '10px' : `${Math.random() * 30 + 20}px`,
            height: i % 4 === 0 ? '10px' : `${Math.random() * 30 + 20}px`,
            backgroundColor: ['#f97316', '#ec4899', '#f59e0b', '#ef4444', '#8b5cf6'][i % 5],
            clipPath: i % 4 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 
                     i % 4 === 2 ? 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)' : 'none',
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 8 + 5}s`
          }}
        />
      ))}
      
      {/* Large gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-orange-500/30 to-pink-600/40 animate-pulse-glow"></div>
      <div className="absolute top-3/4 right-1/4 w-36 h-36 rounded-full bg-gradient-to-r from-pink-600/35 to-orange-500/30 animate-float-bubble" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-1/6 w-32 h-32 bg-gradient-to-br from-orange-600/40 to-pink-700/35 animate-wave-ripple" style={{animationDelay: '6s'}}></div>
      
      {/* Animated lines */}
      <div className="absolute top-10 left-10 w-32 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent animate-shooting-star"></div>
      <div className="absolute bottom-20 right-20 w-24 h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent animate-shooting-star" style={{animationDelay: '4s'}}></div>
    </div>
  );
};

export default AboutBackground;