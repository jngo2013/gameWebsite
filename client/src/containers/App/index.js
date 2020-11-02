import React, { Component } from 'react';
import Navbar from './../../components/Navbar'
import ScrollToTop from './../../components/ScrollToTop';
import LegacyGames from './../../containers/LegacyGames';
import ShortTermGames from './../../containers/ShortTermGames';
// import Details from './../../containers/Details';
import ShortTermDetails from './../ShortTermDetails';
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
            <Route exact path="/ShortTermGames/:id" component={ShortTermDetails} />
            {/* <Route exact path="/api/shorttermgames/:id" render={() => <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1314&q=80" /> } /> */}
            <Footer />
          </Router>
        </Container>
      </div>
    )
  }
}

export default App;