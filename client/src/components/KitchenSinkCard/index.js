import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './styles.css';

function KitchenSinkCard(props) {
  return (
    <div className="KitchenSinkCard-div">
      {/* <Card style={{ width: '21rem', height: '37rem' }} bg="secondary" className="KitchenSinkCard"> */}
      <Card bg="secondary" className="KitchenSinkCard">

        
          <Card.Img 
            variant="top" 
            // if 'props.src' is undefined, show the replacement image, otherwise show props.src
            // src={ props.src === undefined 
            //     ? "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=859&q=80" 
            //     : props.src } 
            src={props.src}
            className="KitchenSinkCard-img" 
          />
        
        

        {/* <Card.Body className="overflow-auto"> */}
        <Card.Body className="KitchenSinkCard-body">
          <Card.Title>{props.name}</Card.Title>
          {/* <Card.Text >{props.description}</Card.Text> */}
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroupItem class="list-group-item">
            <span><i class="fas fa-user-friends"></i> {props.players}</span>
            <span className="list-group-divider">|</span>
            <span className="list-group-time"><i class="fas fa-clock"></i> {props.time}</span>
            <span className="list-group-divider">|</span>
            <span><i class="fas fa-beer"></i> {props.drunkRating}%</span>
          </ListGroupItem>
        </ListGroup>

      </Card>
    </div>
  );
}

export default KitchenSinkCard;
