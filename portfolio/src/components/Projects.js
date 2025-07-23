import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { theme } = useTheme();

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Traditional DigiMarket",
      description: "AI-based E-Commerce platform focused on selling traditional products",
      tags: ["Django", "AI", "E-Commerce"],
    },
    {
      id: 2,
      title: "Face Recognition Attendance System",
      description: "Attendance system using facial recognition technology",
      tags: ["Python", "OpenCV"],
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Responsive portfolio built using React",
      tags: ["React"],
    },
    {
      id: 4,
      title: "B2 Courier Service",
      description: "Direct customer-to-customer courier delivery system without physical courier stations",
      tags: ["PHP", "MySQL", "HTML", "CSS"],
    },

  ];

  return (
    <section id="projects" className={`py-16 ${theme === 'dark' ? 'bg-dark-bg' : 'bg-bg'}`}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>

        {/* Grid with 2 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${index % 2 === 0 ? 'neumorphic-btn' : 'neumorphic-btn-hover'} p-8 transition-transform duration-300`}
            >
              <h3 className={'text-xl font-bold text-primary mb-2'}>
                {project.title}
              </h3>
              <p className="text-text mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={'text-sm text-secondary'}
                  >
                    {tag} |
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default Projects;
