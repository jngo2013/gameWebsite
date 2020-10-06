import React, { Component } from 'react';
import CardSection from './../CardSection';
import Navbar from './../../components/Navbar'

class App extends Component {
  render() {
    return (
      <div>
        <div> Hello </div>
        <Navbar></Navbar>
        {/* <BootstrapCard /> */}
        <CardSection />
      </div>  
     
          
  
      
    )
  }
}

export default App;