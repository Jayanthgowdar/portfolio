import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FolderOpen, Github, ExternalLink, Code2, Brain, Cloud, Database, Layers, Star } from 'lucide-react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  github?: string;
  live?: string;
  category: string;
  featured: boolean;
  highlights: string[];
  icon: React.ElementType;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Emotional Support Chatbot',
      description: 'AI-powered chatbot providing empathetic conversations with speech synthesis',
      longDescription: 'Developed a real-time chatbot using GPT-3.5 and NLP to provide empathetic conversation with speech synthesis. Implemented full-stack architecture enabling scalable interactions.',
      technologies: ['Python', 'GPT-3.5', 'NLP', 'Flask', 'React', 'Speech API'],
      github: 'https://github.com/Jayanthgowdar/emotional-chatbot',
      category: 'AI/ML',
      featured: true,
      highlights: [
        'Reduced response latency by 20%',
        'Improved text interpretation accuracy by 15%',
        'Implemented POS tagging, regex, and n-gram modeling'
      ],
      icon: Brain
    },
    {
      id: 2,
      title: 'Enterprise RAG Pipeline',
      description: 'Document search system combining LLMs with knowledge graphs',
      longDescription: 'Built RAG pipelines combining LLMs with document search to enhance enterprise NLP systems. Applied knowledge graphs and entity linking techniques using Neo4j.',
      technologies: ['Python', 'Azure OpenAI', 'Neo4j', 'FastAPI', 'Docker'],
      category: 'AI/ML',
      featured: true,
      highlights: [
        'Enhanced search accuracy by 40%',
        'Processed 10,000+ documents',
        'Sub-second query response time'
      ],
      icon: Database
    },
    {
      id: 3,
      title: 'Real Estate AI Assistant',
      description: 'Intelligent chatbot for property recommendations',
      longDescription: 'Built an AI-driven chatbot using Python and NLP for real estate recommendations, handling 100+ user interactions per month.',
      technologies: ['Python', 'NLP', 'Machine Learning', 'MongoDB', 'React'],
      category: 'AI/ML',
      featured: false,
      highlights: [
        'Enhanced NLP model accuracy by 40%',
        'Achieved 99.9% uptime',
        'Handled 100+ interactions/month'
      ],
      icon: Brain
    },
    {
      id: 4,
      title: 'Cloud-Native E-Commerce Platform',
      description: 'Scalable e-commerce solution with microservices architecture',
      longDescription: 'Delivered production-ready full-stack application using React, TypeScript, and AWS Amplify Gen 2. Integrated GraphQL APIs, Cognito authentication, and Lambda functions.',
      technologies: ['React', 'TypeScript', 'AWS Amplify', 'GraphQL', 'Lambda', 'DynamoDB'],
      category: 'Full Stack',
      featured: true,
      highlights: [
        'Serverless architecture for infinite scaling',
        'Integrated payment processing',
        'Real-time inventory management'
      ],
      icon: Cloud
    },
    {
      id: 5,
      title: 'IoT Device Management System',
      description: 'Embedded software for IoT device monitoring and control',
      longDescription: 'Engineered embedded software with Python/C for IoT devices, enhancing system integration and reliability.',
      technologies: ['Python', 'C', 'MQTT', 'Docker', 'PostgreSQL'],
      category: 'Systems',
      featured: false,
      highlights: [
        'Improved system responsiveness by 25%',
        'Reduced runtime errors by 30%',
        'Managed 50+ IoT devices'
      ],
      icon: Layers
    },
    {
      id: 6,
      title: 'AI Code Review Assistant',
      description: 'Automated code review tool using LLMs',
      longDescription: 'Designed prompts and test rubrics to enhance AI-generated code quality and validation. Streamlined debugging and code reviews.',
      technologies: ['Python', 'LLMs', 'AST', 'GitHub Actions', 'React'],
      category: 'AI/ML',
      featured: false,
      highlights: [
        'Automated 80% of code reviews',
        'Reduced review time by 60%',
        'Integrated with CI/CD pipeline'
      ],
      icon: Code2
    }
  ];

  const categories = ['All', 'AI/ML', 'Full Stack', 'Systems'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
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
          <FolderOpen className="section-icon" />
          Featured Projects
        </motion.h2>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => setSelectedProject(project)}
              >
                {project.featured && (
                  <div className="featured-badge">
                    <Star size={14} />
                    Featured
                  </div>
                )}

                <div className="project-icon">
                  <project.icon size={30} />
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-badge more">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="project-links">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={18} />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>

                <div className="modal-icon">
                  <selectedProject.icon size={40} />
                </div>

                <h3>{selectedProject.title}</h3>
                <p className="modal-description">{selectedProject.longDescription}</p>

                <div className="modal-highlights">
                  <h4>Key Achievements</h4>
                  <ul>
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-tech">
                  <h4>Technologies Used</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-links">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;