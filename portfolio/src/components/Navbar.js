import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import '../assets/styles/global.css';

const Navbar = () => {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'skills', label: 'Skills' },
    { to: 'experience', label: 'Experience' },
    { to: 'education', label: 'Education' },
    { to: 'achievements', label: 'Achievements' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        navbarRef.current && 
        !navbarRef.current.contains(event.target) &&
        (!mobileMenuRef.current || !mobileMenuRef.current.contains(event.target))
      ) {
        setMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navbarHeight = navbarRef.current?.offsetHeight || '64px';

  return (
    <nav
      ref={navbarRef}
      className={`navbar ${theme === 'dark' ? 'bg-dark-bg' : 'bg-bg'} ${
        scrolled 
          ? theme === 'dark' 
            ? 'shadow-dark-lg' 
            : 'shadow-neumorphic-lg'
          : 'shadow-none'
      }`}
      aria-label="Main navigation"
    >
      <div className="nav-container">
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="logo"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span className="logo-text">
            <b>Brahadeeshwaran</b>
            <span className={`logo-underline ${
              theme === 'dark' ? 'bg-primary' : 'bg-primary-dark'
            }`}></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              spy={true}
              duration={500}
              offset={-80}
              className="nav-link"
              activeClass="active-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
              <span className={`underline-hover ${
                theme === 'dark' ? 'bg-primary' : 'bg-primary-dark'
              }`}></span>
            </Link>
          ))}
          <div className="theme-toggle">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="hamburger">
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
            <span className={`bar ${mobileMenuOpen ? 'open' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        id="mobile-menu"
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''} ${
          theme === 'dark' ? 'bg-dark-bg' : 'bg-bg'
        }`}
        style={{ top: navbarHeight }}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-inner">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              spy={true}
              duration={500}
              offset={-80}
              className={`mobile-nav-link ${
                theme === 'dark' ? 'dark-link' : 'light-link'
              }`}
              activeClass="active-mobile-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;