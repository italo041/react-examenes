import React from "react";
import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import './Bienvenida.css'  
const Bienvenida = (props) => {
  let history = useHistory(); 

  
    
  return (
    <div className="form-centrado">  
        <Card  className="card-bienvenida"> 
          <Card.Body >
            <Card.Title  className="text-secondary">Bienvenido</Card.Title>
            <Card.Text>
              Toque el boton empezar para iniciar su examen.
            </Card.Text>
            <Button
              variant="info"
              onClick={() => {
                history.push("formulario") }}
            >
              Empezar
              
            </Button>
          </Card.Body>
          
        </Card>
 
    </div>
  );
};

export default Bienvenida;
