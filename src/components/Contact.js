import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Création du bouton "scroll to top"
    const btn = document.createElement('button');
    btn.id = 'scrollTopBtn';
    btn.className = 'scroll-top';
    btn.innerHTML = '⬆';
    btn.setAttribute('aria-label', 'Retour en haut de la page');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }, []);

  return (
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <form>
        <label htmlFor="name">Votre nom</label>
        <input id="name" type="text" placeholder="Votre nom" required />

        <label htmlFor="email">Votre email</label>
        <input id="email" type="email" placeholder="Votre email" required />

        <label htmlFor="message">Votre message</label>
        <textarea id="message" rows="5" placeholder="Votre message" required></textarea>

        <button type="submit" className="btn primary">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;