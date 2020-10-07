import React from 'react';
import Card from 'react-bootstrap/Card';
import './BootstrapCard.css';

function BootstrapCard() {
  return (
    <div>
      <Card style={{ width: '30rem' }} className="BootstrapCard">
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1582921017967-79d1cb6702ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
      </Card>
    </div>
  );
}

export default BootstrapCard;