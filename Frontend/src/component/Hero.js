/*import React from 'react';
import heroimg from '../images/gym.png';
import './Hero.css';



function Hero() {
  const videoUrl = 'https://www.youtube.com/watch?v=Im5wJLdudDg';

  const openVideoInNewTab = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section id="Home">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero__content" data-aos="fadeup" data-aos-duration="1500">
            <h2 className="section_title" data-aos="fade-up" data-aos-duration="1500">
              Welcome to our page<span className="highlights"> Healthy</span> Lifestyle
            </h2>

            <p data-aos="fadeup" data-aos-delay="100" data-aos-duration="1800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Quasi, voluptatum. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.
            </p>
            <div
              className="hero__btn"
              data-aos="fadeup"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
            
            
              <button className="watch_btn" onClick={openVideoInNewTab}>
                <span>
                  <i className="ri-play-fill"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>
          <div className="hero__img">
            <div className="hero__img__wrapper">
              <div className='box-01'>
                <div className='box-02'>
                  <div className='box-03'>
                    <div className='box_img'>
                      <img src={heroimg} alt="" />
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;*/
/*import React, { useState } from 'react';
import heroimg from '../images/gym.png';
import chatbotImg from '../images/hj.png';  // Import chatbot image
import Chatbot from './Chatbot';  // Import Chatbot component
import './Hero.css';

function Hero() {
  const videoUrl = 'https://www.youtube.com/watch?v=Im5wJLdudDg';
  const [showChatbot, setShowChatbot] = useState(false);  // State to manage chatbot visibility

  const openVideoInNewTab = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section id="Home">
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero__content" data-aos="fadeup" data-aos-duration="1500">
            <h2 className="section_title" data-aos="fade-up" data-aos-duration="1500">
              Welcome to our page<span className="highlights"> Healthy</span> Lifestyle
            </h2>
            <p data-aos="fadeup" data-aos-delay="100" data-aos-duration="1800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Quasi, voluptatum. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.
            </p>
            <div
              className="hero__btn"
              data-aos="fadeup"
              data-aos-delay="200"
              data-aos-duration="2000"
            >
              <button className="watch_btn" onClick={openVideoInNewTab}>
                <span>
                  <i className="ri-play-fill"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>

         
          <div className="hero__img">
            <div className="hero__img__wrapper">
              <div className='box-01'>
                <div className='box-02'>
                  <div className='box-03'>
                    <div className='box_img'>
                      <img src={heroimg} alt="Hero" />
                    </div>
                  </div>
                </div>
              </div>
             
              <div className='chatbot-icon' onClick={() => setShowChatbot(true)}>
                <img src={chatbotImg} alt="Chatbot" className='chatbot-image' />
              </div>
            </div>
          </div>
        </div>
      </div>

    
      {showChatbot && (
        <div className="chatbot-popup">
          <button className="close-btn" onClick={() => setShowChatbot(false)}>✕</button>
          <Chatbot />  
        </div>
      )}
    </section>
  );
}

export default Hero;*/
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Play, Sparkles } from 'lucide-react';
import Chatbot from './Chatbot.js'; // Make sure you have this component
import './Hero.css';

const Hero = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openVideoInNewTab = () => {
    window.open('https://www.youtube.com/watch?v=Im5wJLdudDg', '_blank');
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br relative overflow-hidden">
      
      <div className="relative">
        <div className="blob blob-1 animate-blob"></div>
        <div className="blob blob-2 animate-blob animation-delay-2000"></div>
        <div className="blob blob-3 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          
          <div className={`fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h1 className="hero-title">
              Welcome to our page
              <span className="hero-highlight">
                Healthy
                <Sparkles className="sparkle" size={24} color="#FFD700" />
              </span>
              Lifestyle
            </h1>

            <p className="hero-description">
              Transform your life with our comprehensive approach to health and wellness. 
              Join our community and discover the perfect balance of mind, body, and spirit 
              through expertly crafted programs and personalized guidance.
            </p>

            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                className="hero-button"
                onClick={openVideoInNewTab}
                aria-label="Watch video"
              >
                <Play size={20} />
                Watch Video
              </button>
            </div>
          </div>

          
          <div className={`fade-in ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="decorative-circle">
              
            </div>
          </div>
        </div>
      </div>

      
      <button
        className="chatbot-toggle"
        onClick={toggleChatbot}
        aria-label="Toggle chat"
      >
        {showChatbot ? (
          <X size={15} />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>

      
      {showChatbot && (
        <div className="chatbot-popup">
          <button
            className="close-button"
            onClick={() => setShowChatbot(false)}
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
          <div className="p-4 h-full">
            <Chatbot /> 
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;