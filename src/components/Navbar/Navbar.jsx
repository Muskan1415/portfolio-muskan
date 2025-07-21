import React, { useState } from 'react';
import './Navbar.css';
import logo_muskan_final from '../../assets/logo_muskan_final.svg';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg'; // Assuming you have this asset
import menu_close from '../../assets/menu_close.svg'; // Assuming you have this asset

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for mobile menu

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenu(id);
      setMobileMenuOpen(false); // Close mobile menu after selection
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-top">
        <img src={logo_muskan_final} alt="Logo" className="logo" onClick={() => scrollToSection('home')} /> {/* Make logo clickable */}

        {/* Mobile menu open icon */}
        <img
          src={menu_open}
          alt="Open menu"
          className="nav-mob-open"
          onClick={() => setMobileMenuOpen(true)}
        />

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          {/* Mobile menu close icon */}
          <img
            src={menu_close}
            alt="Close menu"
            className="nav-mob-close"
            onClick={() => setMobileMenuOpen(false)}
          />

          <li onClick={() => scrollToSection('home')}>
            <p className='hovering'>Home</p>
            {menu === 'home' && <img src={underline} alt="underline" />}
          </li>

          <li onClick={() => scrollToSection('about')}>
            <p className='hovering'>About Me</p>
            {menu === 'about' && <img src={underline} alt="underline" />}
          </li>

          <li onClick={() => scrollToSection('projects')}>
            <p className='hovering'>Projects</p>
            {menu === 'projects' && <img src={underline} alt="underline" />}
          </li>

          <li onClick={() => scrollToSection('contact')}>
            <p className='hovering'>Contact</p>
            {menu === 'contact' && <img src={underline} alt="underline" />}
          </li>
        </ul>

        <div className="nav-connect" onClick={() => scrollToSection('contact')}>
          Connect With Me
        </div>
      </div>
    </div>
  );
};

export default Navbar;