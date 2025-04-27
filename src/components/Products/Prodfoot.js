import React, { useState } from 'react';
import './Prodfoot.css';

const Prodfoot = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (isHovered) {
      alert('Image clicked!');
    }
  };

  return (
    <div
      className={`image-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Reference the image directly from the public folder */}
      <img src="/images/promo1.png" alt="iPhone Promo" />
    </div>
  );
};

export default Prodfoot;