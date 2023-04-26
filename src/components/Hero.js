// Hero.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa';
import '../styles/Hero.css';


const Hero = () => {
  return (
    <div className="hero">
      <Container className="hero-container">
        <Row>
          <Col md={6}>
            <div className="overlay">
              <div className="info-box">
                <h2>Plumbing Services</h2>
                <p>
                  Professional plumbing services for residential and commercial properties. Fast, reliable,
                  and affordable.
                </p>
                <div className="phone">
                  <FaPhoneAlt className="phone-icon" />
                  <span>(123) 456-7890</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
