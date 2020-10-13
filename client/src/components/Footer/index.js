import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './styles.css';

function Footer() {
  return (
    <div className="Footer-div">
        <Container className="Footer-container">

        <Row className="Footer-row">

          <Col className="Footer-col" lg={4} md={4} sm={12}>
            <div className="Footer-text">
              <h4>Social Media</h4>
              <ul className="Footer-ul">
                <li><a href="https://www.facebook.com/DrunkOnGamesChannel" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook Footer-facebook"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube Footer-youtube"></i></a></li>
              </ul>
            </div>
          </Col>

          <Col className="Footer-col" lg={4} md={4} sm={12}>
            <Image
              src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p370x247/67529268_665627333913015_2337246147929702400_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=kSPsdRngwLcAX9UJVsW&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=af476855dd55ba3c2227e2b324cb64cc&oe=5FA54906"
              className="Footer-logo"
              roundedCircle
            />
          </Col>

          <Col className="Footer-col" lg={4} md={4} sm={12}>
            <div className="Footer-text">
              <h4>Contact</h4>
              <ul className="Footer-ul">
                <li>something</li>
                <li>something</li>
                <li>something</li>
                <li>something</li>
                <li>something</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default Footer;
