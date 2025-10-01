// src/components/AnimatedBackground/MentorBackground.jsx

import React from 'react';

const MentorBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient background with purple/green theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-500/10 to-green-600/20"></div>
      
      {/* Different animated particles with purple/green color scheme */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className={`absolute opacity-70 ${
            i % 5 === 0 ? 'animate-sparkle' :
            i % 5 === 1 ? 'animate-float-bubble rounded-full' :
            i % 5 === 2 ? 'animate-pulse-glow rounded-full' :
            i % 5 === 3 ? 'animate-wave-ripple rounded-full' : 'animate-shooting-star'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: i % 5 === 0 ? '8px' : `${Math.random() * 25 + 15}px`,
            height: i % 5 === 0 ? '8px' : `${Math.random() * 25 + 15}px`,
            backgroundColor: ['#8b5cf6', '#10b981', '#06d6a0', '#7c3aed', '#059669'][i % 5],
            clipPath: i % 5 === 0 ? 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' : 'none',
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${Math.random() * 6 + 4}s`
          }}
        />
      ))}
      
      {/* Large moving elements with purple/green gradient combinations */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-purple-500/40 to-green-600/50 animate-pulse-glow"></div>
      <div className="absolute top-3/4 right-1/4 w-28 h-28 rounded-full bg-gradient-to-r from-green-600/45 to-purple-500/40 animate-float-bubble" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-1/2 left-1/6 w-24 h-24 rounded-full bg-gradient-to-br from-purple-600/50 to-green-700/45 animate-wave-ripple" style={{animationDelay: '6s'}}></div>
      
      {/* Geometric shapes with enhanced animations */}
      <div className="absolute top-1/2 left-1/2 animate-cyber-pulse" style={{animationDelay: '2s'}}>
        <div className="w-10 h-10 bg-gradient-to-r from-purple-500/50 to-green-600/40 transform rotate-45"></div>
      </div>
      <div className="absolute top-1/3 left-1/3 animate-tech-spin" style={{animationDelay: '6s'}}>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-600/60 to-purple-500/50"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-neon-drift" style={{animationDelay: '9s'}}>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400/40 to-green-700/50"></div>
      </div>
      
      {/* Mixed animated shapes with purple/green color scheme */}
      <div className="absolute top-20 right-20 w-16 h-16 border-4 border-purple-500/50 animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-32 w-14 h-14 bg-gradient-to-r from-green-600/60 to-purple-600/50 animate-sparkle" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-br from-purple-500/70 to-green-500/60 animate-float-bubble" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-10 h-10 rounded-full bg-gradient-to-r from-green-700/55 to-purple-500/65 animate-wave-ripple" style={{animationDelay: '7s'}}></div>
    </div>
  );
};

export default MentorBackground;