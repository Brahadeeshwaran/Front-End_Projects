import React from 'react';
import { Link } from 'react-scroll';

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  to, 
  href, 
  download,
  onClick 
}) => {
  const baseClasses = 'rounded-full font-semibold transition-all duration-300 px-8 py-3 text-center';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'neumorphic-btn hover:shadow-inner',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        download={download}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  if (to) {
    return (
      <Link 
        to={to} 
        smooth={true} 
        duration={500} 
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;