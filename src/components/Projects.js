// src/components/Projects.js
import React from 'react';

const projects = [
  {
    category: 'Portfolio interactif',
    title: 'Sophie Bluel',
    img: '/img/sophiebluel.png',
    description: 'Animations JavaScript et interactions dynamiques.',
    tech: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js'],
    link: 'https://github.com/Kangili/sophie-bluel'
  },
  {
    category: 'Application React',
    title: 'Kasa',
    img: '/img/kasa.png',
    description: 'Plateforme de location avec React et routing dynamique.',
    tech: ['fab fa-react', 'fab fa-css3-alt', 'fab fa-js'],
    link: 'https://github.com/Kangili/P8KASA'
  },
  {
    category: 'Site vitrine',
    title: 'Nina Carducci',
    img: '/img/nina_carducci.png',
    description: 'Site vitrine moderne, responsive et optimisé SEO.',
    tech: ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js'],
    link: 'https://github.com/Kangili/Nina-Carducci'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projects.map((p, i) => (
          <div className="project" key={i}>
            <span className="project-category">{p.category}</span>
            <h3>{p.title}</h3>
            <img src={p.img} alt={p.title} />
            <p>{p.description}</p>

            <div className="project-tech">
              <ul className="tech-list">
                {p.tech.map((icon, i) => (
                  <li key={i}><i className={`${icon} tech-icon`} title={icon}></i></li>
                ))}
              </ul>
            </div>

            <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn primary">Voir le projet</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;