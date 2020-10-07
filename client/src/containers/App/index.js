import React, { Component } from 'react';
import CardSection from './../CardSection';
import Navbar from './../../components/Navbar'
import HeadLine from './../../components/HeadLine'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HeadLine/>
        <CardSection />
      </div>  
    )
  }
}

export default App;