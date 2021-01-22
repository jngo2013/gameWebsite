import React, { Component } from 'react';
import NavBar from './../../components/Navbar';
import ScrollToTop from './../../components/ScrollToTop';
import LegacyGames from './../../containers/LegacyGames';
import ShortTermGames from './../../containers/ShortTermGames';
import ShortTermDetails from './../ShortTermDetails';
import LegacyDetails from './../LegacyDetails';
import SignIn from './../SignIn';
import SignOut from './../SignOut';
import Search from './../Search';
import GameNotFound from './../../components/GameNotFound';
import PageNotFound from './../../components/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './../../components/Footer';
import Container from 'react-bootstrap/Container';
import Home from "../Home";
import AboutUs from '../AboutUs';
import "./style.css";

class App extends Component {
  state = {
    authenticated : false,
    searchResults: "",
  }
  
  componentDidMount(){
    if( localStorage.getItem('token') !== null){
      this.setState({authenticated : true})
    } 
  }

  render() {
    
    return (
      <div className="App" >
        <Container fluid className="background">
          <Router>
            <ScrollToTop />
            <NavBar authenticated={this.state.authenticated} passToSearch={this.passToSearch} />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/AboutUs" component={AboutUs} />
              <Route exact path="/LegacyGames" component={LegacyGames} />
              <Route exact path="/ShortTermGames" component={ShortTermGames} />
              <Route exact path="/ShortTermGames/:id" component={ShortTermDetails} />
              <Route exact path="/ShortTermGames/game/:id" component={ShortTermDetails} />
              <Route exact path="/LegacyGames/:id" component={LegacyDetails} />
              <Route exact path="/SignIn" component={SignIn} />
              <Route exact path='/SignOut' component={SignOut} />
              <Route exact path="/notfound" component={GameNotFound} />
              <Route exact path="/search/:searchinput" component={Search} />
              <Route component={PageNotFound} />
            </Switch>
            
            <Footer />
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;
