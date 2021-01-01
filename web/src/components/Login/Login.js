import React from "react";
import "./LoginStyles.css";
import { Form, Button } from "react-bootstrap";

function Login() {
  return (
    <div className="login">
      <div className="login__inner continer col-md-5">
        <div className="login__panel">
          <h5>E-Commerce</h5>
        </div>
        <Form style={{ width: "80%", marginTop: 50 }}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="your username" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>password</Form.Label>
            <Form.Control type="text" placeholder="enter password" required />
          </Form.Group>
          <Button className="register__button" variant="info">
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
