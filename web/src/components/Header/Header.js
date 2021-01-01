import React from "react";
import "./HeaderStyles.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <Navbar
      collapseOnSelect
      style={{ zIndex: 5 }}
      className="parent header"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <div className="container">
        <Navbar.Brand as={NavLink} to="/" className="brandName">
          E-Commerce
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="header__links">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/">
                Home <FontAwesomeIcon size="xs" icon={faHome}></FontAwesomeIcon>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products">
                Products
              </Nav.Link>
              {/* <Nav.Link as={NavLink} to="/downloads">Downloads <FontAwesomeIcon size="xs" icon={faDownload}></FontAwesomeIcon></Nav.Link> */}
              <Nav.Link as={NavLink} to="/product_categories">
                Categories
              </Nav.Link>
            </Nav>

            <Nav className="navbarLinks">
              <Nav.Link as={NavLink} to="/user_registration">
                Register
              </Nav.Link>
              <Nav.Link as={NavLink} to="/user_login">
                Login
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
