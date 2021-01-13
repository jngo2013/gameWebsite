import React, { Component } from 'react';
import CardSection from "../CardSection";
import axios from 'axios';
import ControlledCarousel from "../EventCarousel";
import EditCarouselModal from './../EditCarouselModal';
import "./styles.css";

class Home extends Component {
  state = {
    carouselData: "",
    authenticated: true,
  }

  // function to get data from the child so the carouselData rerenders
  passDataToParent = childData => {
    this.setState({carouselData: childData});
  }

  async componentDidMount() {
    // check to see if the user has been authenticated
    if(localStorage.getItem('token') !== null){
      this.setState({ authenticated : true });
    } 

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
  
  render(){
    // get data from this.state.carouselData
    const { slide1, slide2, slide3, slide1desc, slide2desc, slide3desc, _id } = this.state.carouselData;

    return (
      <div>
        <br></br>
        <h1 className="H1Text">Welcome</h1>
        
        <hr></hr>

        <ControlledCarousel 
          slide1={slide1}
          slide2={slide2}
          slide3={slide3}
          slide1desc={slide1desc}
          slide2desc={slide2desc}
          slide3desc={slide3desc}
        />

        {/* if this.state.authenticated is true, show EditCarouselmodal */}
        { this.state.authenticated
          ?
          <EditCarouselModal passDataToParent={this.passDataToParent} _id={_id}/>
          :
          null
        }
        
        <CardSection />
      </div>
    );
  }
}

export default Home;
