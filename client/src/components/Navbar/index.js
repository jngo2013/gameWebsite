import React from 'react';
import { NavDropdown, Nav, Form, Navbar, Image, Button } from 'react-bootstrap';
import AddLegacyModal from './../../containers/AddLegacyModal';
import AddShortModal from './../../containers/AddShortModal';
import "./style.css";
import SearchBar from "../SearchBar/index"
import sample2 from "./images/sample2.jpg"

function NavBar() {
  return (
<Navbar  className="NavbarBG" expand="lg">
  <Navbar.Toggle  aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/"><Image   src={sample2} className="navbar-brand" roundedCircle></Image></Nav.Link>
      <Nav.Link href="AboutUs" className="navPadding" >About Us</Nav.Link>
      <NavDropdown title="Games" id="basic-nav-dropdown"  className="navPadding">
        <NavDropdown.Item href="/LegacyGames">Legacy</NavDropdown.Item>
        <NavDropdown.Item href="/ShortTermGames">ShortGames</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Hooplah</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <SearchBar />
    </Form>
    <AddLegacyModal />
    <AddShortModal />
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar;
