import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  Container,
  Button,
  Row,
  Col,
  Form,
  FormControl,
} from "react-bootstrap";

const TesteLogin = (props) => {
  const [user,  setUser ] = useState("");
  const [pass,  setPass ] = useState("");
  const [token, setToken] = useState("");

  const onChangeHandlerUser = (event) => {
    setUser(event.target.value);
  };

  const onChangeHandlerPass = (event) => {
    setPass(event.target.value);
  };

  const onSignupClick = async () => {
    const dado = {
        'usuario': 'cunha',
        'senha'  : '123abc'
    }

    try { 
        await axios.post("http://127.0.0.1:5000/api/v1/login", {'usuario': 'cunha', 'senha': '123abc'})
        .then((res) => {
          if(hasJWT()) {
            console.log('Tem o token');
            console.log(token);
          }
          else {
            console.log('Não tem o token');
            salvaToken(res.data.data.token);
            console.log(res.data.data.token);
          }
          onClient();
        }); 
      }
    catch (error) { console.log(error); }
  };


  const onClient = async () => {
    if(hasJWT()) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await axios.get("http://localhost:5000/api/v1/user")
      .then((res) => {
        console.log(res.data);
        });  
    }
    else {
      console.log('É necessário fazer o login');
    }
  }


  const hasJWT = () => {
    let flag = false;
    //check user has JWT token
    localStorage.getItem("token") ? flag=true : flag=false   
    return flag
}  

  const salvaToken = (token) => {

    localStorage.setItem("token", token); 
    //set token to axios common header
    setToken(token);
  }

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
export default TesteLogin;
