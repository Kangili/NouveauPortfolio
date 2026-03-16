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
    <section id="skills" aria-labelledby="skills-title">
      <h2 id="skills-title">Compétences techniques</h2>
      {skills.map((s, i) => (
        <div className="skill" key={i}>
          {/* Info accessible avec aria-label */}
          <div className="skill-info">
            <span>{s.name}</span>
            <span>{s.progress}%</span>
          </div>
          <div className="skill-bar" role="progressbar" aria-valuenow={s.progress} aria-valuemin={0} aria-valuemax={100} aria-label={`${s.name} : ${s.progress} %`}>
            <div className="skill-progress" data-progress={s.progress}></div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;