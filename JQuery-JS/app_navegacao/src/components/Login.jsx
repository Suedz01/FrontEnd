import React,{ useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const onChangeHandlerUser = (event) => {
    console.log(event.target.value);
    setUser(event.target.value);
  };

  const onChangeHandlerPass = (event) => {
    console.log(event.target.value);
    setPass(event.target.value);
  };

  const onSignupClick = () => {
    console.log("Sign up " + user + " " + pass);
  };

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md="4">
            <h1>Login1</h1>
            <Form>
              <Form.Group controlId="usernameId">
                <Form.Label>User name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  placeholder="Entre com o seu usuario"
                  value={user}
                  onChange={onChangeHandlerUser}
                />
                <FormControl.Feedback type="invalid"></FormControl.Feedback>
              </Form.Group>

              <Form.Group controlId="passwordId">
                <Form.Label>Senha</Form.Label>
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
              Already have account? <Link to="/">Login</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Login;
