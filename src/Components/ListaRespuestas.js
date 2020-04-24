import React from "react";
import {ListGroup, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CardPregunta from "./CardPregunta/CardPregunta";

const ListaRespuestas = (props) => {
  const { rpta1, rpta2, rpta3, rpta4, rpta5 } = props.values;

  window.pausarTimer();

  let history = useHistory();
  return (
    
    <CardPregunta>
      
      <Card.Header>Sus respuestas</Card.Header>
      <ListGroup style={{ marginBottom: "5vw" }}>
        <ListGroup.Item>
          ¿Cuanto es 1 + 1? : <span className="text-success">{rpta1}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          ¿Cuanto es 4 x 4? : <span className="text-success">{rpta2}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          ¿Quien fue Simon Bolivar? :{" "}
          <span className="text-success">{rpta3}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          ¿Cuando fue la independencia del Peru? :
          <span className="text-success">{rpta4}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          ¿30 + 20? :<span className="text-success">{rpta5}</span>
        </ListGroup.Item>
      </ListGroup>
      <Button variant="info" className="mx-1" onClick={() => history.push("/")}>
        Regresar al menu principal
      </Button>
    </CardPregunta>
  );
};

export default ListaRespuestas;
