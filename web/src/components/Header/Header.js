import React, { useEffect, useState } from "react";
import "./HeaderStyles.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../../StateProvider";
import axios from "axios";

function Header() {
  const [{ user, apiKey }, dispatch] = useStateValue();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${apiKey}/get_categories`).then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_USER",
    });
  };

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
              <NavDropdown title={"Categories"}>
                {/* <NavDropdown.Item>Mobiles</NavDropdown.Item>
                <NavDropdown.Item>Clothing</NavDropdown.Item> */}
                {categories.map((each) => {
                  return (
                    <NavDropdown.Item>{each.Categories_name}</NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <Nav.Link as={NavLink} to="/recent_orders">
                Your Orders
              </Nav.Link>
            </Nav>

            {user === null ? (
              <Nav className="navbarLinks">
                <Nav.Link as={NavLink} to="/user_registration">
                  Register
                </Nav.Link>
                <Nav.Link as={NavLink} to="/user_login">
                  Login
                </Nav.Link>
              </Nav>
            ) : (
              <Nav className="navbarLinks">
                <Nav.Link>
                  Cart <FontAwesomeIcon icon={faShoppingCart} />
                </Nav.Link>
                <NavDropdown
                  title={"User"}
                  style={{ zIndex: 10, marginRight: 70 }}
                >
                  <NavDropdown.Item>{user?.Email}</NavDropdown.Item>
                  <NavDropdown.Item>{user?.Phone}</NavDropdown.Item>
                  <NavDropdown.Divider></NavDropdown.Divider>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
