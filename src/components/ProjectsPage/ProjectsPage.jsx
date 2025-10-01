// src/components/ProjectsPage/ProjectsPage.jsx

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsData } from './projectsData';
import ProjectCard from './ProjectCard';
import ProjectsBackground from '../AnimatedBackground/ProjectsBackground';
import Dock from '../Animations/Dock/Dock';
import TargetCursor from '../Animations/TargetCursor/TargetCursor';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';

// Animation Variants - Changed for a new feel
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();
  
  const items = [
    { icon: <VscHome size={18} color="white" />, label: 'Home', onClick: () => navigate('/') },
    { icon: <VscArchive size={18} color="white"/>, label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <VscAccount size={18} color="white" />, label: 'Profile', onClick: () => alert('Profile!') },
    { icon: <VscSettingsGear size={18} color="white" />, label: 'Settings', onClick: () => alert('Settings!') },
  ];

  return (
    <>
      <ProjectsBackground />

      <section ref={ref} id="projects" className="relative py-20 px-5 sm:px-10 lg:px-20 bg-white/60">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Page Title - Text color changed */}
          <motion.h2
            className="text-5xl sm:text-6xl font-extrabold text-center text-gray-900 mb-4"
            variants={itemVariants}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-center text-gray-700 mb-16 max-w-2xl mx-auto text-lg"
            variants={itemVariants}
          >
            A showcase of my recent work, built with modern technologies and a passion for creating intuitive user experiences.
          </motion.p>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projectsData.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      
      <Dock 
        className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50"
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      <TargetCursor />
    </>
  );
};

export default ProjectsPage;