import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const roles = [
    'Full Stack Developer',
    'AI Engineer',
    'Cloud Architect',
    'Problem Solver',
    'Tech Innovator'
  ];

  return (
    <section id="hero" className="hero-section">
      <div className="particles-bg"></div>
      
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="hero-profile-img"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
        >
          <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Jayanth Gowda" />
        </motion.div>

        <motion.div
          className="hero-greeting"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="wave">👋</span>
          <span>Hello, I'm</span>
        </motion.div>

        <motion.h1 
          className="hero-name"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          JAYANTH GOWDA
          <span className="hero-lastname">RAMANNA</span>
        </motion.h1>

        <div className="hero-roles">
          <ReactTyped
            strings={roles}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="typed-text"
          />
        </div>

        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Experienced Full Stack Developer & AI engineer with a strong track record in startups and enterprise projects.
          Skilled in building scalable web apps and deploying AI solutions using LLMs, ML models, and cloud infrastructure.
        </motion.p>

        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3.7</span>
            <span className="stat-label">GPA</span>
          </div>
        </motion.div>

        <motion.div 
          className="hero-actions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.a 
            href="#contact" 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            Get In Touch
          </motion.a>
          <motion.a 
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            className="btn btn-secondary"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={18} />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div 
          className="hero-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.a 
            href="https://www.linkedin.com/in/jayanthgowdar/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="social-link"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a 
            href="https://github.com/Jayanthgowdar"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="social-link"
          >
            <Github size={24} />
          </motion.a>
          <motion.a 
            href="mailto:jayanthgowda.ramanna@wmich.edu"
            whileHover={{ y: -5 }}
            className="social-link"
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={30} />
        </motion.div>
      </motion.div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero;