import React from 'react';
import NeumorphicCard from './NeumorphicCard';

const Achievements = () => {
  const achievements = [
    {
      title: 'Certificate of Appreciation',
      description: 'Recognized by Techgenzi for outstanding contributions in designing wireframes for the Factory Efficiency Management System (FEMS) and Enterprise Risk Management (ERM)',
      year: 'November 2024',
    },
    {
      title: 'Overall Student Coordinator',
      description: 'Served as the Overall Student Coordinator for Smart India Hackathon (SIH), managing teams from BE, ME, and MBA departments',
      year: '',
    },
  ];

  return (
    <section id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievement-list">
          {achievements.map((ach, index) => (
            <NeumorphicCard key={index} className="grid w-full">
              <div
                className={`${index % 2 === 0 ? 'neumorphic-btn' : 'neumorphic-btn-hover'} p-8 transition-transform duration-300`}
              >
                <h3 className="text-xl font-bold text-primary mb-2">{ach.title}</h3>
                <p className="text-text mb-2">{ach.description}</p>
                {ach.year && <p className="text-sm text-secondary">{ach.year}</p>}
              </div>
            </NeumorphicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
