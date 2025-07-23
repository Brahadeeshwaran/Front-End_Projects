import React from 'react';
import '../assets/styles/global.css'

const Education = () => {
  const education = [
    {
      institution: 'Solamalai College of Engineering - Madurai',
      degree: 'Bachelor of Engineering in Computer Science',
      details: 'CGPA: 7.66',
      year: 'May 2024',

    },
    {
      institution: 'K.L.N Memorial Polytechnic College - Madurai',
      degree: 'Diploma in Civil Engineering',
      details: 'Percentage: 86%',
      year: 'Apr 2021',
    },
  ];

  return (
    <section id="education" className="py-12">
      <div className="container centered-column">
        <h2 className="section-title">Education</h2>
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 w-full">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`${index % 2 === 0 ? 'neumorphic-btn' : 'neumorphic-btn-hover'} p-8 transition-transform duration-300`}
              style={{marginBott : '10px'}}
            >
              <h3 className="text-xl font-bold text-primary mb-2">{edu.institution}</h3>
              <p className="text-lg font-medium text-text mb-1">{edu.degree}</p>
              <p className="text-text mb-2">{edu.details}</p>
              <p className="text-sm text-secondary">{edu.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
