import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./RegisterStyles.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useStateValue } from "../../StateProvider";
import { useHistory } from "react-router-dom";
import { useAlert } from "react-alert";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [dob, setDob] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [{ apiKey }, dispatch] = useStateValue();
  const history = useHistory();
  const alert = useAlert();

  const registerUser = (e) => {
    Axios.post(`${apiKey}/user_registration`, {
      name: name,
      email: email,
      phone: phone,
      dob: dob,
      password: password,
    })
      .then((res) => {
        console.log(res.data.sqlMessage);
        alert.success("User Registered");
        history.replace("/user_login");
      })
      .then((err) => {
        console.log("err", err);
      })
      .finally(() => {
        setEmail("");
        setPassword("");
        setDob("");
        setName("");
        setPhone("");
        alert.success("User Registered");
        history.replace("/user_login");
      });
  };

  return (
    <div className="poster">
      <div className="signup__container">
        <div className="container__child signup__thumbnail">
          <div className="thumbnail__logo">
            <h1 className="logo__text">E-Commerce</h1>
          </div>
          <div className="thumbnail__content">
            <h1 className="heading--primary">Welcome!</h1>
            <h2 className="heading--secondary">If you already have account</h2>
            <div className="button__center">
              <Link to="/user_login">
                <Button variant="outline-danger">Sign In</Button>
              </Link>
            </div>
          </div>
          <div className="signup__overlay"></div>
        </div>
        <div className="container__child signup__form">
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Name"
                required={true}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="enter your email"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="phone"
                placeholder="enter your phone no"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Select Date</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setDob(e.target.value);
                  console.log(e.target.value);
                }}
                type="date"
                name="dob"
                placeholder="Date Of Birth"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="enter password"
                required
              />
            </Form.Group>

            <Button
              onClick={registerUser}
              className="register__button"
              variant="info"
              type="submit"
              value="Register"
            >
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
