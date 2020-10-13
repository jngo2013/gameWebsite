import React, { Component } from 'react';
import CardSection from './../CardSection';
import Navbar from './../../components/Navbar'
import { BrowserRouter as Router,Route } from "react-router-dom";
import ControlledCarousel from './../../components/EventCarousel'
import Footer from './../../components/Footer';
import Container from 'react-bootstrap/Container';

import AboutUs from '../AboutUs'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Router>
          <Navbar/> 
        <Route exact path="/AboutUs" component={AboutUs}/>
        <div>Title</div>
        <ControlledCarousel/>
        <CardSection />
        <Footer />
          </Router>
        </Container>
      </div>  
    )
  }
}

export default App;