import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import jol4 from './images/jol4.jpeg';
import jol3 from './images/jol3.jpeg';
import jol1 from './images/jol3.jpeg';
import './style.css';
 


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className="Container">
    <Carousel className="Carousel" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jol4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Episode 4</h3>
          <p>Will Chet ever manage to kill a single Stone Golem?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jol3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Episode 3</h3>
          <p>What are the zealots up to?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={jol1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Episode 1</h3>
          <p>
            The start of our journey to the Jaws of the Lion!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Container>
  );
}

export default ControlledCarousel;