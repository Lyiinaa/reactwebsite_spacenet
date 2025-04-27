import './App.css';


import TopBar from './components/Header/TopBar';
import HeaderMain from './components/Header/HeaderMain';
import NavBar from './components/Header/NavBar';
import BrandLogos from './components/BrandsSection/BrandLogos';
import StoreLocations from './components/Storelocation/StoreLocations';
import Footer from './components/Footermain/Footer';
import Prodfoot from './components/Products/Prodfoot';
import AboutSection from './components/Aboutsection/AboutSection';


function App() {
  return (
    <div className="App">
      <TopBar />
      <HeaderMain />
      <NavBar />
      <main style={{ minHeight: '100vh' }}>
      <section className="product-banner">
        <img src="./images/prodtop.png" alt="Samsung Galaxy A16 Banner" className="banner-image" />
      </section>
        <div><AboutSection /></div>
        <Prodfoot />
        <div>
          <BrandLogos />
        </div>
        
      </main>
      
      <StoreLocations />
      <Footer />
    </div>
  );
}

export default App;
