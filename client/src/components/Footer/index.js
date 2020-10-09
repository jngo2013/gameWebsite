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
            <img 
              src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p370x247/67529268_665627333913015_2337246147929702400_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=kSPsdRngwLcAX9UJVsW&_nc_ht=scontent-sjc3-1.xx&tp=6&oh=af476855dd55ba3c2227e2b324cb64cc&oe=5FA54906"
              className="Footer-icon" 
            />
          </div>
        </Col>

        <Col lg={2} md={12} className="Footer-col">

          <div className="Footer-col-div">
            <h4>Social Media</h4>
            <ul>
              <li><a href="https://www.facebook.com/DrunkOnGamesChannel" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.youtube.com/channel/UCUgcXszSeKLcAS6rT2h0Fjg" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Lorem Ipsum</a></li>
            </ul>
          </div>



        </Col>

        <Col lg={2} md={12} className="Footer-col">
          <div className="Footer-col-div">
            <h4>Contact</h4>
            <ul>
              <li>someone@gmail.com</li>
              <li>someone@gmail.com</li>
              <li>someone@gmail.com</li>
            </ul>
          </div>


        </Col>
      </Row>

    </Container>

  );
}

export default Footer;