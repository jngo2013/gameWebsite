import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function KitchenSinkCard() {
  return (
    <div>
      <Card style={{ width: '18rem' }} bg="secondary">

        <Card.Img variant="top" src="https://images.unsplash.com/photo-1563811771046-ba984ff30900?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />

        <Card.Body>
          <Card.Title>Game Name</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroupItem><i class="fas fa-user-friends"></i> 1-4</ListGroupItem>
          <ListGroupItem><i class="fas fa-clock"></i> 60 min.</ListGroupItem>
        </ListGroup>

        <Card.Body>
          <Card.Link href="#">Real rules link</Card.Link>
          <Card.Link href="#">Drunk rules link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default KitchenSinkCard;
