import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios"

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  }
   
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
  handleSubmit = async (events) =>{
    events.preventDefault();
    try{
      const { data } = await axios.post("/api/auth/signin", this.state);
    console.log(data, "this is the data");
    localStorage.setItem("token", data.token);
    this.props.history.push('/')
  }
    catch (e) {
      console.log("it was not submitted correctly handle submit");
    }
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
      <Button variant="primary" type="submit" onClick={this.handleSubmit}>
        Submit
      </Button>
    </Form>
    )
  }
  
};
export default SignIn;