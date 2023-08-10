import React from 'react';
import whatsapp from "../../public/iconos/whatsapp.svg";
import gmail from "../../public/iconos/gmail.svg";
import cel from "../../public/iconos/cel.svg";
import location from "../../public/iconos/location.svg";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright © 2023 por Alejandro Vargas | Reservados todos los derechos</p>
      </div>
      <div className="information-media">
          <a href="https://wa.me/+5493644270614" target="_blank" rel="noopener noreferrer">
            <img className="information-contact" src={whatsapp} alt="whatsapp" />
          </a>
            <img className="information-contact" src={gmail} alt="gmail" />
            <p> dether2011@gmail.com </p>
            <img className="information-contact" src={cel} alt="phone" />
            <p> +54 3644 130578 </p>

            <a href="/locations">
            <img className="information-contact" src={location} alt="location" />
            <p> Ubicación </p>
            </a>

        </div>
    </footer>
  )
}

export default Footer;