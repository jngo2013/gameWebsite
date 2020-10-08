import React, { Component } from 'react';
import BootstrapCard from './../../components/BootstrapCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './CardSection.css';


class CardSection extends Component {
  render() {
    return (
      <Container fluid className="CardSection-container">
        <div>

          <Row className="CardSection-row">
            <BootstrapCard />
            <BootstrapCard />
          </Row>

        </div>
      </Container>

    );
  }
}

export default CardSection;

// Next steps:
// X 1.  put cards in a container
// X 2.  adjust width
// 3.  remove text
// 4.  add hover effect