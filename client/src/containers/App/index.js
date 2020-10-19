import React, { Component } from 'react';
import Navbar from './../../components/Navbar'
import ScrollToTop from './../../components/ScrollToTop';
import LegacyGames from './../../containers/LegacyGames';
import ShortTermGames from './../../containers/ShortTermGames';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './../../components/Footer';
import Container from 'react-bootstrap/Container';
import Home from "../Home";
import AboutUs from '../AboutUs';
import "./style.css"

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Container fluid className="background">
          <Router>
            <ScrollToTop />
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