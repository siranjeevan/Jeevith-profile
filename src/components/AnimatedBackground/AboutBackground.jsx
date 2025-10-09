// src/components/AnimatedBackground/AboutBackground.jsx

import React from 'react';

const AboutBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient background with orange/pink theme */}
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
      
      {/* Large gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-[#baa794]/20 to-[#8b7355]/30 animate-diagonal"></div>
      <div className="absolute top-3/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-[#6d5a42]/25 to-[#baa794]/20 animate-figure8" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/2 left-1/6 w-28 h-28 rounded-full bg-gradient-to-br from-[#9c8a7a]/30 to-[#7a6b58]/25 animate-plasma-flow" style={{animationDelay: '7s'}}></div>
      
      {/* Geometric shapes with enhanced animations */}
      <div className="absolute top-1/2 left-1/2 animate-cyber-pulse" style={{animationDelay: '2s'}}>
        <div className="w-10 h-10 bg-gradient-to-r from-[#baa794]/50 to-[#8b7355]/40 transform rotate-45"></div>
      </div>
      <div className="absolute top-1/3 left-1/3 animate-tech-spin" style={{animationDelay: '6s'}}>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#6d5a42]/60 to-[#baa794]/50"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-neon-drift" style={{animationDelay: '9s'}}>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#a69688]/40 to-[#7a6b58]/50"></div>
      </div>
      
      {/* Mixed animated shapes with brown color scheme */}
      <div className="absolute top-20 right-20 w-20 h-20 border-4 border-[#baa794]/30 animate-diagonal" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-32 w-16 h-16 bg-gradient-to-r from-[#8b7355]/40 to-[#6d5a42]/30 animate-bounce-rotate" style={{animationDelay: '5s'}}></div>
      <div className="absolute top-1/2 right-10 w-14 h-14 bg-gradient-to-br from-[#baa794]/50 to-[#9c8a7a]/40 animate-glitch-move" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-18 h-18 rounded-full bg-gradient-to-r from-[#7a6b58]/35 to-[#baa794]/45 animate-matrix-fall" style={{animationDelay: '8s'}}></div>
    </div>
  );
};

export default AboutBackground;