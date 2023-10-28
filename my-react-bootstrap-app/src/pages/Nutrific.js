import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectPages.scss'
import bannerNutrific from '../assets/img/Nutrific/nutrific_mockup_1.jpg'
import satoshi from '../assets/img/Nutrific/satoshi.jpg'
import asgard from '../assets/img/Nutrific/asgard.jpg'
import colorPalette from '../assets/img/Nutrific/color_palette.png'
import components from '../assets/img/Nutrific/components.png'
import style from '../assets/img/Nutrific/style.jpg'
import wireframes from '../assets/img/Nutrific/wireframes.jpg'
import mvp from '../assets/img/Nutrific/mvp.png'
function Nutrific() {
    const { projectId } = useParams();

    // Fetch project data based on the projectId and render it
    // ...

    return (
        <section>
            <div className="container" key={projectId}>
                {/* Intro */}
                <div className='spacings-lg-top spacings-md-bottom animate__animated animate__fadeInUp'>
                    <div className='row'>
                        <div className='equal-double-column'>
                            <h2 className='display-5'>Nutrific</h2>
                            <p></p>
                        </div>
                        <div className="column">
                            <p>Nutrific is a comprehensive online platform dedicated to promoting healthy living, offering a range of services such as personalized meal plans, nutritional consultations, and educational resources for clients seeking to improve their dietary habits and overall well-being.</p>
                        </div>
                    </div>
                    <div className='spacings-sm-top'>
                        <div className='row'>
                            <div className='equal-double-column'>
                                <button class="learn-more">
                                    <span class="circle" aria-hidden="true">
                                        <span class="icon arrow"></span>
                                    </span>
                                    <span class="button-text">Final Design</span>
                                </button>
                            </div>
                            <div className="column">
                                <div className="auto-grid">
                                    <div className="grid-item-project">
                                        <p className='project-details'>Role</p>
                                        <ul className='list-unstyled'>
                                            <li>UI Designer</li>
                                            <li>UX Designer</li>
                                        </ul>
                                    </div>
                                    <div className="grid-item-project">
                                        <p className='project-details'>Client</p>
                                        <ul className='list-unstyled'>
                                            <li>Nutrific</li>
                                        </ul>
                                    </div>
                                    <div className="grid-item-project">
                                        <p className='project-details'>Time</p>
                                        <ul className='list-unstyled'>
                                            <li>One Week</li>
                                        </ul></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Intro Img */}
            <div className="project-banner animate__animated animate__fadeInUp">
                <img src={bannerNutrific} alt="website project mockup" />
            </div>
            {/* First section */}
            <div className="container">
                <div className='spacings-md animate__animated animate__fadeInUp'>
                    <div className='row'>
                        <div className='equal-double-column'>
                            <h2 className='display-5'>Main Goal</h2>
                        </div>
                        <div className="column">
                            <p>The main goal of this project is to create an inviting, user-friendly, and informative website that encourages visitors to explore the services and resources offered by the Nutrition Center. The design must convey a sense of trustworthiness, expertise, and approachability to engage potential clients, while also providing easy access to essential information and services.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Second section */}
            <div className='spacings-md padding-md bg-section'>
            <div className='container'>
                        <div className='row'>
                            <div className='equal-double-column'>
                                <h2 className='display-5'>Key Insights</h2>
                            </div>
                            <div className="column">
                                <p>By conducting a study of various competitors, I have discovered interesting insights that have assisted me in determining how to approach the MVP solution.</p>
                                <ul className='list-unstyled project-list'>
                                    <li>Users prioritize service information and the center's nutrition approach, emphasizing the need for clear, accessible service descriptions and philosophy statements.</li>
                                    <li>Many users prefer accessing nutrition and health content on-the-go via mobile devices, making responsive design essential for a seamless experience.</li>
                                    <li>Visually appealing content with high-quality images of fresh, vibrant foods and well-designed graphics attracts users, conveying a sense of health and freshness, making it more appealing.</li>
                                    <li>Personal success stories and client testimonials create an emotional connection and demonstrate the center's positive impact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            {/* Third section */}
            <div className=''>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='display-5'>Design System</h2>
                    </div>
                <div className='spacings-sm font-images'>
                <img src={satoshi} alt="Satoshi font image" width='100%'/>
                <img src={asgard} alt="Asgard font image" width='100%'/>
                </div>
            </div>
            </div>
             {/* Fourth section */}
             <div className="container">
                <div className='spacings'>
                    <div className='row'>
                        <div className='equal-double-column'>
                            <h2 className='display-5'>Color Palette</h2>
                        </div>
                        <div className="column">
                            <p>The choice of a white background signifies purity, cleanliness, and clarity, reflecting the core values of health and nutrition. Meanwhile, the predominant green color embodies freshness, vitality, and the essence of organic foods, evoking a feeling of rejuvenation. The addition of a deep color brings depth and sophistication to the design, ensuring a well-rounded visual experience. When combined, these colors work in harmony to create an environment that exudes both a nurturing and professional ambiance.</p>
                        </div>
                    </div>
                    <div className='spacings-sm-top text-left'>
                        <img src={colorPalette} alt="color palette" width="70%"/>
                    </div>
                </div>
            </div>
            {/* Fifth section 
            <div className='spacings'>
            <div className='container text-center'>
                <div>
                    <h2 className='display-5'>Components</h2>
                    </div>
                <div className='spacings-sm'>
                <img src={components} alt="components image" width='100%' />
                </div>
            </div>
            </div>*/}
             {/* Sixth section */}
             <div>
            <div className='padding-md-top bg-section'>
            <div className='container'>
                        <div className='row'>
                            <div className='equal-double-column'>
                                <h2 className='display-5'>Style</h2>
                            </div>
                            <div className="column">
                                <p> The use of high-quality images featuring fresh, vibrant foods and images of people leading healthy, happy lives enhances the website's visual appeal and reinforces its commitment to health and nutrition. These images not only engage but also inspire visitors.</p>
                                
                            </div>
                        </div>
                    </div>
                    <div className='project-banner spacings-sm-top text-left'>
                        <img src={style} alt="style" width='100%'/>
                    </div>
            </div>
            </div>
             {/* Seventh section */}
             <div className='spacings-lg-top spacings-sm-bottom'>
            <div className='container text-center'>
                <div>
                    <h2 className='display-5'>Wireframes</h2>
                    </div>
                <div className='spacings-sm'>
                <img src={wireframes} alt="wireframes" width='100%' />
                </div>
            </div>
            </div>
            {/* Seventh section */}
            <div className=''>
            <div className='container'>
                <div className='text-center'>
                    <h2 className='display-5'>Final Design</h2>
                    </div>
                <div className='spacings-sm-top spacings-lg-bottom text-center'>
                <img src={mvp} alt="mvp" width='100%' />
                </div>
                <div className='row spacings-lg-bottom'>
                        <div className='equal-double-column'>
                            <h2 className='display-5'>Color Palette</h2>
                        </div>
                        <div className="column">
                        <p>In today's digital landscape, people access websites on various devices. A responsive design ensures that users can have a consistent and enjoyable experience, whether they are using a desktop computer or a mobile device.</p>

                        </div>
                    </div>
            </div>
            </div>
        
        </section>
    );
}

export default Nutrific;
