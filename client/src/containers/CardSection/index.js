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
            <BootstrapCard page="LegacyGames" />
            <BootstrapCard page="ShortTermGames" />
          </Row>

        </div>
      </Container>

    );
  }
}

export default CardSection;