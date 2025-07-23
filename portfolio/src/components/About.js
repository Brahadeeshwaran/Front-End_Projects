import React from 'react';
import NeumorphicCard from './NeumorphicCard';
import {
  FaLinkedin,
  FaGithub,
  FaDownload,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa';

const About = () => {
  const contactInfo = [
    { label: 'Location', value: 'Madurai, Tamil Nadu', icon: <FaMapMarkerAlt /> },
    { label: 'Email', value: 'brahawar2003@gmail.com', icon: <FaEnvelope /> },
    { label: 'Phone', value: '+91 8667036987', icon: <FaPhone /> },
  ];

  const socialLinks = [
    {
      label: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://www.linkedin.com/in/your-profile',
    },
    {
      label: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/your-github',
    },
    {
      label: 'Resume',
      icon: <FaDownload />,
      href: '/assets/pdfs/BRAHADEESHWARAN_MBS.pdf',
      download: true,
    },
  ];

  const summaryPoints = [
    `I'm a passionate Front-End Developer who thrives on crafting beautiful, intuitive user interfaces using React, JavaScript, and modern design systems.`,
    `I specialize in clean code, responsive layouts, and transforming ideas into digital experiences with a strong design sense.`,
    `Currently expanding my skills into backend development, aiming to become a full-stack contributor to impactful software products.`,
  ];

  return (
    <section className="pt-0 pb-12">
      <div className="container" id="about" >
        <h2 className="section-title" >About Me</h2>

        <NeumorphicCard className="p-8">
          <div className="flex-row">
            {/* Left Column: Personal Info */}
            <div className="left-column">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Personal Info</h3>
              <div className="info-grid">
                {contactInfo.map((item, index) => (
                  <div key={index} className="neumorphic-card-small p-4 info-card">
                    <div className="icon">{item.icon}</div>
                    <div>
                      <div className="label">{item.label}</div>
                      <div className="value">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Professional Summary */}
            <div className="right-column">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Professional Summary</h3>
              {summaryPoints.map((point, index) => (
                <p key={index} className="mb-4 leading-relaxed text-text text-[16px]">
                  {point}
                </p>
              ))}
            </div>
          </div>

          {/* Bottom Section: Connect */}
          <div className="social-connect">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Connect With Me</h3>
            <div className="social-btns">
              {socialLinks.map((link, index) => (
                //                 <a
                //   href="/assets/pdfs/BRAHADEESHWARAN_MBS.pdf"
                //   download
                // >
                //   <button type="button" className="neumorphic-btn">
                //     Download CV
                //   </button>
                // </a>

                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...(link.download && { download: true })}
                >
                  <button type="button" className="neumorphic-btn">
                    {link.icon} {link.label}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </NeumorphicCard>
      </div>
    </section>
  );
};

export default About;
