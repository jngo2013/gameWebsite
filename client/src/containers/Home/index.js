import React, { Component } from 'react';
import CardSection from "../CardSection";
import axios from 'axios';
import ControlledCarousel from "../EventCarousel";
import EditCarouselModal from './../EditCarouselModal';
import "./styles.css"

class Home extends Component {
  state = {
    carouselData: "",
    editModalData: ""
  }

  passDataToParent = childData => {
    console.log("i'm connected to the caorusel");
    this.setState({carouselData: childData});
  }


  // get data from the database for the carousel
  async componentDidMount() {
    try {
      let response = await axios.get("/api/eventcarousel");
      
      // convert response.data into an array
      let carouselDataArr = Object.entries(response.data)[0][1];
      
      this.setState({carouselData: carouselDataArr, editModalData: carouselDataArr});
    } catch (err) {
      console.log(err)
    }
  }
  
  render(){
    return(
      <div>
        <br></br>
        <h1 className="H1Text">Welcome</h1>
        
        <hr></hr>
        <ControlledCarousel carouselData={this.state.carouselData} />
        <EditCarouselModal carouselData={this.state.carouselData} passDataToParent={this.passDataToParent}/>
        <CardSection />
      </div>
    )
  }
}

export default Home