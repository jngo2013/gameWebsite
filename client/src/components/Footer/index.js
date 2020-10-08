import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

function Footer() {
  return(
    <Container fluid className="Footer">
      <Row>
        <Col lg={8} md={12} className="test">Logo</Col>
        <Col lg={2} md={12} className="test">Social Media</Col>
        <Col lg={2} md={12} className="test">Contact</Col>
      </Row>
      
    </Container>
    
  );
}

export default Footer;