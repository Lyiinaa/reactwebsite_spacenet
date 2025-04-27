import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const brands = [
    { name: 'HP', description: 'une marque réputée pour ses ordinateurs portables, ses accessoires et sa gamme d’imprimantes impressionnante.' },
    { name: 'MSI', description: 'la destination idéale pour les passionnés de gaming, avec des machines performantes et divers accessoires.' },
    { name: 'Asus', description: 'un nom emblématique qui combine polyvalence d’usage, designs modernes et sophistiqués dans sa gamme d’ordinateurs portables.' },
    { name: 'Lenovo', description: 'un constructeur qui propose des machines puissantes, avec une intégration continue des dernières innovations technologiques.' },
    { name: 'Dell', description: 'reconnue pour son excellent service après-vente, la fabrication de serveurs robustes.' },
    { name: 'Epson', description: 'une marque leader dans l’industrie de l’impression et de l’audiovisuel.' },
    { name: 'Huawei', description: 'une marque compétitive face aux géants mondiaux grâce à une gamme de smartphones et d’accessoires à la pointe de la technologie.' },
    { name: 'Moulinex', description: 'propose des équipements culinaires et électroménagers modernes pour faciliter la vie en cuisine.' },
    { name: 'LG', description: 'acteur incontournable de l’industrie électronique pour foyer et la cuisine avec une base de clientèle fidèle.' },
    { name: 'Oppo', description: 'offre une gamme de smartphones abordables avec une qualité appréciable.' },
    { name: 'Xiaomi', description: 'une marque orientée grand public, proposant des produits high-tech innovants.' },
    { name: 'Infinix', description: 'propose des smartphones au rapport qualité-prix attractif.' },
  ];

  const iphones = [
    { name: 'iPhone 11', description: 'l’iPhone le plus abordable de cette série avec un design propre et le noir comme une couleur de base, équipé d’un double appareil photo et d’une autonomie décente.' },
    { name: 'iPhone 12', description: 'présente un nouveau design avec des bordures de plaques et est équipé de la puce Bionic A14 ainsi que des capteurs LED.' },
    { name: 'iPhone 13 Pro Max', description: 'l’iPhone le plus sophistiqué de la série, avec un triple appareil photo ainsi qu’une capacité de batterie grande.' },
    { name: 'iPhone 11 Pro 64 Go', description: 'doté d’une conception en verre mat et d’une grande capacité de batterie.' },
    { name: 'iPhone 13 Pro 128 Go', description: 'un modèle de gamme avec un écran Super Retina XDR de 6,1 pouces.' },
    { name: 'iPhone 14 128 Go', description: 'équipé de la puce Bionic A15, plus rapide celle de l’iPhone 13.' },
    { name: 'iPhone 13 128 Go', description: 'doté d’un écran Super Retina XDR de 6,1 pouces.' },
    { name: 'iPhone 15 128 Go', description: 'le premier modèle de la série 15, doté d’un appareil photo principal de 48 MP.' },
    { name: 'iPhone 15 Pro Max 256 Go', description: 'un modèle similaire à l’iPhone 14 Pro Max, avec une puce A16 Bionic plus puissante.' },
    { name: 'iPhone 11 Pro Max 64 Go', description: 'premier modèle de la gamme Pro Max, doté d’une puce A16.' },
    { name: 'iPhone 16', description: 'doté d’un écran HDR Super Retina XDR OLED 6,1 pouces et d’une caméra Fusion 48 Mpx pour une qualité visuelle exceptionnelle.' },
    { name: 'iPhone 16 Pro', description: 'équipé d’un écran Super Retina XDR OLED 6,3 pouces et d’un zoom numérique jusqu’à 25x pour des photos d’une qualité inégalée.' },
    { name: 'iPhone 16 Pro Max', description: 'doté d’un écran Super Retina XDR 6,9 pouces et d’une autonomie jusqu’à 33 heures, en lecture vidéo pour une expérience immersive et durable.' },
  ];

  const androidPhones = [
    { name: 'Samsung S25', description: 'fonctionnant sous Android 15.' },
    { name: 'Samsung S25 Plus', description: 'doté du système d’exploitation Android 15.' },
    { name: 'Samsung S25 Ultra', description: 'avec Android™ 15.' },
    { name: 'Redmi Note 14', description: 'sous Xiaomi HyperOS.' },
    { name: 'Redmi Note 14 Pro', description: 'tournant sous Xiaomi HyperOS.' },
    { name: 'Redmi Note 14 Pro Plus', description: 'avec le système d’exploitation Xiaomi HyperOS.' },
  ];

  const androidPhonesNew = [
    { name: 'Redmi Note 14 Pro', description: 'tournant sous Xiaomi HyperOS.' },
    { name: 'Redmi Note 14 Pro Plus', description: 'avec le système d’exploitation Xiaomi HyperOS.' },
    { name: 'Samsung A16', description: 'équipé par Android 14, jusqu’à 6 mises à niveau Android majeures, One UI 6.1.' },
    { name: 'Infinix Hot 50', description: 'fonctionnant sous Android 14, XOS 14.5.' },
    { name: 'Honor X9C', description: 'avec Android 14, Magic OS 8.' },
    { name: 'Oppo A78', description: 'équipé du système d’exploitation Android 13.' },
  ];

  const portableComputers = [
    { name: 'PC Portable Tunisie', description: 'idéal pour un usage classique à un prix raisonnable.' },
    { name: 'PC Gamer Tunisie', description: 'les modèles les plus puissants pour satisfaire la communauté des gamers.' },
    { name: 'PC Portable Pro Tunisie', description: 'destiné à ceux qui privilégient la performance technique dans leur travail ou aux entreprises recherchant une infrastructure moderne.' },
    { name: 'PC Apple MacBook Tunisie', description: 'pour les fidèles de la marque Apple, amateurs de haute qualité et de design sophistiqué.' },
  ];

  return (
    <section className="about-section">
      <h2>Achetez Vos Produits High-tech et Électroménagers Sur Spacenet</h2>
      <p>
      La boutique en ligne Spacenet Tunisie représente l’endroit idéal pour réaliser de bonnes affaires sur des articles high-tech, 
      électroménagers et photo & son. Avec un vaste stock de produits, y compris des ordinateurs de bureau, des ordinateurs portables, 
      des écrans et des équipements électroménagers, Spacenet Tunisie est une plateforme d’e-commerce qui s'engage à proposer des 
      produits de qualité authentique aux meilleurs prix en TND. Grâce à un site web interactif offrant une navigation personnalisée, 
      vous pouvez effectuer vos achats et commander ce qui vous plaît depuis chez vous, avec une livraison express. Profitez de super 
      promotions, d’offres exclusives, et d’un service client dévoué pour répondre à toutes vos questions et réclamations.
      </p>
      <h3>Explorez les grandes marques disponibles chez Spacenet en Tunisie</h3>
      <ul>
        {brands.map((brand, index) => (
          <li key={index}>
            <strong>{brand.name} :</strong> {brand.description}
          </li>
        ))}
      </ul>
      <h2>Achetez Votre Smartphone en Ligne Chez Spacenet en Tunisie</h2>
      <p>
        La boutique en ligne Spacenet vous invite à découvrir sa large gamme de smartphones multifonctions, où vous pouvez profiter de variétés des modèles. Que vous soyez
        passionné par Apple ou Android, tout est disponible sur notre site web. Explorez notre vaste catalogue d’iPhones et de smartphones Android, et choisissez celui qui vous convient.
      </p>
      <h3>Commander l’iPhone idéal En Ligne</h3>
      <p>
        Consultez la sélection complète d’iPhones sur la plateforme e-commerce Spacenet, où nous vous proposons des modèles qui sont distingués par leurs puissances adaptées à toutes les préférences :
      </p>
      <ul>
        {iphones.map((iphone, index) => (
          <li key={index}>
            <strong>{iphone.name} :</strong> {iphone.description}
          </li>
        ))}
      </ul>
      <p className="highlight">
        Choisissez Votre Smartphone Android Chez Spacenet
      </p>
      <p>
        Pour les utilisateurs fidèles d’Android, Spacenet répond à toutes les attentes en offrant un choix diversifié de smartphones 5G issus des différentes marques de renom :
      </p>
      <ul>
        {androidPhones.map((phone, index) => (
          <li key={index}>
            <strong>{phone.name} :</strong> {phone.description}
          </li>
        ))}
      </ul>
      <h3>Commander l’iPhone idéal En Ligne</h3>
      <p>
        Consultez la sélection complète d’iPhones sur la plateforme e-commerce Spacenet, où nous vous proposons des modèles qui sont distingués par leurs puissances adaptées à toutes les préférences :
      </p>
      <ul>
        {iphones.map((iphone, index) => (
          <li key={index}>
            <strong>{iphone.name} :</strong> {iphone.description}
          </li>
        ))}
      </ul>
      <p className="highlight">
        Choisissez Votre Smartphone Android Chez Spacenet
      </p>
      <p>
        Pour les utilisateurs fidèles d’Android, Spacenet répond à toutes les attentes en offrant un choix diversifié de smartphones 5G issus des différentes marques de renom :
      </p>
      <ul>
        {androidPhonesNew.map((phone, index) => (
          <li key={index}>
            <strong>{phone.name} :</strong> {phone.description}
          </li>
        ))}
      </ul>
      <p>
        Tout est là chez Spacenet sans oublier la gamme des accessoires mobiles et surtout les écouteurs sans fil, ainsi que la livraison express assurée par nos équipes.
      </p>
      <h2>Commandez Votre Ordinateur Portable en Tunisie chez Spacenet</h2>
      <p>
        Spacenet est également bien présent sur le marché des ordinateurs, avec une offre variée pour répondre à différents besoins d’utilisation :
      </p>
      <ul>
        {portableComputers.map((computer, index) => (
          <li key={index}>
            <strong>{computer.name} :</strong> {computer.description}
          </li>
        ))}
      </ul>
      <h2>Commandez votre climatiseur en Tunisie chez spacenet :</h2>
      <p>
        Vous possédez un appartement, un bureau ou une grande villa et vous recherchez un refroidissement optimal et économique cette saison ?
      </p>
      <p>
        L’équipe Spacenet priorise toujours la satisfaction de tous ses clients et pour cela on vous propose les meilleures offres des climatiseurs chaud-froid en Tunisie et afin d’amuser
        un domicile chaud et froid avec des capacités 9000 BTU , 12000 BTU et 18000 BTU afin d’amuser le confort résidentiel grâce aux modèles puissants de nos
        climatiseurs 22000 BTU , 24000 BTU , 36000 BTU et 60 000 BTU.
      </p>
      <p>
        Ne ratez pas la chance d’obtenir nos climatiseurs au meilleur prix en Tunisie sur Spacenet, qui sont fabriqués par des marques de renom comme Samsung et LG , ainsi que
        d’autres marques Coala , Gree , Media , Condor et Bilux . Ils offrent une qualité authentique et un design élégant, avec des modèles dotés de la technologie Inverter.
      </p>
    </section>
  );
};

export default AboutSection;