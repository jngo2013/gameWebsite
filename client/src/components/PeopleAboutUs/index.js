import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import JG from "./images/JG.jpg";
import AL from "./images/AL.jpg";
import GG from "./images/GG.jpg";
import May from "./images/May3.jpg";
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

    <Container fluid>
      <Row>
        <Col lg={3}><Image 
      className="May"
      src={May}
      roundedCircle
      
    /></Col>
    <Col className="textCenter">
    <div>Hello! Maybeline here, at your service!

I love the board game world! There is something wonderful about sitting around a table with people and a game in front of us that brings closer connections with one other. An extra bonus is when there are drinking rules (alcoholic beverages and non-alcoholic beverages). My strategy when playing a strategic game (whether it is co-op or not) is to be in my own world and analyze other player's moves. I'll be that "quiet player" that does their own thing and everyone forgets about and ends up winning the game. It works like a charm (most of the time).

I spend most of my time behind the scene for Drunk on Games as a video editor providing great content for the viewers. So if you see me in a video, comment on that video a cherry blossom flower "🌸" emoji!</div>
    </Col>
      </Row>
    
    </Container>
    <h1>Maybeline</h1>
    <hr></hr>
    <br></br>
    </div>
  )
}

export default People;