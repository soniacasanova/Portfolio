import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons'
import arrow from '../assets/img/arrow.png'
import image3 from '../assets/img/Rectangle 3.jpg'
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

    return (
      <section>
        <div className="container">
      {/* Title */}
            <div className="spacings">
          <div className="row">
            <div className="unequal-double-column">
            <h1 className="pb-2">Hi! I am <span>Sonia Casanova</span> <br></br>
              UX/UI Designer & Front End Developer</h1>
            <h4>I create designs and breathe life into them with code, all while loving every moment of the process.</h4>
            </div>
            <div className="column"></div>
          </div>
          </div>
          {/* Skills */}
          <div>
            <div className="row gap-5">
              <div className="column">
              <div className="accordion-card shadow rounded bg-light">
                <div className={`accordion-section ${openSections.includes(1) ? 'open' : ''}`} onClick={() => handleToggle(1)}>
                <div className="accordion-header d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-3">
                  <span className="icon-design fa-lg"><FontAwesomeIcon icon={faPaintBrush}/></span><h4 className="m-0">UX/UI</h4>
                  </div>
                  <div className="" style={getArrowRotation(1)}>
                  <img src={arrow} className="w-75 arrow-skills" alt="arrow" />
                  </div>
                  </div>
                {openSections.includes(1) && <div className="accordion-content mt-4">
                  <p>I appreciate straightforward content layouts, minimalist design aesthetics, and thoughtful user interactions in my work.</p>
                  <h5>Design Tools</h5>
                  <ul className="list-unstyled">
                    <li>Figma</li>
                    <li>Font FontAwesome</li>
                    <li>Pen & Paper</li>
                    <li>Adobe XD</li>
                    <li>Sketch</li>
                    <li>Laws of UX</li>
                    <li>Principles of Lean UX</li>
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
                <p>I enjoy coding from scratch and find joy in transforming ideas into interactive experiences right in the browser.</p>
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
                <div className="spacing-titles">
                <h1 className="m-0">Selected Work</h1>
                </div>
              <div className="grid-container">
              <div className="grid-item">
                <div className="shadow"><img src={image3} alt="project one" /></div>
                <div class="bouncing-loader">
                <div></div>
                <div></div>
                <div></div>
              </div>
              </div>
          </div>
            </div>
            </div>
        </section>

    );
  };
  
  export default Home;