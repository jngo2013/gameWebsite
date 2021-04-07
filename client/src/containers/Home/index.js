import React, { Component } from 'react';
import CardSection from "../CardSection";
import axios from 'axios';
import ControlledCarousel from "../EventCarousel";
import "./styles.css";

class Home extends Component {
  state = {
    carouselData: "",
    authenticated: false,
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
    const { _id, slide1, slide2, slide3, slide1desc, slide2desc, slide3desc, slide1src, slide2src, slide3src, slide1link, slide2link, slide3link } = this.state.carouselData;

    return (
      <div>
        <div className="Home-header">
          <h1 className="H1Text">The Board Game Project</h1>
        </div>
        
        <hr className="Home-hr"></hr>

        <div className="Home-news">
          <h2>Latest News</h2>
        </div>
        
        <ControlledCarousel 
          slide1={slide1}
          slide2={slide2}
          slide3={slide3}
          slide1desc={slide1desc}
          slide2desc={slide2desc}
          slide3desc={slide3desc}
          slide1src={slide1src}
          slide2src={slide2src}
          slide3src={slide3src}
          slide1link={slide1link}
          slide2link={slide2link}
          slide3link={slide3link}
          _id={_id}
          passDataToParent={this.passDataToParent}
          authenticated={this.state.authenticated}
        />
        
        <CardSection />
      </div>
    );
  }
}

export default Home;
