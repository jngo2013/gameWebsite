import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  }
 
  onSubmit = async (inputValues) => {
    try{
      const { data } = await axios.post("/api/auth/signin", inputValues);
      localStorage.setItem("token", data.token);
    } catch (e) {
      console.log("wrong info")
    }
  };
  // handleInputChange = events => {
  //   this.setState({
  //     email:events.target.value,
  //     password:events.target.value,
  //   })
  // }
   
  handlePasswordChange = events => {
    this.setState({
      password:events.target.value,
    })
  } ;
  handleEmailChange = events => {
    this.setState({
      email:events.target.value,
    })
  };
  handleSubmit = events => {
    events.preventDefault();
    console.log(this.state)
  };

  
  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
      <Form.Group controlId="formBasicEmail" onChange={this.handleEmailChange}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  />
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword" onChange={this.handlePasswordChange}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
  }
  
};
export default SignIn;