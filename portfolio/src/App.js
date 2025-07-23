// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header'; // Optional if used above Hero/Home

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Header />         {/* Optional: if it’s a title banner or intro */}
        <About />
        <Skills />
        <Experience />
        <Education />
        <Achievements />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
