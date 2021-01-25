import React, { Component } from 'react';
import AddLegacyModal from './../AddLegacyModal';
import AddShortModal from './../AddShortModal';
import EditCarouselModal from './../EditCarouselModal';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import './styles.css';


class SecretPage extends Component {
  state = {
    carouselData: "",
  }

  async componentDidMount() {
    // get data from the database for the carousel
    try {
      let response = await axios.get("/api/eventcarousel/");
      // convert response.data into an array
      let carouselDataArr = Object.entries(response.data)[0][1];

      this.setState({carouselData: carouselDataArr});
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    // get id from the carousel data
    const { _id } = this.state.carouselData;

    return (
      <Container>
        <div>
          <Row className="SecretPage-row1">
            <div>
              <h1>You've reached the Secret Page!</h1>
              <h2>What would you like to do?</h2>
            </div> 
          </Row>
          
          <Row className="SecretPage-row2">
            <AddLegacyModal />
            <AddShortModal />
            <EditCarouselModal _id={_id} onSecret={true} />
          </Row>
          
        </div>
      </Container>  
    );
  }
}

export default SecretPage;
