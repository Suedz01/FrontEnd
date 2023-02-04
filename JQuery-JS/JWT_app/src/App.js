import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Home from './components/Home';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import TesteLogin from './components/login/TesteLogin';

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home user={user}/>} />
            <Route exact path="/dashboard" element={<Dashboard user={user}/>} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/testelogin" element={<TesteLogin />} />
          </Routes>
        </BrowserRouter>
      </div>
    );   
}

export default App;
