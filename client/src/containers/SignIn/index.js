import React, { Component } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import './styles.css';

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    isUser: true,
    validated: false,
  }
   
  handlePasswordChange = events => {
    this.setState({
      password:events.target.value,
    })
  };

  handleEmailChange = events => {
    this.setState({
      email:events.target.value,
    })
  };

  // function to validate the form
  validateForm = (event) => {
    // check to see if the form is completely filled out every time the user tries to submit
    // if the form isn't completely filled out, don't allow the user to submit the form
    const form = event.currentTarget;
    if(form.checkValidity() === false){
      event.preventDefault();
      event.stopPropagation();
    }

    // change validated to "true" after checking the form
    this.setState({ validated: true });
  }

  handleSubmit = async (events) =>{
    // check to make sure the form is filled properly filled out
    this.validateForm(events);

    events.preventDefault();

    // if either field is empty, don't make an api call
    if(this.state.email !== "" && this.state.password !== "") {
      try {
        const { data } = await axios.post("/api/auth/signin", this.state);
        // console.log(data, "this is the data");
        localStorage.setItem("token", data.token);
        this.props.history.push('/');
        window.location.reload();
      }
      catch (e) {
        console.log("it was not submitted correctly handle submit");
        console.log(e);
        this.setState({isUser: false});
      }
    }
  };

  render() {
    const { email, password, isUser } = this.state ;
    
    // if(isUser) {
      return (
        <Container className="SignIn-container">

          {/* Alert for non-existent user or incorrect password/email combination */}
          {
            !this.state.isUser
            ?
            <Alert variant="danger" onClose={() => this.setState({isUser: true})} dismissible>
            <Alert.Heading>Looks like something went wrong!</Alert.Heading>
            <p>
              Either your email or password was incorrect or that user doesn't exist.  Please try again.
            </p>
            </Alert>
            :
            null
          }

          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit} className="SignIn-form">
            <h2>Sign In</h2>
            <hr />
              <Form.Group controlId="formBasicEmail" onChange={this.handleEmailChange} >
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" value={email}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please enter your email address.</Form.Control.Feedback>
              </Form.Group>
            
              <Form.Group controlId="formBasicPassword" onChange={this.handlePasswordChange}>
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" value={password}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            
          </Form>

        </Container>  
      );
  }
};

export default SignIn;
