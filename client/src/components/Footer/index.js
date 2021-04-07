import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './styles.css';
import sample2 from './images/sample2.jpg'

function Footer() {
  return (
    <div>
        <Container fluid className="Footer-container">
        <Row className="Footer-row">
          <Col className="Footer-col1">
            <h2>Schedule</h2>
            <ul className="Footer-days">
              <li>Sunday:  3-5</li>
              <li>Monday:  3-5</li>
              <li>Tuesday:  3-5</li>
              <li>Wednesday: 3-5</li>
              <li>Thursday: 3-5</li>
              <li>Friday:  3-5</li>
              <li>Saturday:  3-5</li>
            </ul>
          </Col>

          {/* ===== LOGO ===== */}
          <Col className="Footer-col" lg={4} md={6} sm={12}>
            <Link to="/">
              <Image
                src={sample2}
                className="Footer-logo"
                roundedCircle
              />
            </Link>
          </Col>

          {/* ===== ICONS ===== */}
          <Col className="Footer-col" lg={4} md={6} sm={12}>
            <div className="Footer-text">
              <h4 className="H4Text">Social Media</h4>
              <ul className="Footer-ul">
                <div>
                  <Row className="Footer-icon-row">
                    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook Footer-facebook"></i></a></li>
                    <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube Footer-youtube"></i></a></li>
                    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram Footer-instagram"></i></a></li>
                    <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter Footer-twitter"></i></a></li>
                    <li><a href="mailto:JustSomeRandomEmail@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope Footer-envelope"></i></a></li>
                  </Row>
                </div>
              </ul>
            </div>
          </Col>  
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
