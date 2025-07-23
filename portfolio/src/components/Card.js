import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`neumorphic rounded-xl p-6 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;