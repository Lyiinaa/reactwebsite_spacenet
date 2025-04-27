import React from 'react';
import './GiftCard.css'; 

const GiftCard = () => {
  const handleClick = () => {
    window.open('http://www.spacenet.tn', '_blank');
  };

  return (
    <div className="gift-card-container">
      <img 
        src="/images/cartcard.png"
        alt="Carte Cadeau Spacenet" 
        className="gift-card-image"
        onClick={handleClick}
      />
    </div>
  );
};

export default GiftCard;