// src/components/ProjectsPage/ProjectCard.jsx

import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl shadow-xl border border-blue-200/30 cursor-pointer bg-gradient-to-br from-white via-blue-50/50 to-indigo-100/30 backdrop-blur-sm"
      
      whileHover={{
        scale: 1.03,
        y: -8,
        boxShadow: "0px 35px 60px -12px rgba(59, 130, 246, 0.3)",
        transition: { duration: 0.4, ease: "easeOut" },
      }}
    >
      {/* Attractive animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sparkle effects */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-sparkle"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              top: `${Math.random() * 90 + 5}%`,
              width: '6px',
              height: '6px',
              backgroundColor: '#60a5fa',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
        
        {/* Floating bubbles */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute animate-float-bubble rounded-full opacity-30"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              width: `${Math.random() * 12 + 8}px`,
              height: `${Math.random() * 12 + 8}px`,
              backgroundColor: ['#3b82f6', '#1d4ed8', '#60a5fa'][i % 3],
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}
        
        {/* Pulsing glow dots */}
        {[...Array(2)].map((_, i) => (
          <div
            key={`glow-${i}`}
            className="absolute animate-pulse-glow rounded-full opacity-25"
            style={{
              left: `${Math.random() * 70 + 15}%`,
              top: `${Math.random() * 70 + 15}%`,
              width: '4px',
              height: '4px',
              backgroundColor: '#1d4ed8',
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}
        
        {/* Shooting star effect */}
        <div
          className="absolute animate-shooting-star opacity-40"
          style={{
            width: '2px',
            height: '20px',
            background: 'linear-gradient(45deg, transparent, #60a5fa, transparent)',
            animationDelay: '2s'
          }}
        />
      </div>
      <motion.div className="overflow-hidden h-56 relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </motion.div>
      
      <div className="p-7">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">{project.title}</h3>
        <p className="text-gray-700 mb-5 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-blue-700 bg-blue-100/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-blue-200/50 hover:bg-blue-200/80 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all duration-200 hover:gap-3"
          >
            Live Demo 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;