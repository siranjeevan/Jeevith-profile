// src/components/AnimatedBackground/AnimatedBackground.jsx

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Custom hook to get mouse position
const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

const AnimatedBackground = () => {
  const mousePosition = useMousePosition();

  // Define the orbs with their properties
  const orbs = [
    { id: 1, size: 400, color: "rgba(186, 167, 148, 0.3)", initialX: -100, initialY: -100 },
    { id: 2, size: 600, color: "rgba(186, 167, 148, 0.2)", initialX: 100, initialY: 100 },
    { id: 3, size: 300, color: "rgba(74, 44, 42, 0.2)", initialX: -50, initialY: 50 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            backgroundColor: orb.color,
          }}
          // Initial position
          initial={{
            x: orb.initialX,
            y: orb.initialY,
          }}
          // Animate on load and then continuously
          animate={{
            x: [orb.initialX, orb.initialX + 200, orb.initialX - 200, orb.initialX],
            y: [orb.initialY, orb.initialY - 300, orb.initialY + 300, orb.initialY],
          }}
          // Mouse interaction - orbs move slightly away from the cursor
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          transition={{
            x: { duration: 20 + orb.id * 5, repeat: Infinity, ease: "linear" },
            y: { duration: 25 + orb.id * 5, repeat: Infinity, ease: "linear" },
          }}
          // Make the orbs react to mouse position
          style={{
            translateX: -mousePosition.x * 0.02,
            translateY: -mousePosition.y * 0.02,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;