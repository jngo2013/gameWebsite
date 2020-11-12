import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  }
 
  onSubmit = async (inputValues) => {
    console.log(inputValues)
    try{
      const { data } = await axios.post("/api/auth/signin", inputValues);
      console.log(data)
      localStorage.setItem("token", data.token);
      
    } catch (e) {
      console.log("it was not submitted corectly line 16");
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
    const { email, password } = this.state 
    return(
      <Form >
      <Form.Group controlId="formBasicEmail" onChange={this.handleEmailChange}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} />
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword" onChange={this.handlePasswordChange}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={this.onSubmit}>
        Submit
      </Button>
    </Form>
    )
  }
  
};
export default SignIn;