import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './styles.css';


class SignOut extends Component {
  componentDidMount() {
    console.log("mounted")
    // this.props.signOut()
    localStorage.removeItem('token');
  }

  render() {
    console.log('rendered');

    // redirecting to home page (https://stackoverflow.com/questions/3292038/redirect-website-after-certain-amount-of-time)
    let timer = setTimeout(function() {
        window.location='/'
    }, 5000);
    
    return (
      <Container className="SignOut-container">
      {/* <Alert>Good Bye</Alert> */}
      {/* <Button as={Link} to='/' content='Home'>Click Here </Button> */}

        <h1>Goodbye!</h1>
        <img 
          src="https://images.unsplash.com/photo-1508175800969-525c72a047dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2934&q=80" 
          alt="goodbye image" 
          className="SignOut-img"
        />
        <div className="SignOut-link">Click <a href="/">here</a> to go back to the home page or wait a few seconds and you'll be redirected back to the homepage shortly.</div>
      </Container>
    );
  }
}

export default SignOut;
