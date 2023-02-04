import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

const Signup = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onChangeHandlerUser = (event) => {
    setUser(event.target.value);
  };

  const onChangeHandlerPass = (event) => {
    setPass(event.target.value);
  };

  const onSignupClick = () => {
    console.log("Sign up " + user + " " + pass);
  };

  return (
    <React.Fragment>
      <Container>
        <h2>Signup</h2>
        <Row>
          <Col md="4">
            <h1>Sign up</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Enter user name"
                  value={user}
                  onChange={onChangeHandlerUser}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Your password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={pass}
                  onChange={onChangeHandlerPass}
                />
                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
              </Form.Group>
            </Form>
            <Button color="primary" onClick={onSignupClick}>
              Sign up
            </Button>
            <p className="mt-2">
              Already have account? <Link to="/login">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Signup;
