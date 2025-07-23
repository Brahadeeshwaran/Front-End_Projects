import React from 'react';
import './NeumorphicCard.css';

const NeumorphicCard = ({ children, className = '' }) => {
  return (
    <div variant="inset" className={`neumorphic p-6 ${className}`}>
      {children}
    </div>
  );
};

export default NeumorphicCard;