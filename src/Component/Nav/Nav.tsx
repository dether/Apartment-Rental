// src/components/Navbar/Navbar.tsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import keys from "../../utils/logo/keys.png";

const Nav: React.FC = () => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	const closeNav = () => {
		setIsNavOpen(false);
	};

	return (
		<div>
			<nav className={`navbar ${isNavOpen ? "open" : ""}`}>
				<div className={`nav-links ${isNavOpen ? "open" : ""}`}>
					<NavLink to="/" className="nav-link" onClick={closeNav}>
						Inicio
					</NavLink>
					<NavLink to="/departments" className="nav-link" onClick={closeNav}>
						Departamentos
					</NavLink>
					<div className="logo">
						<img src={keys} alt="logo" />
					</div>
					<NavLink to="/services" className="nav-link" onClick={closeNav}>
						Servicios
					</NavLink>
					<NavLink to="/contact" className="nav-link" onClick={closeNav}>
						Contacto
					</NavLink>
				</div>

				<div className="menu-icon" onClick={toggleNav}>
					<div className={`bar ${isNavOpen ? "open" : ""}`}></div>
					<div className={`bar ${isNavOpen ? "open" : ""}`}></div>
					<div className={`bar ${isNavOpen ? "open" : ""}`}></div>
				</div>
			</nav>
		</div>
	);
};

export default Nav;
