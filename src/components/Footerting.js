import React from 'react';
import { Container, Row, Col, ListGroup, Navbar, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../styles/Footerting.css"

export default function PlumberFooter() {
  return (
    <Navbar className="text-center footerting text-lg-start text-muted">
      <Container className="py-4 footerting">
        <Row className="justify-content-between footerting">
          <Col md="auto" className="footerting">
            <h5 className="text-uppercase fw-bold mb-4">Contact Us</h5>
            <p>
              <FontAwesomeIcon icon={faPhone} className="me-2 text-secondary" />
              +1 (555) 123-4567
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="me-3 text-secondary footerting" />
              info@plumberexample.com
            </p>
          </Col>

          <Col md="auto">
            <h5 className="text-uppercase fw-bold mb-4">Important Links</h5>
            <ListGroup variant="flush" className="footerting mb-3">
              <ListGroup.Item className="footerting"><NavLink href="#" className="text-reset">Returns Policy</NavLink></ListGroup.Item>
              <ListGroup.Item className="footerting"><NavLink href="#" className="text-reset">Privacy Policy</NavLink></ListGroup.Item>
              <ListGroup.Item className="footerting"><NavLink href="#" className="text-reset">GDPR Compliance</NavLink></ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md="auto">
            <h5 className="text-uppercase fw-bold mb-4">Follow Us</h5>
            <NavLink href="#" className="me-3 text-reset">
              <FontAwesomeIcon icon={faFacebookF} className="text-secondary" size="lg" />
            </NavLink>
            <NavLink href="#" className="me-3 text-reset">
              <FontAwesomeIcon icon={faTwitter} className="text-secondary" size="lg" />
            </NavLink>
            <NavLink href="#" className="text-reset">
              <FontAwesomeIcon icon={faInstagram} className="text-secondary" size="lg" />
            </NavLink>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
