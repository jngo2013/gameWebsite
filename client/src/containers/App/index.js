import React, { Component } from 'react';
import CardSection from './../CardSection';
import Navbar from './../../components/Navbar'
import HeadLine from './../../components/HeadLine'
import ControlledCarousel from './../../components/EventCarousel'
import Footer from './../../components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HeadLine/>
        <ControlledCarousel/>
        <CardSection />
        <Footer />
      </div>  
    )
  }
}

export default App;