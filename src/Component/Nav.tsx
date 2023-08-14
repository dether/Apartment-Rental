// src/components/Navbar/Navbar.tsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
			{/* <div className="logo" >
				Logo
			</div> */}
			<div className={`nav-links ${isNavOpen ? "open" : ""}`}>
				<NavLink to="/departamentos" className="nav-link" onClick={closeNav}>
					Departamentos
				</NavLink>
				<NavLink to="/services" className="nav-link" onClick={closeNav}>
					Servicios
				</NavLink>
				<NavLink to="/" className="nav-link" onClick={closeNav}>
					Inicio
				</NavLink>
				<NavLink to="/contact" className="nav-link" onClick={closeNav}>
					Contacto
				</NavLink>
				<NavLink to="/locations" className="nav-link" onClick={closeNav}>
					Ubicaciones
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
