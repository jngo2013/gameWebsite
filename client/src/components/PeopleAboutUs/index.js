import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import JG from "./images/JG.jpg";
import AL from "./images/AL.jpg";
import GG from "./images/GG.jpg";
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
        <Col lg={3}><Image 
      className="JG"
      src={JG}
      roundedCircle
      
    /></Col>
    <Col className="textCenter">
    Jonathan is a long running board game enthusiast. Founder of Drunk on Games when taking his top two passions and mixing them together. You'll find him at his local board game club SJ Gamekrackers making sure everyone learns some new games and has a good time. Lives by the motto "Everyone loves board games, most just don't know it yet."
    </Col>
      </Row>
    
    </Container>
    <h1>Jonathan Grothe</h1>
    <hr></hr>
    <br></br>
    
    <Container fluid>
      <Row>
        <Col lg={3}><Image 
      className="AL"
      src={AL}
      roundedCircle
      
    /></Col>
    <Col className="textCenter">
    <div>The local rules lawyer, co-op advocate, and camera coordinator, I am constantly looking to optimize in both games and recording content. When a specific issue comes up, I'm either asking about it, or...using it to my advantage.</div>
    </Col>
      </Row>
    
    </Container>
    <h1>Albert Lee</h1>
    <hr></hr>
    <br></br>

    <Container fluid>
      <Row>
        <Col lg={3}><Image 
      className="GG"
      src={GG}
      roundedCircle
      
    /></Col>
    <Col className="textCenter">
    <div>Golden is a Linguist who loves languages, voice acting, and of course boardgames! His favorite types of games are push your luck,  social deduction, and party games.  He is currently creating Boardgames that help people learn languages. You can follow him on Instagram as GoldenFedoraFox or his projects under Passionfruit Education on all social media sites or <a href="https://www.passionfruiteducation.com" target="_blank" rel="noopener noreferrer">PassionfruitEducation.com</a></div>
    </Col>
      </Row>
    
    </Container>
    <h1>Gabe Golden</h1>
    <hr></hr>
    <br></br>
    </div>
  )
}

export default People;