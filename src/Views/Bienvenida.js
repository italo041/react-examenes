import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import './Bienvenida.css'  
const Bienvenida = (props) => {
  let history = useHistory(); 

  
    
  return (
    <div className="form-centrado">
      <Container>
        <Card>
          <Card.Header>Empezar Examen</Card.Header>
          <Card.Body>
            <Card.Title>Bienvenido</Card.Title>
            <Card.Text>
              Toque el botom empezar para iniciar su examen.
            </Card.Text>
            <Button
              variant="dark"
              onClick={() => {
                history.push("formulario") }}
            >
              Empezar
              
            </Button>
          </Card.Body>
          
        </Card>
      </Container>
    </div>
  );
};

export default Bienvenida;
