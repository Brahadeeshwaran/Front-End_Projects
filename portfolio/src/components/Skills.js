import React from 'react';
import NeumorphicCard from './NeumorphicCard';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['ReactJS', 'Material-UI', 'Bootstrap', 'AG Grid', 'Axios', 'Figma', 'Canva'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'Mongo DB', 'PostgreSQL', 'MySQL'],
    },
    {
      category: 'Languages',
      items: ['JavaScript', 'Python', 'MQL5'],
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <NeumorphicCard key={index} className="skill-card">
              <h3 className="skill-category">{skill.category}</h3>
              <div className="skill-list">
                {skill.items.map((item, i) => (
                  <span key={i} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </NeumorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
