import React, { Component } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import EditCarouselModal from '../EditCarouselModal';
import jol4 from './images/jol4.jpeg';
import jol3 from './images/jol3.jpeg';
import jol1 from './images/jol1.jpeg';
import './style.css';


class ControlledCarousel extends Component {
  state = {
    index: 0,
    carouselData: {
      slide1: "4",
      slide1desc: "Will Chet ever manage to kill a single Stone Golem?",
      slide2: "3",
      slide2desc: "What are the zealots up to?",
      slide3: "1",
      slide3desc: "The start of our journey to the Jaws of the Lion!",
    }
  }

  handleSelect = (selectedIndex, event) => {
    this.setState({ index: selectedIndex });
  }

  passDataToParent = childData => {
    console.log("i'm connected to the caorusel");
    this.setState({carouselData: childData});
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
                <h3>Episode {this.state.carouselData.slide1}</h3>
                <p>{this.state.carouselData.slide1desc}</p>
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
                <h3>Episode {this.state.carouselData.slide2}</h3>
                <p>{this.state.carouselData.slide2desc}</p>
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
                <h3>Episode {this.state.carouselData.slide3}</h3>
                <p>{this.state.carouselData.slide3desc}</p>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
    
        <EditCarouselModal passDataToParent={this.passDataToParent} carouselData={this.state.carouselData}/>
      </Container>
    );
  }
}

export default ControlledCarousel;
