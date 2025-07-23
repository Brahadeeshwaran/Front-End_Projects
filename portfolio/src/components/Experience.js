import React from 'react';
import NeumorphicCard from './NeumorphicCard';
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaCircle } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      position: 'Software Engineer',
      company: 'TechGenzi',
      location: 'Coimbatore, Tamil Nadu',
      duration: 'Mar 2024 – Present',
      responsibilities: [
        'Currently working as a Front-End Developer and UI/UX Designer on the Factory Efficiency Management Solutions (FEMS).',
        'Successfully completed the Support Ticket System during the trainee period.',
        'Worked on the Enterprise Risk Management (ERM) and Leave Management systems as a UI/UX Designer.',
        'Gained hands-on experience in Advanced JavaScript, React JS, MUI components, AG Grid, and REST APIs.',
      ],
    },
    // Add more experience blocks if needed
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="flex flex-col gap-8 centered-column">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="neumorphic-btn md:p-8 w-[20%] min-w-[280px]"
              style={{ padding: '1.7rem' }}
            >
              <div className="flex justify-between flex-wrap items-start gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-primary mb-1">
                    <FaBriefcase />
                    <h3 style={{ marginLeft: '0.75rem' }} className="text-xl font-bold">{exp.position}</h3>
                  </div>
                  <p
                    className="text-lg font-semibold text-primary tracking-wide"
                    style={{ marginTop: '0.5rem' }}
                  >
                    {exp.company}
                  </p>
                </div>
                <div className="text-right text-sm space-y-1">
                  <p className="flex items-center gap-1 text-secondary">
                    <FaMapMarkerAlt style={{ marginRight: '0.75rem' }} /> {exp.location}
                  </p>
                  <p className="flex items-center gap-1 text-secondary" style={{ marginTop: '0.5rem' }} >
                    <FaCalendarAlt style={{ marginRight: '0.75rem', }} /> {exp.duration}
                  </p>
                </div>
              </div>

              {/* Inner Inset Card */}
              <div className="neumorphic-inner p-6 rounded-lg">
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-text text-sm md:text-base"
                    >
                      {/* <FaCircle className="text-primary mt-1 text-[0.5rem]" /> */}
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
