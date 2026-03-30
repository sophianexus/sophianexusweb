import React from "react";
import "./Footer.css";

import logo_rmbg from '../../logo/sophianexuslogo-rembg.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logo_rmbg} alt="Logo not found." />
            <h2 className="footer-logo">SOPHIA<span>NEXUS</span></h2>
            <p>Prostor za tvoj unutrašnji mir i somatski rad.</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="social-link">
              INSTAGRAM
            </a>
            <a href="mailto:sophianexusclient@gmail.com" className="social-link">
              KONTAKT
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-line"></div>
          <div className="footer-copy">
            <p>&copy; {currentYear} SOPHIA NEXUS. Sva prava zadržana.</p>
            <p className="footer-tagline">Designed for Presence</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
