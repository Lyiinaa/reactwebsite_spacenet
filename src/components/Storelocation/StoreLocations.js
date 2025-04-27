import React from 'react';
import './StoreLocations.css';

const StoreLocations = () => {
  const locations = [
    {
      name: 'Megastore Charguia',
      phone: '70 223 300',
      email: 'charguia@spacenet.tn',
      address: '56, Rue de L\'Industrie Charguia 1 2035 - Tunis',
    },
    {
      name: 'Magasin Ariana',
      phone: '70 223 305',
      email: 'ariana@spacenet.tn',
      address: '25, Rue Mustapha Hjiej 2080 Ariana - Tunis',
    },
    {
      name: 'Magasin Lafayette',
      phone: '70 223 304',
      email: 'lafayette@spacenet.tn',
      address: '30 rue d\'Irak, angle rue Palestine, Lafayette 1002 - Tunis',
    },
    {
      name: 'Megastore Rue de Marseille',
      phone: '70 223 302',
      email: 'tunis@spacenet.tn',
      address: '35- rue de Marseille Tunis',
    },
    {
      name: 'Megastore Hammamet',
      phone: '70 223 300 / 70 223 306',
      email: 'hammamet@spacenet.tn',
      address: 'Avenue Abou Dhabi el mrezga Hammamet, 8050',
    },
    
  ];

  return (
    <div className="store-locations">
      <div className="locations-container">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            <h4>{location.name}</h4>
            <p>
              <span className="icon">📞</span> {location.phone}
            </p>
            <p>
              <span className="icon">✉️</span> {location.email}
            </p>
            <p>
              <span className="icon">📍</span> {location.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreLocations;