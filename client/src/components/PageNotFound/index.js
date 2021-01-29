import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.css';

function PageNotFound(props) {
  return (
    <Container className="PageNotFound-container">
      <h1>{props.message}</h1>
      <img 
        src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" 
        alt="error page" 
        className="PageNotFound-img"
      />
      <div className="PageNotFound-link"><a href="/">Click here to go back to the home page.</a></div>
    </Container>
  );
}

export default PageNotFound;
