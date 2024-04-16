import React from "react";
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section contact-section">
            <h3>Contacto</h3>
            <p>Teléfono: (123) 456-7890</p>
            <p>Email: info@example.com</p>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="container">
          <p className="copyright">&copy; 2024 "Nombre de nuestro E-Commerce".</p>
        </div>
      </div>
    </footer>
    );
  }

export default Footer;