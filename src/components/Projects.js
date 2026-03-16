import React, { useState } from "react";

const truncateLength = 60;

const projects = [
  {
    category: "Portfolio interactif",
    title: "Sophie Bluel",
    img: "/img/sophiebluel.png",
    context:
      "Projet réalisé dans le cadre de ma formation de développeur web. Il s'agit d'un portfolio dynamique permettant à un administrateur de gérer les projets.",
    objective:
      "Manipuler le DOM avec JavaScript, gérer les événements utilisateurs et interagir avec une API pour ajouter ou supprimer des projets.",
    improvement:
      "Améliorer la gestion des erreurs, renforcer la sécurité de l’authentification et améliorer l'expérience utilisateur du panneau d’administration.",
    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
    link: "https://github.com/Kangili/sophie-bluel"
  },
  {
    category: "Application React",
    title: "Kasa",
    img: "/img/kasa.png",
    context:
      "Application développée avec React simulant une plateforme de location d’appartements.",
    objective:
      "Créer une application React structurée avec des composants réutilisables et gérer la navigation avec React Router.",
    improvement:
      "Ajouter un système de filtres ou de recherche pour les logements et connecter l'application à une API réelle.",
    tech: ["fab fa-react", "fab fa-css3-alt", "fab fa-js"],
    link: "https://github.com/Kangili/P8KASA"
  },
  {
    category: "Site vitrine",
    title: "Nina Carducci",
    img: "/img/nina_carducci.png",
    context:
      "Projet consistant à optimiser un site existant afin d'améliorer ses performances, son accessibilité et son référencement.",
    objective:
      "Améliorer les performances du site avec Lighthouse, optimiser les images, corriger les problèmes d’accessibilité et appliquer les bonnes pratiques SEO.",
    improvement:
      "Ajouter un système de gestion de contenu (CMS) et améliorer certaines interactions utilisateur pour enrichir l’expérience.",
    tech: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js"],
    link: "https://github.com/Kangili/Nina-Carducci"
  }
];

const Projects = () => {
  // État pour gérer l'affichage complet des projets
  const [expanded, setExpanded] = useState({});

  // Basculer "Voir plus / Voir moins" d'un projet
  const toggleProject = (key) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key] // inverse l'état du projet
    }));
  };

  // Afficher texte tronqué ou complet selon l'état
  const displayText = (text, isOpen) => {
    if (text.length <= truncateLength) return text;
    return isOpen ? text : text.substring(0, truncateLength) + "...";
  };

  return (
    <section id="projects">
      <h2>Mes Projets</h2>

      <div className="projects-container">
        {projects.map((p, i) => {
          const isOpen = expanded[i]; // état du projet courant
          return (
            <div className="project" key={i}>
              <span className="project-category">{p.category}</span>
              <h3>{p.title}</h3>
              <img src={p.img} alt={p.title} />

              <p>
                <strong>Contexte :</strong> {displayText(p.context, isOpen)}
              </p>

              <p>
                <strong>Objectif :</strong> {displayText(p.objective, isOpen)}
              </p>

              <p>
                <strong>Perspectives d'amélioration :</strong>{" "}
                {displayText(p.improvement, isOpen)}
              </p>

              {/* Bouton pour déplier/replier tout le projet */}
              <span
                onClick={() => toggleProject(i)}
                style={{ color: "#2563eb", cursor: "pointer" }}
              >
                {isOpen ? "Voir moins" : "Voir plus"}
              </span>

              <div className="project-tech">
                <ul className="tech-list">
                  {p.tech.map((icon, idx) => (
                    <li key={idx}>
                      <i className={`${icon} tech-icon`} title={icon}></i>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
              >
                Voir le projet
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;