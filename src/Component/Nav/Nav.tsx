// src/components/Navbar/Navbar.tsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import keys from "../../../public/logo/keys.png";

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
					<NavLink to="/Apartment-Rental" className="nav-link" onClick={closeNav}>
						Inicio
					</NavLink>
					<NavLink to="/Apartment-Rental/departaments" className="nav-link" onClick={closeNav}>
						Departamentos
					</NavLink>
					<div className="logo">
						<img src={keys} alt="logo" />
					</div>
					<NavLink to="/Apartment-Rental/services" className="nav-link" onClick={closeNav}>
						Servicios
					</NavLink>
					<NavLink to="/Apartment-Rental/contact" className="nav-link" onClick={closeNav}>
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
