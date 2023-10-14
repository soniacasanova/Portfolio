import React from "react";
import './Blog.scss'
import imageBlog from '../assets/img/Rectangle 6.png'


const Blog = () => {
    return (
        <section>
            <div className="">
      {/* Title */}
        <div className="spacings">
         {/*} <div className="row">
            <div className="unequal-double-column">
            <h1 className="pb-2">Journey in Design, Code, and Creativity</h1>
            </div>
            <div className="column"></div>
    </div>*/}
          </div>
          <div className="spacings-lg-bottom">
             {/* article 1 */}
            <div className="row spacings-sm-bottom row-responsive animate__animated animate__fadeInUp">
              <div className="column p-0">
                <div className="img-box-left">
                <img src={imageBlog} alt="Image Blog"/>
                </div>
              </div>
              <div className="column justify-content-center">
                <div className="blog-home-text">
                  <div className="group">
                  <span className="tag">UX/UI</span>
                    <h2 className="display-4">The Need for Speed: Enhancing User Experiences Through Performance Optimization in Design</h2>
                    <em className="font-small">COMING SOON</em>
                  </div>
                 {/* <div className="group2"><em>21 de Septiembre de 2023</em></div>*/}
                </div>
              </div>
            </div>
            {/* article 2 
            <div className="row spacings-sm-bottom">
              <div className="column">
              <div className="blog-home-text">
                <div className="group">
                <span className="tag">CODE</span>
                    <h2 className="display-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                </div>
                {/* <div className="group2"><em>21 de Septiembre de 2023</em></div>
                </div>
              </div>
              <div className="column">
              <div className="img-box-right">
                <img src={imageBlog} alt="Image Blog"/>
                </div>
              </div>
            </div>*/}
          </div>
            </div>
        </section>
    );
  };
  
  export default Blog;