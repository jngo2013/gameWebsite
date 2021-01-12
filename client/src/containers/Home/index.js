import React, { Component } from 'react';
import CardSection from "../CardSection";
import ControlledCarousel from "../EventCarousel";
import "./styles.css"

class Home extends Component {
  render(){
    return(
      <div>
        <br></br>
        <h1 className="H1Text">Welcome</h1>
        
        <hr></hr>
        <ControlledCarousel/>
        <CardSection />
      </div>
      
    )
  }
  }

  export default Home