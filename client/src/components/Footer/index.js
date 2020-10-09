import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.css';

function Footer() {
  return (
    <Container fluid className="Footer">
      <Row>
        <Col lg={8} md={12} className="Footer-col">
          <div className="Footer-col-div">
            Logo
          </div>
        </Col>

        <Col lg={2} md={12} className="Footer-col">

          <div className="Footer-col-div">
            <h4>Social Media</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Youtube</li>
            </ul>
          </div>



        </Col>

        <Col lg={2} md={12} className="Footer-col">
          <div className="Footer-col-div">
            <h4>Contact</h4>
            <ul>
              <li>Something</li>
              <li>Something</li>
              <li>Something</li>
            </ul>
          </div>


        </Col>
      </Row>

    </Container>

  );
}

export default Footer;