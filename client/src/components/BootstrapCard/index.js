import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './BootstrapCard.css';

function BootstrapCard(props) {
  return (
    <div>
      <Card style={{ width: '30rem' }} className="BootstrapCard">
        <Link to={`/${props.page}`}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1582921017967-79d1cb6702ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
        </Link>
      </Card>
    </div>
  );
}

export default BootstrapCard;