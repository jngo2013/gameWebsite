import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.css';

function GameNotFound(props) {
  return (
    <Container className="GameNotFound-container">
      {/* <h1>Sorry!  But that game doesn't exist.</h1> */}
      <h1>{props.notFound}</h1>
      <img 
        src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" 
        alt="meeples" 
        className="GameNotFound-img"
      />
      <div className="GameNotFound-link"><a href="/">Click here to go back to the home page.</a></div>
    </Container>
  );
}

export default GameNotFound;
