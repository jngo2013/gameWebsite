import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spongebob from "./images/Spongebob.png";
import "./style.css"


function People(){
  return(
    <div>
      <h1 className="titleCenter">The Crew</h1>
      <hr></hr>
      <br></br>
      <br></br>
      <Container fluid>
      <Row>
        <Col lg={2}><Image 
      className="borderPeople"
      src={Spongebob}
      roundedCircle
      
    /></Col>
    <Col>
    <div>Hi my name is spongebob and I live in a pineapple under the sea with my pet name Gary!</div>
    </Col>
      </Row>
    
    
    </Container>
    <h1>Spongebob</h1>
    <hr></hr>
    <br></br>
    
    <Container fluid>
      <Row>
        <Col lg={2}><Image 
      className="borderPeople"
      src={Spongebob}
      roundedCircle
      
    /></Col>
    <Col>
    <div>Hi my name is spongebob and I live in a pineapple under the sea with my pet name Gary!</div>
    </Col>
      </Row>
    
    
    </Container>
    <h1>Spongebob</h1>
    <hr></hr>
    <br></br>
    </div>
  )
}

export default People;