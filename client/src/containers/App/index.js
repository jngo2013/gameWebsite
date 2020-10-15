import React, { Component } from 'react';
import CardSection from './../CardSection';
import Navbar from './../../components/Navbar'
import LegacyGames from './../../containers/LegacyGames';
import ShortTermGames from './../../components/ShortTermGames';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ControlledCarousel from './../../components/EventCarousel'
import Footer from './../../components/Footer';
import Container from 'react-bootstrap/Container';

import Home from "../Home"

import AboutUs from '../AboutUs'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Router>
            <Navbar />
            <Route exact path="/AboutUs" component={AboutUs} />
            <Route exact path="/" component={Home} />
            <Route exact path="/LegacyGames" component={LegacyGames} />
            <Route exact path="/ShortTermGames" component={ShortTermGames} />

            <Footer />
          </Router>
        </Container>
      </div>
    )
  }
}

export default App;