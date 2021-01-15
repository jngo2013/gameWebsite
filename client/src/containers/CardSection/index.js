import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import BootstrapCard from './../../components/BootstrapCard';
import './CardSection.css';

class CardSection extends Component {
  static defaultProps = {
    info: [
      {
        title: "Legacy Games",
        description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        title: "Board Games",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    ]
  }

  render() {
    return (
      <Container fluid className="CardSection-container">
        <div>

          <Row className="CardSection-row">
            <BootstrapCard page="LegacyGames" title={this.props.info[0].title} description={this.props.info[0].description}/>
            <BootstrapCard page="ShortTermGames" title={this.props.info[1].title} description={this.props.info[1].description}/>
          </Row>

        </div>
      </Container>
    );
  }
}

export default CardSection;
