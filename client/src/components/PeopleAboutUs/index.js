import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import JG from "./images/JG.jpg";
import AL from "./images/AL.jpg";
import GG from "./images/GG.jpg";
import May from "./images/May3.jpg";
import R from "./images/R.png"
import "./style.css";

function People() {
  return (
    <div>
      {/* <div className="jumbotron-story">
        <h1 className="jumbotronText">Our Story</h1>
        <p className="jumbotronText">
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
      </div> */}

      {/* <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br> */}
      
      <h1 className="titleCenter">The Crew</h1>
      {/* <hr></hr> */}
      <hr className="theCrew-hr" />
      {/* <br></br>
      <br></br> */}

      {/* ===== JONATHAN GROTHE =====  */}
      <Container className="People-container">
        <Row>
          <Col lg={3} className="People-col1">
            <Image className="JG" src={JG} roundedCircle />
            <h1>Jonathan Grothe</h1>
          </Col>

          <Col className="textCenter">
            <p>
              Jonathan is a long running board game enthusiast. Founder of Drunk on Games when taking his top two passions and mixing them together. You'll find him at his local board game club SJ Gamekrackers making sure everyone learns some new games and has a good time. Lives by the motto "Everyone loves board games, most just don't know it yet."
            </p>
          </Col>
        </Row>
      </Container>
    
      <hr className="theCrew-hr" />
      {/* <br></br> */}
    
      {/* ===== ALBERT LEE =====  */}
      <Container className="People-container">
        <Row>
          <Col lg={3} className="People-col1">
            <Image className="AL" src={AL} roundedCircle />
            <h1>Albert Le</h1>
          </Col>

          <Col className="textCenter">
            <p>
              The local rules lawyer, co-op advocate, and camera coordinator, I am constantly looking to optimize in both games and recording content. When a specific issue comes up, I'm either asking about it, or...using it to my advantage.
            </p>
          </Col>
        </Row>
      </Container>
    
      <hr className="theCrew-hr" />
      {/* <br></br> */}

      {/* ===== GABE GOLDEN ===== */}
      <Container className="People-container">
        <Row>
          <Col lg={3} className="People-col1">
            <Image className="GG" src={GG} roundedCircle />
            <h1>Gabe Golden</h1>
          </Col>

          <Col className="textCenter">
            <p>
              Golden is a Linguist who loves languages, voice acting, and of course boardgames! His favorite types of games are push your luck,  social deduction, and party games.  He is currently creating Boardgames that help people learn languages. You can follow him on Instagram as GoldenFedoraFox or <a href="https://www.instagram.com/PassionfruitEducation/" target="_blank" rel="noopener noreferrer">PassionfruitEducation</a>.
            </p>
          </Col>
        </Row>
      </Container>
    
      <hr className="theCrew-hr" />
      {/* <br></br> */}

      {/* ===== MAYBELINE ===== */}
      <Container className="People-container">
        <Row>
          <Col lg={3} className="People-col1">
            <Image className="May" src={May} roundedCircle />
            <h1>Maybeline</h1>
          </Col>

          <Col className="textCenter">
            <div>
              <p>Hello! Maybeline here, at your service!</p>

              <p>
                I love the board game world! There is something wonderful about sitting around a table with people and a game in front of us that brings closer connections with one other. An extra bonus is when there are drinking rules (alcoholic beverages and non-alcoholic beverages). My strategy when playing a strategic game (whether it is co-op or not) is to be in my own world and analyze other player's moves. I'll be that "quiet player" that does their own thing and everyone forgets about and ends up winning the game. It works like a charm (most of the time).
              </p>

              <p>
                I spend most of my time behind the scene for Drunk on Games as a video editor providing great content for the viewers. So if you see me in a video, comment on that video a cherry blossom flower "🌸" emoji!
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <hr className="theCrew-hr" />
      {/* <br></br> */}

      <Container className="People-container">
        <Row>
          <Col lg={3} className="People-col1">
            <Image className="GG" src={R} roundedCircle />
            <h1>Ryan</h1>
          </Col>

          <Col className="textCenter">
            <p>
            Starting his obsession with Collectible Card Games and the Super Nintendo in his youth, Ryan has always had a love for all things gaming. A veteran MMO, RPG and strategy PC gamer; he re-found his love of board games in recent years. Today he is excited for the emerging renaissance of the board games industry and the many games it will be offering up. Let's play!
            </p>
          </Col>
        </Row>
      </Container>

      <hr className="theCrew-hr" />
      {/* <br></br> */}
    </div>
  );
}

export default People;
