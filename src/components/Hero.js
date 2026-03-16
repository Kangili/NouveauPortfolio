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
      {/* Particules décoratives */}
      <div id="particles-js" aria-hidden="true"></div>

      {/* Navigation principale */}
      <nav className={isMenuActive ? 'active' : ''} aria-label="Menu principal">
        <a href="#projects">Projets</a>
        <a href="#skills">Compétences</a>
        <a href="#about">À propos</a>
        <a href="#contact">Contact</a>

        {/* Burger menu accessible au clavier */}
        <button
          className="burger"
          onClick={() => setIsMenuActive(!isMenuActive)}
          aria-expanded={isMenuActive}
          aria-label={isMenuActive ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Contenu principal du Hero */}
      <div className="hero-content">
        <h1>
          Kangili <span className="last-name">MABONDA</span>
        </h1>
        <p className="subtitle">Développeur Front-End | HTML • CSS • JavaScript</p>

        {/* Boutons CTA */}
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