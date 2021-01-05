import React from 'react';
import { NavDropdown, Nav, Form, Navbar, Image } from 'react-bootstrap';
import "./style.css";
import SearchBar from "../SearchBar/index"
import sample2 from "./images/sample2.jpg"

function NavBar(props) {
  console.log(props.authenticated)
  return (
      <Navbar bg="dark" expand="lg" className="NavbarBG">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><Image src={sample2} className="navbar-brand" roundedCircle></Image></Nav.Link>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>
            <NavDropdown title="Games" id="basic-nav-dropdown">
              <NavDropdown.Item href="/LegacyGames">Legacy</NavDropdown.Item>
              <NavDropdown.Item href="/ShortTermGames">Board Games</NavDropdown.Item>
            </NavDropdown>
            { props.authenticated ? <Nav.Link href="/SignOut" className='navPadding'>Sign Out</Nav.Link> : null}
          </Nav>
          <Form inline>
            <SearchBar />
          </Form>
        </Navbar.Collapse>
      </Navbar>

  );
}

export default NavBar;


// export default (props) => (
      // ===== ORIGINAL NAVBAR ===== 
      // <Navbar bg="dark"  className="NavbarBG" expand="lg">
      //   <Navbar.Toggle  aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Nav className="mr-auto">
      //       <Nav.Link href="/"><Image   src={sample2} className="navbar-brand" roundedCircle></Image></Nav.Link>
      //       <Nav.Link href="AboutUs" className="navPadding" >About Us</Nav.Link>
      //       <NavDropdown title="Games" id="basic-nav-dropdown"  className="navPadding">
      //         <NavDropdown.Item href="/LegacyGames">Legacy</NavDropdown.Item>
      //         <NavDropdown.Item href="/ShortTermGames">Board Games</NavDropdown.Item>
      //       </NavDropdown>
      //       { props.authenticated ? <Nav.Link href="/SignOut" className='navPadding'>Sign Out</Nav.Link> : null}
      //     </Nav>
      //     <Form inline>
      //       <SearchBar />
      //     </Form>
      //   </Navbar.Collapse>
      // </Navbar>