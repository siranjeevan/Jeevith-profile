// src/components/AnimatedBackground/MentorBackground.jsx

import React from 'react';

const MentorBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient background with purple/green theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#baa794]/10 to-[#8b7355]/20"></div>
      
      {/* Different animated particles with brown color scheme */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute opacity-40 ${
            i % 6 === 0 ? 'animate-diagonal rounded-full' :
            i % 6 === 1 ? 'animate-bounce-rotate rounded-full' :
            i % 6 === 2 ? 'animate-figure8 rounded-full' :
            i % 6 === 3 ? 'animate-wave rounded-full' :
            i % 6 === 4 ? 'animate-orbit rounded-full' : 'animate-plasma-flow rounded-full'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            backgroundColor: ['#baa794', '#8b7355', '#6d5a42', '#9c8a7a', '#a69688', '#7a6b58'][i % 6],
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${Math.random() * 10 + 8}s`
          }}
        />
      ))}
      
      {/* Large moving elements with purple/green gradient combinations */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-[#baa794]/20 to-[#8b7355]/30 animate-diagonal"></div>
      <div className="absolute top-3/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-[#6d5a42]/25 to-[#baa794]/20 animate-figure8" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/2 left-1/6 w-28 h-28 rounded-full bg-gradient-to-br from-[#9c8a7a]/30 to-[#7a6b58]/25 animate-plasma-flow" style={{animationDelay: '7s'}}></div>
      
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