import React from "react";
import "./componentCSS/HomePage.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Left Side */}
      <div className="home-left">
        <div className="name">Augustine Jacob</div>
        <div className="role">Software Engineer</div>

        <img
          src="me.jpg" // Replace with actual path
          alt="Augustine Jacob"
        />

        <Button className="email-button" href="mailto:AugustineJacobCareer@protonmail.com">
          Next
        </Button>
      </div>

      {/* Right Side */}
      <div className="home-right">
        <div className="about-title">About Me</div>
        <hr />
        <div className="about-desc">
          I am an artist and software engineer based in Detroit, Michigan. <br />
          I graduated from Wayne State University with a B.E. in Computer Science. 
          In my free time, I enjoy creating things. Whether that's paintings, polaroids, or software projects. 
          I’m always open to discussing my projects or potential job opportunities. <br />
          Feel free to reach out!
        </div>
        <div className="btn-group">
          <Link to="/portfolio">
            <Button variant="outline-dark">
              Portfolio
            </Button>
          </Link>
          
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/kals_polaroids/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/augustinekaljacob/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
