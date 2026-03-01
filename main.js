// =============================
// ANIMATION HERO
// =============================
const heroContent = document.querySelector('.hero-content');
window.addEventListener('load', () => {
  heroContent.classList.add('visible'); // Affiche le hero avec animation
});

// =============================
// BURGER MENU
// =============================
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
burger.addEventListener('click', () => {
  nav.classList.toggle('active'); // Toggle menu mobile
});

// =============================
// ANIMATION SECTIONS
// =============================
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Affiche section au scroll
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
sections.forEach(section => sectionObserver.observe(section));

// =============================
// ANIMATION BARRES COMPÉTENCES
// =============================
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progress = entry.target.getAttribute('data-progress');
      entry.target.style.width = progress + '%'; // Remplit la barre
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
skillBars.forEach(bar => skillObserver.observe(bar));

// =============================
// SMOOTH SCROLL NAV
// =============================
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' }); // Scroll doux
  });
});

// =============================
// PARTICLES.JS HERO
// =============================
particlesJS('particles-js', {
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
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// =============================
// FLÈCHE RETOUR HAUT
// =============================
const scrollTopBtn = document.createElement('div');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.classList.add('scroll-top');
scrollTopBtn.innerHTML = '⬆'; // Flèche simple
document.body.appendChild(scrollTopBtn);

// Affichage seulement si scroll > 300px
window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    scrollTopBtn.style.display = 'flex';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

// Scroll vers le haut au clic
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});