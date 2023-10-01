import React from 'react';
import logoSC from '../assets/img/logo_SC.png'
import './Header.scss';

const Header = () => {
  return (
    <header>
     <nav className="navbar">
    <div className="container">
    <a className="navbar-brand"><img src={logoSC} alt="Logo Sonia Casanova" /></a>
    <div className="">
      <ul className="list-unstyled d-flex flex-row gap-5">
        <li className="nav-item">
          <a className="nav-link line-through active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link line-through" href="#">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link line-through" href="#">Blog</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  );
}

export default Header;
