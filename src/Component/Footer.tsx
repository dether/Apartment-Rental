import React from 'react';
/* import { Link } from "react-scroll/modules";
import arrow from "../../public/iconos/arrow.svg" */
import whatsapp from "../../public/iconos/whatsapp.svg"
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright © 2023 por Alejandro Vargas | Reservados todos los derechos</p>
      </div>

      {/* <div className="footer-iconTop">
      <Link to="home" smooth={true} offset={-100}>
        <img className="footer-icon" src={arrow} alt="arrow-up"/>
      </Link>
      </div> */}
      <div className="social-media">
          <a href="https://wa.me/+5493644270614" target="_blank" rel="noopener noreferrer">
            <img className="red-social" src={whatsapp} alt="whatsapp" />
          </a>
        </div>
    </footer>
  )
}

export default Footer;