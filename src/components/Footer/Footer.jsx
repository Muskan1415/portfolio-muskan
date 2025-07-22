import React from 'react';
import './Footer.css';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <div className="footer-top-left">
          
          <p>I am a frontend developer from Kolkata</p>
        </div>

        <div className='footer-top-right '>
          <div className='footer-email-input email_Img'>
            <img src={user_icon}  alt="User Icon" />
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">
            Subscribe
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className='footer-bottom-left'>© 2025 Muskan Singh. All rights reserved</p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
