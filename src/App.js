import React from "react";
import "./App.css";
import Bienvenida from "./Views/Bienvenida";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./Components/UserForm";
import { Navbar } from "react-bootstrap";

function App() {
 
 

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="barra">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Examenes React
        </Navbar.Brand>
      </Navbar>

      <Router>
          <Switch>
            <Route component={Bienvenida}  path="/" exact />
            <Route component={UserForm} path="/formulario" exact />
          </Switch>
        </Router>

      
    </div>
  );
}

export default App;
