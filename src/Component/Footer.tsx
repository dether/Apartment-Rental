import React, { useState } from "react";

import gmail from "../../public/icon/gmail.svg";
import cel from "../../public/icon/cel.svg";
import location from "../../public/icon/location.svg";
import logo from "../../public/logo/LOGO.png";

const Footer: React.FC = () => {
	const [isCopiedEmail, setIsCopiedEmail] = useState(false);
	const [isCopiedNumber, setIsCopiedNumber] = useState(false);

	const handleCopyEmail = () => {
		const email = "dether2011@gmail.com";
		navigator.clipboard
			.writeText(email)
			.then(() => {
				setIsCopiedEmail(true);
				setTimeout(() => {
					setIsCopiedEmail(false);
				}, 2000);
			})
			.catch((error) => {
				console.error(
					"Error al copiar la dirección de correo electrónico:",
					error
				);
			});
	};
	const handleCopyNumber = () => {
		const number = "+543644130578";
		navigator.clipboard
			.writeText(number)
			.then(() => {
				setIsCopiedNumber(true);
				setTimeout(() => {
					setIsCopiedNumber(false);
				}, 2000);
			})
			.catch((error) => {
				console.error(
					"Error al copiar la dirección de correo electrónico:",
					error
				);
			});
	};

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
						<a onClick={handleCopyEmail}>
							<img className="footer-contact-icon" src={gmail} alt="gmail" />
							<p>dether2011@gmail.com</p>
						</a>
						{isCopiedEmail && <span className="copied-message">Copiado</span>}
					</div>

					<div className="footer-contact">
						<a onClick={handleCopyNumber}>
							<img className="footer-contact-icon" src={cel} alt="phone" />
							<p>+54 3644 130578</p>
						</a>
						{isCopiedNumber && <span className="copied-message">Copiado</span>}
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
