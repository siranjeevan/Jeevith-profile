// src/components/AnimatedBackground/AnimatedBackground.jsx

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Random shapes ah generate panna function
const generateShapes = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 150 + 50, // 50px to 200px
    duration: Math.random() * 20 + 10, // 10s to 30s
  }));
};

const AnimatedBackground = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    setShapes(generateShapes(6)); // 6 shapes generate pannom
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full opacity-20"
          style={{
            backgroundColor: '#baa794', // Card color ah than use pannom, but light ah
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;