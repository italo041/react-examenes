import React from "react";
import {ListGroup, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CardPregunta from "./CardPregunta/CardPregunta";
import { MdCheck , MdClose } from "react-icons/md";

const ListaRespuestas = (props) => {

  const {values} = props;  
  const { rpta1, rpta2, rpta3, rpta4, rpta5 } = props.values;  
 
  let valores = Object.values(values);
  let puntaje = 0;
  valores.forEach(element => {
    if(element.isTrue === true){
      puntaje += 4;
    }
  });
 
  
  window.pausarTimer();

  let history = useHistory();
  return (
    
    <CardPregunta>
      
      <Card.Header>Sus respuestas</Card.Header>
      <ListGroup style={{ marginBottom: "5vw" }}>
        <ListGroup.Item>
  ¿Cuanto es 35x30? : <span className={rpta1.isTrue ? "text-success" : "text-danger"}>{rpta1.value} {rpta1.isTrue ? <MdCheck></MdCheck> : <MdClose></MdClose>}</span>
        </ListGroup.Item>
        <ListGroup.Item>
        ¿Cuanto es 500x102? : <span className={rpta2.isTrue ? "text-success" : "text-danger"}>{rpta2.value} {rpta2.isTrue ? <MdCheck></MdCheck> : <MdClose></MdClose>}  </span>
        </ListGroup.Item>
        <ListGroup.Item>
        ¿Quien es Simon Bolivar? : 
          <span className={rpta3.isTrue ? "text-success" : "text-danger"}>{rpta3.value} {rpta3.isTrue ? <MdCheck></MdCheck> : <MdClose></MdClose>} </span>
        </ListGroup.Item>
        <ListGroup.Item>
          ¿Cuando se promulgó la independencia del Peru? :
          <span className={rpta4.isTrue ? "text-success" : "text-danger"}>{rpta4.value} {rpta4.isTrue ? <MdCheck></MdCheck> : <MdClose></MdClose>} </span>
        </ListGroup.Item>
        <ListGroup.Item>
        ¿Quien fue Miguel Grau Seminario? :<span className={rpta5.isTrue ? "text-success" : "text-danger"}>{rpta5.value} {rpta5.isTrue ? <MdCheck></MdCheck> : <MdClose></MdClose>}</span>
        </ListGroup.Item>
        <ListGroup.Item>
          Puntaje Total : {puntaje} 
        </ListGroup.Item>
      </ListGroup>
      <Button variant="info" className="mx-1" onClick={() => history.push("/")}>
        Regresar al menu principal
      </Button>
    </CardPregunta>
  );
};

export default ListaRespuestas;
