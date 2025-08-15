import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import './Education.css';

interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  date: string;
  gpa?: string;
  achievements?: string[];
  coursework?: string[];
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const educationData: EducationItem[] = [
    {
      degree: 'Master of Science',
      field: 'Computer Science',
      institution: 'Western Michigan University',
      location: 'Kalamazoo, MI',
      date: 'Aug 2023 - Apr 2025',
      gpa: '3.7/4.0',
      coursework: [
        'Advanced Machine Learning',
        'Distributed Systems',
        'Cloud Computing',
        'Natural Language Processing',
        'Computer Vision',
        'Software Architecture'
      ]
    },
    {
      degree: 'Bachelor of Engineering',
      field: 'Computer Science',
      institution: 'Visvesvaraya Technological University',
      location: 'Karnataka, India',
      date: 'June 2018 - Aug 2022',
      coursework: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering',
        'Web Technologies'
      ]
    }
  ];

  return (
    <section id="education" className="education-section">
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
          <GraduationCap className="section-icon" />
          Education
        </motion.h2>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="edu-header">
                <div className="edu-icon">
                  <GraduationCap size={30} />
                </div>
                <div className="edu-main">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-field">{edu.field}</p>
                </div>
              </div>

              <div className="edu-institution">
                <BookOpen size={18} />
                <span>{edu.institution}</span>
              </div>

              <div className="edu-meta">
                <div className="edu-date">
                  <Calendar size={16} />
                  <span>{edu.date}</span>
                </div>
                {edu.gpa && (
                  <div className="edu-gpa">
                    <Award size={16} />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                )}
              </div>

              {edu.coursework && (
                <div className="edu-coursework">
                  <h4>Key Coursework</h4>
                  <div className="course-grid">
                    {edu.coursework.map((course, idx) => (
                      <motion.span 
                        key={idx}
                        className="course-tag"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + idx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="certifications"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
        >
          <h3>Professional Certifications</h3>
          <div className="cert-grid">
            <motion.div 
              className="cert-item"
              whileHover={{ scale: 1.05 }}
            >
              <Award size={20} />
              <div>
                <h4>Core Java, Web Technology, and SQL</h4>
                <p>JSpiders Training and Development Center</p>
              </div>
            </motion.div>
            <motion.div 
              className="cert-item"
              whileHover={{ scale: 1.05 }}
            >
              <Award size={20} />
              <div>
                <h4>Cross-Platform Mobile App Development</h4>
                <p>ATS Learning Solutions</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;