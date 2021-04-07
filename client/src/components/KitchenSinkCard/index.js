import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';

function KitchenSinkCard(props) {
  return (
    <div className="KitchenSinkCard-div">
      <Card bg="secondary" className="KitchenSinkCard">
        {/* Card image */}
        <div className="KitchenSinkCard-img-div">
          <Card.Img 
              variant="top" 
              src={props.src}
              className="KitchenSinkCard-img" 
          />
        </div>
          
        {/* Card body */}
        <Card.Body className="KitchenSinkCard-body">
          <Card.Title>{props.name}</Card.Title>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroupItem class="list-group-item">
            <span><i class="fas fa-user-friends"></i> {props.players}</span>
            <span className="list-group-divider">|</span>
            <span className="list-group-time"><i class="fas fa-clock"></i> {props.time}</span>
            <span className="list-group-divider">|</span>
            <span><i class="fas fa-beer"></i> {props.drunkRating}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}

export default KitchenSinkCard;
