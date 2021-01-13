import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';

function KitchenSinkCard(props) {
  // if(props.src === undefined){
  //   console.log("there's no picture");
  // } else {
  //   console.log("there's a picture");
  // }

  return (
    <div className="KitchenSinkCard-div">
      <Card style={{ width: '21rem', height: '37rem' }} bg="secondary">

        <Card.Img variant="top" src={props.src === undefined ? "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=859&q=80" : props.src} className="KitchenSinkCard-img" />

        <Card.Body className="overflow-auto">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text >{props.description}</Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroupItem><i class="fas fa-user-friends"></i> {props.players}</ListGroupItem>
          <ListGroupItem><i class="fas fa-clock"></i> {props.time}</ListGroupItem>
        </ListGroup>

      </Card>
    </div>
  );
}

export default KitchenSinkCard;
