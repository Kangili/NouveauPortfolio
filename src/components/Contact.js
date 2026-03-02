// src/components/Contact.js
import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    const btn = document.createElement('div');
    btn.id = 'scrollTopBtn';
    btn.className = 'scroll-top';
    btn.innerHTML = '⬆';
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    });

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }, []);

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea rows="5" placeholder="Votre message" required></textarea>
        <button type="submit" className="btn primary">Envoyer</button>
      </form>
    </section>
  );
};

export default Contact;