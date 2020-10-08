import React, { Component } from 'react';
import CardSection from './../CardSection';
import Navbar from './../../components/Navbar'
import HeadLine from './../../components/HeadLine'
import ControlledCarousel from './../../components/EventCarousel'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HeadLine/>
        <ControlledCarousel/>
        <CardSection />
      </div>  
    )
  }
}

export default App;