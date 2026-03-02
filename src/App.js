// src/App.js
import React, { useEffect } from 'react';
import './index.css';

import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    // Sélectionner toutes les sections de la page
    const sections = document.querySelectorAll('section');
    
    // Créer un observer pour observer l'intersection des sections
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Ajouter la classe 'visible' lorsque la section entre dans la vue
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);  // Arrêter d'observer une fois la section visible
        }
      });
    }, { threshold: 0.5 });  // Se déclenche quand 50% de la section est visible

    // Observer toutes les sections
    sections.forEach(section => observer.observe(section));
  }, []);  // L'effet se déclenche uniquement lors du montage du composant

  return (
    <div className="App">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;