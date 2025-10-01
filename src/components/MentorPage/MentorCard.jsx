// src/components/MentorPage/MentorCard.jsx

import { motion } from 'framer-motion';
import { useState } from 'react';

const MentorCard = ({ mentor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative w-80 h-96 cursor-pointer"
      style={{ perspective: '1000px' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      // Add a scale on hover for the entire card container
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
    >
      {/* The card that flips */}
      <motion.div
        className="absolute inset-0 w-full h-full transition-transform duration-700 [transform-style:preserve-3d]"
        animate={{ rotateY: isHovered ? 180 : 0 }}
      >
        {/* FRONT OF THE CARD */}
        <div className="absolute inset-0 w-full h-full rounded-3xl shadow-2xl overflow-hidden [backface-visibility:hidden] bg-gradient-to-br from-purple-100 via-white to-green-100">
          {/* Animated background particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <div
                key={`front-sparkle-${i}`}
                className="absolute animate-sparkle"
                style={{
                  left: `${Math.random() * 90 + 5}%`,
                  top: `${Math.random() * 90 + 5}%`,
                  width: '4px',
                  height: '4px',
                  backgroundColor: i % 2 === 0 ? '#8b5cf6' : '#10b981',
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                  animationDelay: `${i * 0.7}s`
                }}
              />
            ))}
          </div>
          
          <img src={mentor.image} alt={mentor.name} className="w-full h-2/3 object-cover" />
          <div className="p-4 h-1/3 flex flex-col justify-center relative z-10">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">{mentor.name}</h3>
            <p className="text-sm text-gray-700">{mentor.role}</p>
          </div>
        </div>

        {/* BACK OF THE CARD */}
        <div className="absolute inset-0 w-full h-full rounded-3xl shadow-2xl p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-green-100 via-white to-purple-100">
          {/* Animated background particles for back */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={`back-bubble-${i}`}
                className="absolute animate-float-bubble rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  width: `${Math.random() * 10 + 6}px`,
                  height: `${Math.random() * 10 + 6}px`,
                  backgroundColor: i % 2 === 0 ? '#8b5cf6' : '#10b981',
                  animationDelay: `${i * 1.2}s`
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent mb-2">{mentor.name}</h3>
            <p className="text-gray-700 mb-4 text-sm italic">"{mentor.bio}"</p>
            <div className="flex flex-wrap gap-2">
              {mentor.expertise.map((skill, index) => (
                <span
                  key={skill}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors duration-200 ${
                    index % 2 === 0 
                      ? 'text-purple-700 bg-purple-100/80 border-purple-200/50 hover:bg-purple-200/80'
                      : 'text-green-700 bg-green-100/80 border-green-200/50 hover:bg-green-200/80'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MentorCard;