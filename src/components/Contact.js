import React, { useEffect, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis.';
    if (!formData.email.trim()) newErrors.email = 'L’email est requis.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'L’email est invalide.';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setSuccess('');
    } else {
      setErrors({});
      setFormData({ name: '', email: '', message: '' });
      setSuccess('Votre message a été envoyé avec succès !');

      // Faire disparaître le message après 5 secondes
      setTimeout(() => setSuccess(''), 5000);
    }
  };

  useEffect(() => {
    const btn = document.createElement('button');
    btn.id = 'scrollTopBtn';
    btn.className = 'scroll-top';
    btn.innerHTML = '⬆';
    btn.setAttribute('aria-label', 'Retour en haut de la page');
    document.body.appendChild(btn);

    const handleScroll = () => {
      btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
    };
    window.addEventListener('scroll', handleScroll);

    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      btn.remove();
    };
  }, []);

  return (
    <section id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">Contact</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Votre nom</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Votre email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message">Votre message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
        </div>

        <button type="submit" className="btn primary">Envoyer</button>
        {success && <p style={{ color: 'green', marginTop: '10px' }}>{success}</p>}
      </form>
    </section>
  );
};

export default Contact;