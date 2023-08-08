import React from 'react';
import "../styles/Navbar.css"
import { Link } from 'react-router-dom';



const Navbar: React.FC = () => {

  return (
    <div className="container-navbar">
    <Link to="/" className='logo'> Home </Link>


    <nav className="navbar">
    <Link to="/departments" className='a'> Departamentos </Link>
    <Link to="/services" className='a'> Servicios </Link>
    <Link to="/contact" className='a'> Contacto </Link>
    <Link to="/locations" className='a'> Ubicaciones </Link>
    </nav>
  </div>
  )
}

export default Navbar