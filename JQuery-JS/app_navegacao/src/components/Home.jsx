import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <React.Fragment>
      <Container>
        <h2>Home (Public1)</h2>
        <p>
            <Link to='/'>Login</Link>
         </p>
      </Container>
    </React.Fragment>
  );
};
export default Home;