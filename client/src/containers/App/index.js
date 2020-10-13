import React, { Component } from 'react';
import CardSection from './../CardSection';
import Navbar from './../../components/Navbar'
import ControlledCarousel from './../../components/EventCarousel'
import Footer from './../../components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <ControlledCarousel/>
        <CardSection />
        <Footer />
      </div>  
    )
  }
}

export default App;