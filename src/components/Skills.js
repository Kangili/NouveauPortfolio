// src/components/Skills.js
import React, { useEffect } from 'react';

const skills = [
  { name: 'HTML', progress: 90 },
  { name: 'CSS', progress: 85 },
  { name: 'JavaScript', progress: 75 }
];

const Skills = () => {
  useEffect(() => {
    const bars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.style.width = entry.target.getAttribute('data-progress') + '%';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    bars.forEach(bar => observer.observe(bar));
  }, []);

  return (
    <section id="skills">
      <h2>Compétences techniques</h2>
      {skills.map((s, i) => (
        <div className="skill" key={i}>
          <div className="skill-info"><span>{s.name}</span><span>{s.progress}%</span></div>
          <div className="skill-bar">
            <div className="skill-progress" data-progress={s.progress}></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;