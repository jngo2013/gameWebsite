import React from 'react';
import { Container } from 'react-bootstrap';
import './styles.css';

function Loader() {
  return (
    <Container className="Loader">
      <div>
        <i className="fas fa-dice-five Loader-animate"></i>
      </div>
    </Container>
  );
}

export default Loader;
