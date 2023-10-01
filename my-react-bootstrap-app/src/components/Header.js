import React from 'react';
import { Link } from 'react-router-dom';
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
          <span className="nav-link line-through active" aria-current="page">
          <Link to="*" className='text-decoration-none'>Home</Link>
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link line-through">
            <Link to="/about" className='text-decoration-none'>About</Link></span>
        </li>
        <li className="nav-item">
        <span className="nav-link line-through">
            <Link to="/blog" className='text-decoration-none'>Blog</Link></span>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
  );
}

export default Header;
