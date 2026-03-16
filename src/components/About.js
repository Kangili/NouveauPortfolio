import React from 'react';

const About = () => (
  <section id="about" aria-labelledby="about-title">
    <h2 id="about-title">À propos</h2>
    <div className="about-content">
      {/* Image descriptive avec alt */}
      <img 
        src="img/kangili.jpg" 
        alt="Portrait de Kangili MABONDA, développeur web" 
        className="about-img" 
      />
      <p>
        Développeur web formé chez OpenClassrooms, je conçois des interfaces modernes, accessibles et performantes.
        Je mets l’accent sur la qualité du code, l’expérience utilisateur et les bonnes pratiques SEO.
      </p>
    </div>
  </section>
);

export default About;