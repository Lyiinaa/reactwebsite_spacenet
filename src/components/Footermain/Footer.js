import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>A Propos</h4>
          <p>SpaceNet Tunisie a démarré en 2004, est une entreprise de référence dans le domaine du High-Tech</p>
        </div>
        <div className="footer-section">
          <h4>Service Client</h4>
          <ul className="footer-links">
            <li><a href="#">Service Rizevli</a></li>
            <li><a href="#">service Drive</a></li>
            <li><a href="#">Commande</a></li>
            <li><a href="#">Paiment</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>L’univers Spacenet</h4>
          <ul className="footer-links">
          <li><a href="#">Notre Assortiment</a></li>
          <li><a href="#">Travailler Chez Spacenet</a></li>
          <li><a href="#">Nos Offres d'emploi</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Inscrivez-vous à notre newsletter et recevez les meilleures offres et nos conseils personnalisés</p>
          <div className="social-icons">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">📸</a>
            <a href="#" className="social-icon">🐦</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 SpaceNet. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;