import React from "react";
import { Container } from "react-bootstrap";

const Dashboard = ( user ) => {
    if(!user) {
        return (
            <React.Fragment>            
                <Container>
                    <h1>Não autorizado!!</h1>       
                </Container>            
            </React.Fragment>      
        );    
    }
    else {
        return (
            <React.Fragment>
                <Container>
                    <h2>Dashboard</h2>
                </Container>            
            </React.Fragment>      
        );    
    }    
  };
export default Dashboard;