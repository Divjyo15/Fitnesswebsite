import React, { useEffect, useState } from 'react'; // Import useState
import { BrowserRouter } from 'react-router-dom';
import Aos from 'aos';

import './App.css';
import Header from './component/Header.js';
import Hero from './component/Hero.js';
import Exercise from './component/Exercise.js';
import Start from './component/Start.js';
import Pricing from './component/Pricing.js';
import Testimonial from './component/Testimonial.js';
import Footer from './component/Footer.js';
import Login from './component/Login.js';
import { StoreProvider } from './services/ContextApi.js';


function App() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <StoreProvider>
      <BrowserRouter>
        <>
          <Header setShowLogin={setShowLogin} /> {/* Pass setShowLogin here */}
          
          <Hero />

          <Exercise />
          <Start />
          <Pricing />
          <Testimonial />
          
          {showLogin && <Login setShowLogin={setShowLogin} />}
          <Footer />
        </>
      </BrowserRouter>
    </StoreProvider>
  );
}
export default App;
