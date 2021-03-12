import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BootstrapCard from './../../components/BootstrapCard';
import './CardSection.css';

class CardSection extends Component {
  static defaultProps = {
    info: [
      {
        title: "Campaign Games",
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
        <div className="CardSection-content">
          <h2 className="CardSection-content-header">Check out our collection!</h2>

          <Row className="CardSection-row">
            <BootstrapCard
              page="LegacyGames" 
              title={this.props.info[0].title} 
              description={this.props.info[0].description}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg5LUZtYd7aw_ZWC1ktmMhPV3jEc0nJwZVcg&usqp=CAU"
            />

            <BootstrapCard
              page="ShortTermGames" 
              title={this.props.info[1].title}
              description={this.props.info[1].description}
              src="https://images.unsplash.com/photo-1563941402622-4e7a488bcc57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
            />
          </Row>
        </div>
      </Container> 
    );
  }
}

export default CardSection;
