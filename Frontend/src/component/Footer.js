import React from 'react'
import './Footer.css'

import logo from '../images/a.png'

 const Footer = ( ) => {
  const year=new Date().getFullYear()
  return (
    <footer className='footer'
    data-aos="fade-up"
data-aos-duration="1500" >
      <div className='container'>
        <div className='footer_wrapper'>
          <div className='footer_box'>
<div className='logo'>
  <div className='logo_img'>
    <img src={logo} alt=""/> 
  </div>
  <h2>Fitbody</h2>
</div>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi<br/>, voluptatum. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptatum.</p>
          </div>
          <div className='footer_box'>
            <h4 className='footer_title'> Company</h4>
            <ul className='footer links'>
              <li> <a href="#"> Our Program</a> </li>
              <li> <a href="#"></a> Our Plan </li>
              <li> <a href="#"></a> Become a Member</li>
              <li> <a href="#"></a> </li>
              
            </ul>
          </div>
          <div className='footer_box'>
            <h4 className='footer_title'> Quick Links</h4>
            <ul className='footer links'>
              <li> <a href="#"> About us</a> </li>
              <li> <a href="#"></a> Contact us </li>
              <li> <a href="#"></a> Support</li>
              <li> <a href="#"></a> </li>


</ul>
</div> 

<div className='footer_box'>
            <h4 className='footer_title'> Quick Links</h4>
            <ul className='footer links'>
              <li> <a href="#"> About us</a> </li>
              <li> <a href="#"></a> Contact us </li>
              <li> <a href="#"></a> Support</li>
              <li> <a href="#"></a> </li>
</ul>
</div>
        </div>
        <p className='copyright'>Copyright - developed by Divya jyoti.All right reserved</p>
      </div>
    </footer>
     
  )  
  
};
export default Footer;