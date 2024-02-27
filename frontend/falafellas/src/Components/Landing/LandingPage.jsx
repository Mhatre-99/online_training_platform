import React from 'react';
import './../../../src/common.css';
import './LandingPage.css';
import LandingPageImage from './LandingPageImage.png';
import Button from 'react-bootstrap/Button';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content-wrapper">
        <div className="text-container">
          <h2>Welcome to Falafellas Learning Hub</h2>
          <p>Empower your team with our comprehensive learning management system. Our platform allows you to efficiently manage, distribute, and monitor various training materials, fostering continuous growth and development among your workforce.</p>
          <div>
          <Button type="submit" className="submit-button">Get Started</Button>
          </div>
        </div>
        <div className="image-container">
          <img src={LandingPageImage} alt="Learning Management System" />
          <div className="image-overlay"></div> {/* Overlay for blending effect */}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
