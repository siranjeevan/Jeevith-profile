// src/components/AnimatedBackground/ProjectsBackground.jsx

import React from 'react';

const ProjectsBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Gradient background with blue/tech theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-500/10 to-indigo-600/20"></div>
      
      {/* Different animated particles with blue color scheme */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`absolute opacity-60 ${
            i % 6 === 0 ? 'animate-matrix-fall rounded-full' :
            i % 6 === 1 ? 'animate-cyber-pulse rounded-full' :
            i % 6 === 2 ? 'animate-tech-spin rounded-full' :
            i % 6 === 3 ? 'animate-neon-drift rounded-full' :
            i % 6 === 4 ? 'animate-glitch-move rounded-full' : 'animate-warm-glow rounded-full'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            backgroundColor: ['#3b82f6', '#1d4ed8', '#1e40af', '#2563eb', '#60a5fa', '#3730a3'][i % 6],
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${Math.random() * 10 + 8}s`
          }}
        />
      ))}
      
      {/* Large moving elements with blue gradient combinations */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-600/30 animate-matrix-fall"></div>
      <div className="absolute top-3/4 right-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-blue-600/25 to-blue-500/20 animate-tech-spin" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/2 left-1/6 w-28 h-28 rounded-full bg-gradient-to-br from-indigo-500/30 to-blue-700/25 animate-neon-drift" style={{animationDelay: '7s'}}></div>
      
      {/* Geometric shapes with enhanced animations */}
      <div className="absolute top-1/2 left-1/2 animate-cyber-pulse" style={{animationDelay: '2s'}}>
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500/50 to-indigo-600/40 transform rotate-45"></div>
      </div>
      <div className="absolute top-1/3 left-1/3 animate-tech-spin" style={{animationDelay: '6s'}}>
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600/60 to-blue-500/50"></div>
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-neon-drift" style={{animationDelay: '9s'}}>
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400/40 to-blue-700/50"></div>
      </div>
      
      {/* Mixed animated shapes with blue color scheme */}
      <div className="absolute top-20 right-20 w-20 h-20 border-4 border-blue-500/30 animate-cyber-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-32 left-32 w-16 h-16 bg-gradient-to-r from-indigo-600/40 to-blue-600/30 animate-warm-glow" style={{animationDelay: '5s'}}></div>
      <div className="absolute top-1/2 right-10 w-14 h-14 bg-gradient-to-br from-blue-500/50 to-indigo-500/40 animate-tech-spin" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-18 h-18 rounded-full bg-gradient-to-r from-blue-700/35 to-blue-500/45 animate-glitch-move" style={{animationDelay: '8s'}}></div>
    </div>
  );
};

export default ProjectsBackground;