import React from 'react';
import NeumorphicCard from './NeumorphicCard';
import Form from './Form';

import { LocationOnRounded, EmailRounded, PhoneRounded } from '@mui/icons-material';



const contactInfo = [
  { icon: <LocationOnRounded className="text-primary" />, label: 'Madurai, Tamil Nadu, India' },
  { icon: <EmailRounded className="text-primary" />, label: 'brahawar2003@gmail.com' },
  { icon: <PhoneRounded className="text-primary" />, label: '+91 8667036987' },
];


const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <NeumorphicCard className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
              <ul className="achievement-list">
                {contactInfo.map((item, index) => (
                  <li
                    key={index}
                    className="neumorphic-btn flex items-center rounded-lg neumorphic-card gap-4"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <span className="text-gray-800">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Send Me a Message</h3>
              <Form />
            </div>
          </div>
        </NeumorphicCard>
      </div>
    </section>
  );
};

export default Contact;
