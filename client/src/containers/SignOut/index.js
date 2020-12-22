import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


class SignOut extends Component {
  componentDidMount() {
    console.log("mounted")
    // this.props.signOut()
    localStorage.removeItem('token');
  }

  render() {
    console.log('rendered')
    return(
      <Container>
      <Alert>Good Bye</Alert>
      <Button as={Link} to='/' content='Home'>Click Here </Button>
      </Container>
    )
  }
}

export default SignOut