import React from 'react';
import Card from 'react-bootstrap/Card';
import './BootstrapCard.css';

function BootstrapCard() {
  return (
    <div>
      <Card style={{ width: '30rem' }} className="BootstrapCard">
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1582921017967-79d1cb6702ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BootstrapCard;