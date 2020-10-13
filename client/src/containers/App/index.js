import React, { Component } from 'react';
import CardSection from './../CardSection';
import Navbar from './../../components/Navbar'
import { Route } from "react-router-dom";
import ControlledCarousel from './../../components/EventCarousel'
import Footer from './../../components/Footer';
import Container from 'react-bootstrap/Container'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
        <Navbar/>
        </Container>

        <div>Title</div>
        <Container fluid>
        <ControlledCarousel/>
        <CardSection />
        <Footer />
        </Container>
      </div>  
    )
  }
}

export default App;