import React from 'react';
import '../assets/styles/global.css'
import { Link } from 'react-scroll';


const Header = () => {
  const stats = [
    { value: '2+', label: 'Projects' },
    { value: '1+', label: 'Years Experience' },
    { value: '5+', label: 'Technologies' },
    { value: '100%', label: 'Dedication' },
  ];

  return (
    <header
      id="home"
      className="min-h-screen flex items-center pt-16 px-4"
      style={{ scrollMarginTop: '4rem' }}
    >
      <div className="container mx-auto">
        <div className="neumorphic p-8 md:p-12 rounded-2xl max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Brahadeeshwaran</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-secondary">
              Frontend Developer & UI/UX Designer
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto md:mx-0">
              I create beautiful, responsive web applications with modern technologies.
              Currently working at TechGenzi on Factory Efficiency Management Solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
            <Link
              key={'contact'}
              to={'contact'}
              smooth={true}
              spy={true}
              duration={500}
              offset={-80}
            >
              <button
                to="contact"
                variant="primary"
                className="neumorphic-btn"
              >
                Contact Me
              </button>
            </Link>

            <a
              href="/assets/pdfs/BRAHADEESHWARAN_MBS.pdf"
              download
            >
              <button type="button" className="neumorphic-btn">
                Download CV
              </button>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" style={{ marginTop: 20 }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="neumorphic-card-small text-center p-4"
              >
                <h3 className="text-primary font-bold text-2xl">{stat.value}</h3>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;