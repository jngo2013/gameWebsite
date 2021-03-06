import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './styles.css';

function BootstrapCard(props) {
  return (
    <div className='BootstrapCard-div'>
      <Card className="BootstrapCard">
        <Link to={`/${props.page}`}>
          <Card.Img variant="top" src={props.src} />
          <h2 className="BootstrapCard-title">{props.title}</h2>
          <h3 className="BootstrapCard-description">{props.description}</h3>
        </Link>
      </Card>
    </div>
  );
}

export default BootstrapCard;
