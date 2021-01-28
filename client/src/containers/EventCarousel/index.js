import React, { Component } from 'react';
import { Carousel, Container } from 'react-bootstrap';
// import jol4 from './images/jol4.jpeg';
// import jol3 from './images/jol3.jpeg';
// import jol1 from './images/jol1.jpeg';
import EditCarouselModal from './../EditCarouselModal';
import './style.css';

class ControlledCarousel extends Component {
  state = {
    index: 0,
  }

  handleSelect = (selectedIndex, event) => {
    this.setState({ index: selectedIndex });
  }

  render() {
    // get data from props
    console.log(this.props, "line 20 in event caorusel")
    const { slide1, slide2, slide3, slide1desc, slide2desc, slide3desc, slide1src, slide2src, slide3src, slide1link, slide2link, slide3link, _id, passDataToParent } = this.props;

    return (
      <div>

      
        <Container fluid className="Container">
          <Carousel className="Carousel" activeIndex={this.state.index} onSelect={this.handleSelect}>
            {/* Slide 1 */}
              <Carousel.Item>
                <a href={slide1link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="d-block w-100"
                    src={slide1src}
                    alt="First slide"
                  />
                </a>
                
                <Carousel.Caption>
                  <h3> {slide1}</h3>
                  <p>{slide1desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            
            {/* Slide 2 */}
              <Carousel.Item>
                <a href={slide2link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="d-block w-100"
                    src={slide2src}
                    alt="Second slide"
                  />
                </a>
                
                <Carousel.Caption>
                  <h3> {slide2}</h3>
                  <p>{slide2desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            
            {/* Slide 3 */}
              <Carousel.Item>
                <a href={slide3link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="d-block w-100"
                    src={slide3src}
                    alt="Third slide"
                  />
                </a>
                
                <Carousel.Caption>
                  <h3> {slide3}</h3>
                  <p>{slide3desc}</p>
                </Carousel.Caption>
              </Carousel.Item>
            
            </Carousel>

            
        </Container>

        {/* Edit modal button on homepage */}
        <EditCarouselModal passDataToParent={passDataToParent} _id={_id} />
      </div>
    );
  }
}

export default ControlledCarousel;
