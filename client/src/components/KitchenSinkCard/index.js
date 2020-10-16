import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';

function KitchenSinkCard(props) {
  return (
    <div className="KitchenSinkCard-div">
      <Card style={{ width: '21rem' }} bg="secondary" >

        <Card.Img variant="top" src="https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />

        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroupItem><i class="fas fa-user-friends"></i> {props.players}</ListGroupItem>
          <ListGroupItem><i class="fas fa-clock"></i> {props.time}</ListGroupItem>
        </ListGroup>

        <Card.Body>
          <Card.Link href={props.realRulesLink}>Real Rules</Card.Link>
          <Card.Link href={props.drunkRulesLink}>Drunk Rules</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default KitchenSinkCard;
