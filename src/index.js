import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Le fichier CSS global
import App from './App'; // Ton composant principal
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Pour les métriques de performance, si tu veux les suivre
reportWebVitals();