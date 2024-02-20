import React from "react";

import gmail from "../../utils/icon/gmail.svg";
import cel from "../../utils/icon/whatsapp.svg";
import location from "../../utils/icon/location.svg";
import logo from "../../utils/logo/LOGO.png";

const Footer: React.FC = () => {
	return (
		<footer className="footer">
			<div className="footer-section1">
				{/* Sección de ubicaciones */}
				<div className="footer-location-section">
					<div className="footer-description1">
						<p>Ubicación de los Departamentos</p>
					</div>
					<div className="footer-location">
						<a
							href="https://goo.gl/maps/ULdSERsA7RjgTfRj8"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="footer-location-icon"
								src={location}
								alt="location"
							/>
							<p>Departamentos Santa Teresita</p>
						</a>
					</div>
					<div className="footer-location">
						<a
							href="https://goo.gl/maps/1ewFs8dAcH2fUCCR8"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="footer-location-icon"
								src={location}
								alt="location"
							/>
							<p>Departamentos Santa Monica</p>
						</a>
					</div>
				</div>
			</div>

			<div className="footer-section2">
				{/* Sección de logo y derechos reservados */}
				<div className="footer-logo-section">
					<img className="footer-company-logo" src={logo} alt="logo" />
					<p>Derechos reservados © 2023 por Departamentos Vargas</p>
				</div>
			</div>

			<div className="footer-section3">
				{/* Sección de contactos */}
				<div className="footer-contact-section">
					<div className="footer-description3">
						<p>Contacto</p>
					</div>

					<div className="footer-contact">

						<a href="mailto:dether2011@gmail.com?subject=Departamentos%20Vargas&body=Hola%20marcelo%2C%20...">
							<img className="footer-contact-icon" src={gmail} alt="gmail" />
							<p>dether2011@gmail.com</p>
						</a>
					</div>

					<div className="footer-contact">
						<a
							aria-label="Chat on WhatsApp"
							href="https://wa.me/+543644130578?text=Hola%20Marcelo%20me%20comunico%20por%20los%20departamentos,%20desde%20la%20pagina%20web"
						>
							<img className="footer-contact-icon" src={cel} alt="phone" />
							<p>+54 3644 130578</p>
						</a>
					</div>

					<div className="footer-contact">
						<a
							href="https://goo.gl/maps/Rm5a2WVk1TjKePxWA"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								className="footer-contact-icon"
								src={location}
								alt="location"
							/>
							<p>Mercado AleGon</p>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
