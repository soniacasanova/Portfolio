import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import logoSCWhite from '../assets/img/logo_SC_white.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='container py-5 d-flex justify-content-between'>
        <div>
          <a className="navbar-brand"><img src={logoSCWhite} alt="Logo Sonia Casanova White" /></a>
          <p className='pt-5 pb-2 m-0 w-75'>Growing, evolving, and embracing new challenges every step of the way.</p>
          <em className='small m-0'>Portfolio handcrafted by me</em>
        </div>
        <div>
          <ul className='list-unstyled d-flex gap-4'>
            <li className='icon'><a href='https://www.linkedin.com/in/soniacasanova/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedinIn} className='color-light' /></a></li>
            <li className='icon'><a href='mailto:soniacasanovar@gmail.com'><FontAwesomeIcon icon={faEnvelope} className='color-light'/></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
