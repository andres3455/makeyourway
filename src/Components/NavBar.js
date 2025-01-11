import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Make Your Way</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#quienes-somos">Quienes Somos</a></li>
        <li><a href="#prendas">Prendas</a></li>
        <li><a href="#redes-sociales">Redes Sociales</a></li>
        <li><a href="#unete">Únete</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;