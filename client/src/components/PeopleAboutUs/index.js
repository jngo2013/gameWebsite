import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import JG from "./images/I1.jpg";
import AL from "./images/I2.jpg";
import GG from "./images/I3.jpg";
import May from "./images/I4.jpg";
import R from "./images/I5.jpg"
import "./style.css";

function People() {
  return (
    <div>
      <h1 className="titleCenter">The Crew</h1>
      <hr className="theCrew-hr" />

      {/* ===== JONATHAN GROTHE =====  */}
      <Container className="People-container">
        <Row>
          <Col lg={3} className="People-col1">
            <Image className="JG" src={JG} roundedCircle />
            <h1>Joseph Koy</h1>
          </Col>

          <Col className="textCenter">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae lobortis neque, sit amet placerat velit. Aenean at risus scelerisque, porta ex in, vestibulum leo. Praesent ac molestie nisl, at imperdiet ipsum. Nullam vestibulum, felis sit amet consequat lacinia, nisl justo pellentesque lacus, id gravida nunc neque id purus.Cras dignissim vitae purus facilisis malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Donec auctor urna in lorem pulvinar, ac semper orci porttitor. Sed elementum, tortor dapibus commodo gravida, urna lacus commodo lacus, eget pellentesque orci lacus rhoncus augue.
            </p>
          </Col>
        </Row>
      </Container>
    
      <hr className="theCrew-hr" />
    
      {/* ===== ALBERT LEE =====  */}
      <Container className="People-container">
        <Row>
          <Col lg={3} className="People-col1">
            <Image className="AL" src={AL} roundedCircle />
            <h1>Rosaline Song</h1>
          </Col>

          <Col className="textCenter">
            <p>
            Phasellus elementum lacus risus, in mattis risus lobortis a. Cras blandit cursus diam nec efficitur. Praesent vitae scelerisque odio. Quisque porttitor vehicula mi, quis fermentum erat faucibus sit amet. Donec bibendum, urna eget pellentesque efficitur, dui quam facilisis erat, eget ultricies erat dolor quis elit. Cras vitae eros eget magna pulvinar viverra. Sed in felis augue.
            </p>
          </Col>
        </Row>
      </Container>
    
      <hr className="theCrew-hr" />

      {/* ===== GABE GOLDEN ===== */}
      <Container className="People-container">
        <Row>
          <Col lg={3} className="People-col1">
            <Image className="GG" src={GG} roundedCircle />
            <h1>Martin Reyes</h1>
          </Col>

          <Col className="textCenter">
            <p>
            Mauris ultricies ante vel felis convallis tempus. Morbi quis tristique mauris. Vestibulum feugiat, dolor non rutrum lobortis, augue dui maximus ex, non posuere eros quam in lorem. Proin tempus, odio id aliquam maximus, nisi sem facilisis nibh, eu mollis sem nisi viverra dui. Nulla tristique, erat a tristique viverra, urna massa tempor magna, a porta mi massa at mi. Mauris sem magna, vulputate vitae dui dignissim, convallis luctus ligula. Maecenas molestie, lectus et egestas vehicula, lacus nisi blandit lorem, pellentesque sodales enim nulla sed enim.
            </p>
          </Col>
        </Row>
      </Container>
    
      <hr className="theCrew-hr" />

      {/* ===== MAYBELINE ===== */}
      <Container className="People-container">
        <Row>
          <Col lg={3} className="People-col1">
            <Image className="May" src={May} roundedCircle />
            <h1>Marilyn</h1>
          </Col>

          <Col className="textCenter">
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

              <p>
              Donec quis aliquet purus. Proin laoreet maximus lacus, non lobortis dolor malesuada non. Integer ex arcu, efficitur a elit et, auctor ultricies velit. Cras nec fermentum ipsum. Ut dapibus suscipit dignissim. Quisque lobortis urna vel mauris suscipit, quis gravida nulla varius. Phasellus egestas nunc justo, vel ornare dolor condimentum at. Aenean dapibus lorem malesuada risus faucibus, nec varius mi faucibus. Sed efficitur ultricies lacinia. Maecenas posuere eu ex sit amet volutpat.
              </p>

              <p>
              Quisque fermentum elit vel leo lobortis, in vestibulum purus tempor. Nullam mollis, diam vel mattis condimentum, libero dui congue urna, non tempor neque ligula gravida nulla. Suspendisse venenatis aliquet dictum. Donec sit amet condimentum metus. Aliquam interdum condimentum quam sed porta. Vestibulum ac malesuada orci, dignissim semper augue. Ut quis ipsum suscipit, elementum leo eget, faucibus arcu.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <hr className="theCrew-hr" />

      <Container className="People-container">
        <Row>
          <Col lg={3} className="People-col1">
            <Image className="GG" src={R} roundedCircle />
            <h1>Lucinda</h1>
          </Col>

          <Col className="textCenter">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida, mauris eget posuere tempor, est nisi pellentesque magna, sed porttitor magna eros sit amet felis. Nulla vel velit diam. Duis bibendum faucibus velit, vitae tristique leo commodo vel. Phasellus ac arcu ex. Duis porttitor turpis non ipsum blandit efficitur.
            </p>
          </Col>
        </Row>
      </Container>

      <hr className="theCrew-hr" />
    </div>
  );
}

export default People;
