import React, { Component } from 'react';
import CardSection from "../CardSection";
import axios from 'axios';
import ControlledCarousel from "../EventCarousel";
import EditCarouselModal from './../EditCarouselModal';
import "./styles.css"

class Home extends Component {
  state = {
    carouselData: "",
  }

  passDataToParent = childData => {
    console.log("i'm connected to the caorusel");
    this.setState({carouselData: childData});
  }

  // get data from the database for the carousel
  async componentDidMount() {
    try {
      let response = await axios.get("/api/eventcarousel/");
      console.log(response.data, "line 23")
      
      // convert response.data into an array
      let carouselDataArr = Object.entries(response.data)[0][1];

      this.setState({carouselData: carouselDataArr});
      // console.log(this.state.carouselData, "line 29")

    } catch (err) {
      console.log(err)
    }
  }
  
  render(){
    return (
      <div>
        <br></br>
        <h1 className="H1Text">Welcome</h1>
        
        <hr></hr>
        <ControlledCarousel 
          slide1={this.state.carouselData.slide1}
          slide2={this.state.carouselData.slide2}
          slide3={this.state.carouselData.slide3}
          slide1desc={this.state.carouselData.slide1desc}
          slide2desc={this.state.carouselData.slide2desc}
          slide3desc={this.state.carouselData.slide3desc}
        />

        <EditCarouselModal passDataToParent={this.passDataToParent} _id={this.state.carouselData._id}/>
        <CardSection />
      </div>
    );
  }
}

export default Home