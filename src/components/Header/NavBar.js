import React from 'react';
import './HeaderMain.css';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="categories-dropdown">
        <div className="categories">CATÉGORIES
        <span class="icon">☰</span>
        </div>
        <div className="dropdown-menu">
          <a href="#">Informatique</a>
          <a href="#">Gaming</a>
          <a href="#">Téléphonie</a>
          <a href="#">Électroménager</a>
          <a href="#">Impression</a>
          <a href="#">TV | Photo & Son</a>
          <a href="#">Sécurité & Réseaux</a>
          <a href="#">Bureautique</a>
          <a href="#">Sport & Loisir</a>
          <a href="#">Beauté & Santé</a>
          <a href="#">Meuble</a>
          <a href="#">Maison, Jardin & Brico</a>
          <a href="#">Bébé</a>
          <a href="#">Cadeau</a>
        </div>
      </div>
      <div className="nav-links">
        <a href="#">Climatiseur</a>
        <a href="#">Moto</a>
        <a href="#">Laptop</a>
        <a href="#">Réfrigérateurs</a>
        <a href="#">Promos</a>
        <a href="#">Marque</a>
      </div>
      <div className="timer">Spécial Ouverture SOUSSE 4j 9h 42m 49s</div>
    </div>
  );
};

export default NavBar;