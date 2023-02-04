import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = ( props ) => {
    if(!props.user) {
        console.log('Problemas!!');
        return (
            <React.Fragment>            
                <Container>
                    <h2>Home (Public)</h2>
                    <p>
                        <Link to='/login'>Login</Link>
                    </p>
                    <p>
                        <Link to='/testelogin'>Teste de Login</Link>
                    </p>

                </Container>            
            </React.Fragment>      
        );    
    }
    else {
        return (
            <React.Fragment>            
                <Container>
                    <h2>Home (Public)</h2>
                    <p>
                        <Link to='/login'>Login</Link>
                    </p>
                    <p>
                        <Link to='/signup'>Sign up</Link>
                    </p>
                    <p>
                        <Link to='/dashboard'>Dashboard</Link>
                    </p>
    
    
                </Container>            
            </React.Fragment>      
        );
    }
  };
export default Home;