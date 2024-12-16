import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons'
import arrow from '../assets/img/arrow.png'
import mouse from '../assets/img/Nutrific/mouse.png'
import coverImage from '../assets/img/Nutrific/portada_nutrific.png'
import './Home.scss'


const Home = () => {

  const [openSections, setOpenSections] = useState([]);

  const handleToggle = (section) => {
    setOpenSections(prevOpenSections => {
      if (prevOpenSections.includes(section)) {
        // If the section is already open, close it
        return prevOpenSections.filter(openSection => openSection !== section);
      } else {
        // If the section is closed, open it
        return [...prevOpenSections, section];
      }
    });
  };

  const getArrowRotation = (section) => {
    return openSections.includes(section) ? { transform: 'rotate(90deg)', transition: 'transform 0.3s ease' } : {};
  };



  const projects = [
    { id: 1, name: 'Crafting a User-Friendly Nutrition Hub', imageCover: coverImage },
  ];

    return (
      <section>
        <div className="container">
      {/* Title */}
            <div className="spacings">
          <div className="row animate__animated animate__fadeInUp">
            <div className="unequal-double-column">
            <h1 className="pb-2 text-container">Hi! I am <span className="text">Sonia Casanova</span> <br></br>
              Product Designer & Front End Developer</h1>
            <p className="subtitle">I create designs and breathe life into them with code, all while loving every moment of the process.</p>
            <a className="go-to text-decoration-none" href="https://www.behance.net/gallery/184080049/UI-Design-Challenges-Part-1" target='_blank' rel='noopener noreferrer'>Go check my UI Design Challenges 
             <img src={mouse} className="pointing" alt="pointing hand" /></a>
            </div>
            <div className="column"></div>
          </div>
          </div>
          {/* Skills */}
          <div className="animate__animated animate__fadeInUp">
            <div className="row gap-5">
              <div className="column">
              <div className="accordion-card shadow rounded bg-light">
                <div className={`accordion-section ${openSections.includes(1) ? 'open' : ''}`} onClick={() => handleToggle(1)}>
                <div className="accordion-header d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                  <span className="icon-design fa-lg"><FontAwesomeIcon icon={faPaintBrush}/></span><h4 className="m-0">Product Design</h4>
                  </div>
                  <div className="" style={getArrowRotation(1)}>
                  <img src={arrow} className="w-75 arrow-skills" alt="arrow" />
                  </div>
                  </div>
                {openSections.includes(1) && <div className="accordion-content mt-4">
                  <h5>Design Tools</h5>
                  <ul className="list-unstyled">
                    <li>User-Centered Design</li>
                    <li>Interactive Prototyping</li>
                    <li>Design systems</li>
                    <li>User Research & Insights</li>
                    <li>Usability Testing</li>
                    <li>Responsive Design Principles</li>
                    <li>Accessibility Design</li>
                    <li>UX Metrics Analysis</li>
                    <li>A/B Testing Setup and Analysis</li>
                  </ul>
                  </div>}
                </div>
                </div>
              </div>
              <div className="column">
                <div className="accordion-card shadow rounded bg-light">
                <div className={`accordion-section ${openSections.includes(2) ? 'open' : ''}`} onClick={() => handleToggle(2)}>
                <div className="accordion-header d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <span className="icon-design fa-lg pr-2"><FontAwesomeIcon icon={faCode}/></span>
                  <h4 className="m-0">Front End Development</h4>
                  </div>
                  <div className="fa-lg" style={getArrowRotation(2)}>
                  <img src={arrow} className="w-75 arrow-skills" alt="arrow" />
                  </div>
                  </div>
                {openSections.includes(2) && 
                <div className="accordion-content mt-4">
                  <h5>Languages I Speak</h5>
                  <ul className="list-unstyled">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SaSS</li>
                    <li>JavaScript</li>
                    <li>HubL</li>
                    <li>Git</li>
                  </ul>
                  <h5>Dev Tools</h5>
                  <ul className="list-unstyled">
                    <li>Bootstrap</li>
                    <li>Tailwind</li>
                    <li>React</li>
                    <li>Visual Studio Code</li>
                    <li>BitBucket</li>
                    <li>GitHub</li>
                    <li>Hubspot</li>
                    <li>Terminal</li>
                  </ul>
                  </div>}
                </div>
              </div>
              </div>
              </div>
              </div>
              <div className="spacings">
                {/*<div className="spacing-titles">
                <h1 className="m-0">Projects</h1>
                </div>*/}
        <div>
          <div className="spacings-sm-bottom row-responsive animate__animated animate__fadeInUp">
          {projects.map(project => (
              <div className='row row-responsive ' key={project.id}>
                <div className="column justify-content-center">
                  <div className="blog-home-text">
                    <div className="group">
                      <div>
                      <Link to={`/project/${project.id}`}>
                        <h2 className="display-4">{project.name} <img src={mouse} alt='mouse' width="30px"/></h2>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column p-0">
                <div className="img-box-project text-center">
                <Link to={`/project/${project.id}`}>
                  <img src={coverImage} alt='cover project Nutrific' />
                  </Link>
                </div>
                </div>
                </div>
            ))}
          </div>
        </div>
            </div>
            </div>
        </section>

    );
  };
  
  export default Home;