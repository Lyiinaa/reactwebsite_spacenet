import React, { useState } from 'react';
import './HeaderMain.css';
const HeaderMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="header-main">
      <div className="logo-section">
        <div className="logo">SPACE N@T</div>
        <div className="slogan"> ! أرخص سوم على النات </div>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Rechercher" />
      </div>
      <button className="search-button">Rechercher</button>
      <div className="user-actions">
        <a href="#" onClick={(e) => { e.preventDefault(); toggleModal(); }}>
          S'inscrire
        </a>
        <a href="#" className="cart">
          <span>Panier</span>
          <span className="cart-count">0</span>
          <span>0,000 DT</span>
        </a>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={toggleModal}>×</button>
            <div className="modal-content">
              <div className="form-group">
                <label>E-mail:</label>
                <input type="email" />
              </div>
              <div className="form-group">
                <label>Mot de passe:</label>
                <div className="password-container">
                  <input type={showPassword ? 'text' : 'password'} />
                  <button onClick={togglePasswordVisibility} className="toggle-password">
                    {showPassword ? 'MASQUER' : 'AFFICHER'}
                  </button>
                </div>
              </div>
              <button className="login-button">Se connecter</button>
              <button className="create-account-button">Créer un compte</button>
              <a href="#" className="forgot-password">Mot de passe oublié?</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMain;