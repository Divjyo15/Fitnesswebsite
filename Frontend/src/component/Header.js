
import React, { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';  
import Login from './Login';  
import './Header.css';
import logo from '../images/a.png';
import profileIcon from '../images/profile_icon.png';  
import { StoreContextapi } from "../services/ContextApi.js";  

const navLinks = [
  { path: '#Home', display: 'Home' },
  { path: '#Schedule', display: 'Schedule' },
  { path: '#Classes', display: 'Classes' },
  { path: '#Pricing', display: 'Pricing' },
];

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);  // For dropdown visibility
  const headerRef = useRef(null);
  const navigate = useNavigate();  
  const { token, setToken } = useContext(StoreContextapi);  // Access token from context

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({ left: 0, top: location - 80 });
  };

  const openLogin = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  const handleLogout = () => {
    setToken(null);  // Clear token in context
    localStorage.removeItem("token");  // Remove token from local storage
  };

  return (
    <header className='header' ref={headerRef}>
      <div className='Container'>
        <div className='nav_wrapper'>
          <div className='logo'>
            <div className='logo_img'>
              <img src={logo} alt='logo' />
            </div>
            <h2>GYM</h2>
          </div>
          <div className='navigation'>
            <ul className='menu'>
              {navLinks.map((item) => (
                <li className='menu_item' key={item.display}>
                  <a onClick={handleClick} href={item.path}>
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='nav_right'>
            {token ? (
              <div className='profile_wrapper'>
                <img 
                  src={profileIcon} 
                  alt='Profile' 
                  className='profile_icon' 
                  onClick={() => setDropdownOpen(!dropdownOpen)} 
                />
                {dropdownOpen && (
                  <div className='dropdown_menu'>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            ) : (
              <button className='register_btn' onClick={openLogin}>Register</button>
            )}
            <span className='mobile_menu'>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
      
      {showLogin && (
        <div className="login-modal">
          <Login closeLogin={closeLogin} /> 
        </div>
      )}
    </header>
  );
};

export default Header;