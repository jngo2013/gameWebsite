import React from 'react'
import { NavDropdown, Nav, Form, Navbar, Button, FormControl } from 'react-bootstrap';
import "./style.css";

export default (props) => (
<Navbar fixed='top'  className="NavbarBG" expand="lg">
  <Navbar.Toggle  aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Latest News</Nav.Link>
      <NavDropdown title="Games" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Legacy</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Events</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Hooplah</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-warning">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
);