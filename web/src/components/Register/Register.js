import React from "react";
import { Button, Form } from "react-bootstrap";
import "./RegisterStyles.css";

function Register() {
  return (
    <div class="signup__container">
      <div class="container__child signup__thumbnail">
        <div class="thumbnail__logo">
          <h1 class="logo__text">E-Commerce</h1>
        </div>
        <div class="thumbnail__content">
          <h1 class="heading--primary">Welcome!</h1>
          <h2 class="heading--secondary">If you already have account</h2>
          <div className="button__center">
            <Button variant="outline-danger">Sign In</Button>
          </div>
        </div>
        <div class="signup__overlay"></div>
      </div>
      <div class="container__child signup__form">
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="your username" required />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="enter your email"
              required
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm password"
              required
            />
          </Form.Group>
          <Button className="register__button" variant="info">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;
