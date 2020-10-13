import React, { Component } from 'react';
import CardSection from "../CardSection";
import ControlledCarousel from "../../components/EventCarousel"

class Home extends Component {
  render(){
    return(
      <div>
        <ControlledCarousel/>
        <CardSection />
      </div>
      
    )
  }
  }

  export default Home