import React, { Component } from 'react';
import BootstrapCard from './../../components/BootstrapCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class CardSection extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <BootstrapCard />
            <BootstrapCard />
          </Row>
        </Container>
      </div>
    );
  }
}

export default CardSection;

// Next steps:
// 1.  put cards in a container
// 2.  adjust width
// 3.  remove text
// 4.  add hover effect