import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import './Experience.css';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  current?: boolean;
  highlights: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences: ExperienceItem[] = [
    {
      title: 'Enterprise AI Trainee',
      company: 'Fundae Software Inc.',
      location: 'Remote (USA)',
      date: 'Jul 2025 - Present',
      current: true,
      highlights: [
        'Gaining hands-on experience in NLP, RLHF, Digital twins, and AI agent orchestration',
        'Building and deploying AI workflows using Azure OpenAI, AKS, Logic Apps',
        'Built RAG pipelines combining LLMs with document search',
        'Applied knowledge graphs and entity linking techniques using Neo4j'
      ],
      technologies: ['Azure OpenAI', 'Neo4j', 'NLP', 'RAG', 'RLHF']
    },
    {
      title: 'AI-Native Developer Intern',
      company: 'Chinchilla AI Academy',
      location: 'Remote (USA)',
      date: 'Jul 2025 - Present',
      current: true,
      highlights: [
        'Delivered 4+ production-ready full-stack apps using React and TypeScript',
        'Integrated GraphQL APIs, Cognito authentication, and Lambda functions',
        'Applied AI-first development tools like Claude CLI and ChatGPT'
      ],
      technologies: ['React', 'TypeScript', 'AWS Amplify', 'GraphQL', 'Lambda']
    },
    {
      title: 'Software Engineer',
      company: 'G2i Inc.',
      location: 'Remote (USA) | Contract',
      date: 'Jul 2025 - Present',
      current: true,
      highlights: [
        'Built scalable React and JavaScript components aligned with DevOps',
        'Designed prompts and test rubrics to enhance AI-generated code quality',
        'Streamlined debugging and code reviews, improving frontend performance'
      ],
      technologies: ['React', 'JavaScript', 'DevOps', 'CI/CD']
    },
    {
      title: 'AI and Machine Learning Intern',
      company: 'Green Expectations LLC',
      location: 'USA',
      date: 'Oct 2023 - Mar 2024',
      highlights: [
        'Built AI-driven chatbot handling 100+ user interactions/month',
        'Enhanced NLP model accuracy by 40% to streamline query resolution',
        'Optimized backend ML workflows for 99.9% uptime'
      ],
      technologies: ['Python', 'NLP', 'Machine Learning', 'DevOps']
    },
    {
      title: 'Software Engineer',
      company: 'Nano Robotics Embed Technologies',
      location: 'India',
      date: 'Jun 2022 - Aug 2023',
      highlights: [
        'Engineered embedded software with Python/C for IoT devices',
        'Improved system responsiveness by 25% through cross-functional collaboration',
        'Reduced runtime errors by 30% by streamlining deployment pipelines'
      ],
      technologies: ['Python', 'C', 'IoT', 'Embedded Systems']
    }
  ];

  return (
    <section id="experience" className="experience-section">
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
          <Briefcase className="section-icon" />
          Professional Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2 }}
            >
              <div className="timeline-marker">
                <Briefcase size={16} />
              </div>
              
              <motion.div 
                className="timeline-content"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {exp.current && <span className="current-badge">Current</span>}
                
                <h3 className="exp-title">{exp.title}</h3>
                <div className="exp-company">{exp.company}</div>
                
                <div className="exp-meta">
                  <span className="exp-date">
                    <Calendar size={14} />
                    {exp.date}
                  </span>
                  <span className="exp-location">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul className="exp-highlights">
                  {exp.highlights.map((highlight, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                    >
                      <ChevronRight size={14} />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="exp-tech">
                  {exp.technologies.map((tech, idx) => (
                    <motion.span 
                      key={idx}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + idx * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;