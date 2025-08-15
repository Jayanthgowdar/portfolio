import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Cloud, Wrench, Brain, Layers } from 'lucide-react';
import './Skills.css';

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  skills: { name: string; level: number; color: string }[];
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories: SkillCategory[] = [
    {
      name: 'Languages',
      icon: Code2,
      skills: [
        { name: 'Python', level: 95, color: '#3776AB' },
        { name: 'JavaScript', level: 90, color: '#F7DF1E' },
        { name: 'TypeScript', level: 85, color: '#3178C6' },
        { name: 'Java', level: 85, color: '#007396' },
        { name: 'C/C++', level: 80, color: '#00599C' },
        { name: 'C#', level: 75, color: '#239120' },
        { name: 'HTML/CSS', level: 90, color: '#E34C26' },
        { name: 'SQL', level: 85, color: '#4479A1' }
      ]
    },
    {
      name: 'Frameworks',
      icon: Layers,
      skills: [
        { name: 'React.js', level: 90, color: '#61DAFB' },
        { name: 'Node.js', level: 85, color: '#339933' },
        { name: 'Flask', level: 80, color: '#000000' },
        { name: 'FastAPI', level: 85, color: '#009688' },
        { name: 'ASP.NET', level: 75, color: '#512BD4' },
        { name: 'TensorFlow', level: 80, color: '#FF6F00' },
        { name: 'PyTorch', level: 75, color: '#EE4C2C' },
        { name: 'OpenCV', level: 70, color: '#5C3EE8' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 90, color: '#FF9900' },
        { name: 'Azure', level: 85, color: '#0078D4' },
        { name: 'Google Cloud', level: 75, color: '#4285F4' },
        { name: 'Docker', level: 85, color: '#2496ED' },
        { name: 'Kubernetes', level: 75, color: '#326CE5' },
        { name: 'CI/CD', level: 80, color: '#2088E8' },
        { name: 'Terraform', level: 70, color: '#7B42BC' },
        { name: 'GitHub Actions', level: 85, color: '#2088E8' }
      ]
    },
    {
      name: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 85, color: '#4479A1' },
        { name: 'PostgreSQL', level: 80, color: '#336791' },
        { name: 'MongoDB', level: 85, color: '#47A248' },
        { name: 'Neo4j', level: 75, color: '#008CC1' },
        { name: 'Redis', level: 70, color: '#DC382D' },
        { name: 'DynamoDB', level: 75, color: '#4053D6' }
      ]
    },
    {
      name: 'AI & ML',
      icon: Brain,
      skills: [
        { name: 'NLP', level: 85, color: '#5E72E4' },
        { name: 'LLMs', level: 90, color: '#10B981' },
        { name: 'RAG Systems', level: 85, color: '#8B5CF6' },
        { name: 'Computer Vision', level: 75, color: '#EC4899' },
        { name: 'RLHF', level: 70, color: '#F59E0B' },
        { name: 'MLOps', level: 75, color: '#3B82F6' }
      ]
    },
    {
      name: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 90, color: '#F05032' },
        { name: 'JIRA', level: 85, color: '#0052CC' },
        { name: 'VS Code', level: 95, color: '#007ACC' },
        { name: 'Jupyter', level: 85, color: '#F37626' },
        { name: 'Postman', level: 80, color: '#FF6C37' },
        { name: 'Android Studio', level: 70, color: '#3DDC84' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.div 
        ref={ref}
        className="container"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Wrench className="section-icon" />
          Technical Skills
        </motion.h2>

        <div className="skills-container">
          <div className="skill-categories">
            {skillCategories.map((category, index) => (
              <motion.button
                key={index}
                className={`category-btn ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon size={20} />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>

          <motion.div 
            className="skills-grid"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="summary-card">
            <h3>15+</h3>
            <p>Technologies</p>
          </div>
          <div className="summary-card">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
          <div className="summary-card">
            <h3>20+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="summary-card">
            <h3>5+</h3>
            <p>Cloud Platforms</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;