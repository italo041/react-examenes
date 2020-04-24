import React from "react";
import "./App.css";
import Bienvenida from "./Views/Bienvenida";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./Components/UserForm/UserForm";
import { Navbar } from "react-bootstrap"; 
import { FaRegFileAlt } from "react-icons/fa";

function App() {
 
 

  return (
    <div className="App">
      <Navbar bg="info" variant="dark" className="barra">
        <Navbar.Brand href="#home"  >
          Examenes React<FaRegFileAlt className="ml-2"></FaRegFileAlt>
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
