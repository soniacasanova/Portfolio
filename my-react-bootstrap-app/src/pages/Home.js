import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faCode } from '@fortawesome/free-solid-svg-icons'
import arrow from '../assets/img/arrow.png'
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
            <h5>I create designs and breathe life into them with code, all while loving every moment of the process.</h5>
            </div>
            <div className="column"></div>
          </div>
          </div>
          {/* Skills */}
          <div>
            <div className="row gap-5">
              <div className="column">
              <div className="accordion-card shadow rounded">
                <div className={`accordion-section ${openSections.includes(1) ? 'open' : ''}`} onClick={() => handleToggle(1)}>
                <div className="accordion-header d-flex justify-content-between">
                  <div className="d-flex gap-3">
                  <span className="icon-design fa-lg"><FontAwesomeIcon icon={faPaintBrush}/></span><h5>UX/UI</h5>
                  </div>
                  <div className="" style={getArrowRotation(1)}>
                  <img src={arrow} className="w-75" alt="arrow" />
                  </div>
                  </div>
                {openSections.includes(1) && <div className="accordion-content mt-4">
                  <p>I appreciate straightforward content layouts, minimalist design aesthetics, and thoughtful user interactions in my work.</p>
                  <h6>Design Tools</h6>
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
                <div className="accordion-card shadow rounded">
                <div className={`accordion-section ${openSections.includes(2) ? 'open' : ''}`} onClick={() => handleToggle(2)}>
                <div className="accordion-header d-flex justify-content-between">
                <div className="d-flex gap-3">
                  <span className="icon-design fa-lg pr-2"><FontAwesomeIcon icon={faCode}/></span><h5>Front End Development</h5>
                  </div>
                  <div className="fa-lg" style={getArrowRotation(2)}>
                  <img src={arrow} className="w-75" alt="arrow" />
                  </div>
                  </div>
                {openSections.includes(2) && <div className="accordion-content">Content of section 2</div>}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        {/* Projects */}
        <div className="spacings"></div>
      </section>

    );
  };
  
  export default Home;