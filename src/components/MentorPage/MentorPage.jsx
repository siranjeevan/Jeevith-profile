// src/components/MentorPage/MentorPage.jsx

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { mentorsData } from './mentorsData';
import MentorCard from './MentorCard';
import MentorBackground from '../AnimatedBackground/MentorBackground';
import TargetCursor from '../Animations/TargetCursor/TargetCursor'; 

// Animation for the entire section to slide up
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Animation for the title - words fly in
const titleVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each word
    },
  },
};

const wordVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Animation for cards flying in from sides
const cardVariantsFromLeft = {
  hidden: { x: -200, opacity: 0, scale: 0.8 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardVariantsFromRight = {
  hidden: { x: 200, opacity: 0, scale: 0.8 },
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const MentorPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const title = "My Guiding Lights";
  const titleWords = title.split(" ");

  return (
    <>
      <MentorBackground />

      <motion.section
        ref={ref}
        id="mentors"
        className="relative py-20 px-5 sm:px-10 lg:px-20 bg-white/60 min-h-screen flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto">
          {/* Animated Title - Word by Word */}
          <motion.h2
            className="text-5xl sm:text-7xl font-extrabold text-center text-gray-900 mb-6"
            variants={titleVariants}
          >
            {titleWords.map((word, index) => (
              <motion.span key={index} className="inline-block mr-2" variants={wordVariants}>
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-center text-gray-700 mb-20 max-w-3xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            I'm grateful for the guidance and wisdom shared by these amazing mentors. Their support has been instrumental in my journey.
          </motion.p>
        </div>

        {/* Mentor Cards with Fly-in Animation */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {mentorsData.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              // Alternate animation from left and right
              variants={index % 2 === 0 ? cardVariantsFromLeft : cardVariantsFromRight}
            >
              <MentorCard mentor={mentor} />
            </motion.div>
          ))}
        </div>
      </motion.section>
      <TargetCursor />
    </>
  );
};

export default MentorPage;