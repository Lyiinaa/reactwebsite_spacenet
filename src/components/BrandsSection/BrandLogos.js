import React from 'react';
import './BrandLogos.css';

const BrandLogos = () => {
  const brands = [
    { name: 'HP', image: '/images/hp.png' },
    { name: 'MSI', image: '/images/msi.png' },
    { name: 'ASUS', image: '/images/asus.png' },
    { name: 'Lenovo', image: '/images/lenovo.png' },
    { name: 'SAMSUNG', image: '/images/samsung.png' },
    { name: 'DELL', image: '/images/dell.png' },
    { name: 'EPSON', image: '/images/epson.png' },
    { name: 'Canon', image: '/images/canon.png' },
    { name: 'HUAWEI', image: '/images/huawei.png' },
    { name: 'Acer', image: '/images/acer.png' },
    { name: 'Apple', image: '/images/apple.png' },
    { name: 'CANDY', image: '/images/candy.png' },
    { name: 'LG', image: '/images/lg.png' },
    { name: 'Whirlpool', image: '/images/whirlpool.png' },
    { name: 'Hoover', image: '/images/hoover.png' },
    { name: 'Brandt', image: '/images/brandt.png' },
    { name: 'Mi', image: '/images/mi.png' },
    { name: 'Pantum', image: '/images/pantum.png' },
  ];

  return (
    <section className="brand-logos">
      <h2>Nos Marques Partenaires</h2>
      <div className="logos-grid">
        {brands.map((brand, index) => (
          <div key={index} className="logo-card">
            {brand.image ? (
              <img src={brand.image} alt={brand.name} className="brand-logo" />
            ) : (
              <span className="logo-placeholder">{brand.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandLogos;