import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import PageNotFound from './../../components/PageNotFound';
import axios from "axios";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    isUser: true,
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

  handleSubmit = async (events) =>{
    events.preventDefault();
    try {
      const { data } = await axios.post("/api/auth/signin", this.state);
      console.log(data, "this is the data");
      localStorage.setItem("token", data.token);
      this.props.history.push('/');
      window.location.reload();
    }
    catch (e) {
      console.log("it was not submitted correctly handle submit");
      console.log(e);
      this.setState({isUser: false});
    }
  };

  render() {
    const { email, password, isUser } = this.state ;
    
    if(isUser) {
      return (
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
      );
    } else {
      return (
        <PageNotFound message="Sorry! That user doesn't exist." />
      );
    } 
  }
};

export default SignIn;
