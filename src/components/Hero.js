// src/components/Hero.js
import React, { useEffect, useState } from 'react';
import 'particles.js';

const Hero = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('visible');

    // Particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 60 },
          color: { value: '#2563eb' },
          shape: { type: 'circle' },
          opacity: { value: 0.5 },
          size: { value: 3 },
          line_linked: { enable: true, distance: 150, color: '#2563eb', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 2 }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' }
          },
          modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <header className="hero">
      <div id="particles-js"></div>

      <nav className={isMenuActive ? 'active' : ''}>
        <a href="#projects">Projets</a>
        <a href="#skills">Compétences</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>

        <div className="burger" onClick={() => setIsMenuActive(!isMenuActive)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      <div className="hero-content">
        <h1>Kangili <span className="last-name">MABONDA</span></h1>
        <p className="subtitle">Développeur Front-End | HTML • CSS • JavaScript</p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">Voir mes projets</a>
          <a href="https://github.com/Kangili" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
          <a href="https://linkedin.com/in/TON-LINKEDIN" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;