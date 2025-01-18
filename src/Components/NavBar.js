import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Make Your Way</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/quienes-somos">Quienes Somos</Link></li>
        <li><Link to="/prendas">Prendas</Link></li>
        <li><Link to="/redes-sociales">Redes Sociales</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
