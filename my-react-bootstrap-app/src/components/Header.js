import React from 'react';
import { NavLink } from 'react-router-dom';
import logoSC from '../assets/img/logo_SC.png'
import './Header.scss';

const Header = () => {
  return (
    <header>
     <nav className="navbar">
    <div className="container">
    <a className="navbar-brand"><img src={logoSC} alt="Logo Sonia Casanova" /></a>
    <div className="">
      <ul className="m-0 list-unstyled d-flex flex-row gap-4">
        <li className="nav-item">
          <span className="nav-link line-through" aria-current="page">
          <NavLink to="*" className='text-decoration-none' activeClassName="active">Home</NavLink>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link line-through">
            <NavLink to="/about" className='text-decoration-none' activeClassName="active">About</NavLink></span>
        </li>
        <li className="nav-item">
        <span className="nav-link line-through">
            <NavLink to="/bloglist" className='text-decoration-none' activeClassName="active">Blog</NavLink></span>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  );
}

export default Header;
