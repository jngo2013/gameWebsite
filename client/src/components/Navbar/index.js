import React, { Component } from 'react';
import { NavDropdown, Nav, Form, Navbar, Image } from 'react-bootstrap';
import "./style.css";
import SearchBar from "./../../containers/SearchBar";
import sample2 from "./images/sample2.jpg";
import { Link } from "react-router-dom";


class NavBar extends Component {
  state = {
    searchResults: "",
  }

  render() {
    return (
      <Navbar bg="dark" expand="lg" className="NavbarBG">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><Image src={sample2} className="navbar-brand" roundedCircle></Image></Nav.Link>
            
            <Link className="aboutUs"to="/AboutUs">About Us</Link>

            {/* ===== DROPDOWN MENU ===== */}
            <NavDropdown title="Games" id="basic-nav-dropdown">
              <Link className="drop" to="/LegacyGames">CampaignGames</Link>
              <Link className="drop" to="/ShortTermGames">BoardGames</Link>
            </NavDropdown>
            <Link className="aboutUs" to="/Calendar">Events</Link>
            {/* if 'props.authenticated' is 'true', show the 'Sign Out' link, otherwise display nothing */}
            { this.props.authenticated ? <Nav.Link href="/SignOut" className='navPadding'>Sign Out</Nav.Link> : null}
          </Nav>
          <Form inline>
            <SearchBar />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;
