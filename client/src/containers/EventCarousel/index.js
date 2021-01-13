import React, { Component } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import EditCarouselModal from '../EditCarouselModal';
import axios from 'axios';
import jol4 from './images/jol4.jpeg';
import jol3 from './images/jol3.jpeg';
import jol1 from './images/jol1.jpeg';
import './style.css';



class ControlledCarousel extends Component {
  state = {
    index: 0,
  }

  handleSelect = (selectedIndex, event) => {
    this.setState({ index: selectedIndex });
  }


  render() {

    return (
      <Container fluid className="Container">
        <Carousel className="Carousel" activeIndex={this.state.index} onSelect={this.handleSelect}>
          {/* Slide 1 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jol4}
              alt="First slide"
            />
          
            <Carousel.Caption>
              <h3>Episode {this.props.slide1}</h3>
              <p>{this.props.slide1desc}</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jol3}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Episode {this.props.slide2}</h3>
              <p>{this.props.slide2desc}</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jol1}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Episode {this.props.slide3}</h3>
              <p>{this.props.slide3desc}</p>
            </Carousel.Caption>
          </Carousel.Item>

          </Carousel>
    
        {/* <EditCarouselModal passDataToParent={this.passDataToParent} carouselData={this.state.carouselData}/> */}

      </Container>
    );
  }
}

export default ControlledCarousel;
