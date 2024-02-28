import React from 'react'
import AboutImage from './aboutimage.jpg'
import './../../../src/common.css';
import './About.css'



const About = () => {
    return (
        <div>
            <div className="about-section-container">
                <div className="about-section-image-container">
                    <img src={AboutImage} alt="" />
                </div>
                <div className="about-section-text-container">
                    <p className="primary-subheading">About</p>
                    <h2 className="primary-heading">
                        Transforming Workplace Learning with Falafellas
                    </h2>
                    <p className="primary-text">
                        Our mission is to provide companies with the tools they need to
                        cultivate a culture of continuous learning and development.</p>
                    <p className="primary-text">
                        We believe that the onboarding process should be accessible and empowering.
                    </p>
                    {/* <div className="about-buttons-container">
          <button className="secondary-button" >Sign up</button>
        </div> */}
                </div>
            </div>
        </div>)
}

export default About