import React from "react";
import './AboutMe.scss'
import portrait from '../assets/img/Rectangle 5.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";


const AboutMe = () => {
    return (
        <section>
            <div className="container">
      {/* Title */}
            <div className="spacings-lg-top spacings-sm-bottom">
          <div className="row">
            <div className="unequal-double-column">
            <h1 className="pb-2">I design & build digital products</h1>
            </div>
            <div className="column"></div>
          </div>
          </div>
            </div>
            <div className="portrait">
          <img src={portrait} alt="portrait" />
          </div>
          <div className="container px-5 spacings-sm-top spacings-lg-bottom ">
            <p className="container-text">Hello, I'm Sonia – a dedicated Front End Developer and UX/UI Designer from the vibrant streets of Barcelona, with a passion for solving problems and continuous learning. With a background in design, I embarked on a transformative adventure in Norway, where I hunt through into the world of coding, teaching myself the intricacies of web development. 
                <br></br><br></br>Returning to my roots, I immersed myself in the dynamic realm of digital marketing, crafting seamless digital experiences that bridge the gap between design and functionality. My curiosity knew no bounds, leading me to pursue a Full Stack Development postgrad, broadening my skills even further. Recently, I completed a Master's in Project Management, adding a strategic dimension to my expertise.<br></br><br></br>
                When I am not immersed in the digital realm, I find inspiration in my love for traveling, the rhythm of music, captivating series, and the energy I gain from staying fit. Join me on this creative journey, where innovation meets ambition and every project is an opportunity to learn and grow.

                <br></br><br></br><a href="#" className=""><span><FontAwesomeIcon icon={faDownload} /></span> Download my resume</a></p>
          </div>
        </section>
    );
  };
  
  export default AboutMe;