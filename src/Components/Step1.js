import React from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";  

const Step1 = (props) => {
  
  const {nextStep , values, setValues } = props; 


  let history = useHistory();
  return (

   
      <Container > 
        <Card>
          <Card.Header>Pregunta 1</Card.Header>
          <Card.Body> 
              <Form.Group controlId="formBasicEmail">
                <Form.Label>¿Cuanto es 1 + 1 ?</Form.Label>
                <Form.Control type="text" placeholder="..." onChange={e => setValues({...values,rpta1:e.target.value})} value={values.rpta1}  /> 
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Cuanto es 4x4</Form.Label>
                <Form.Control type="text" placeholder="..." onChange={e => setValues({...values,rpta2:e.target.value})} value={values.rpta2}  />
              </Form.Group> 
              <Button variant="light" className="mx-1" onClick={() => history.push("/")}>
                Atras
              </Button>
              <Button variant="dark" className="mx-1" onClick={() => nextStep()}>
                Siguente
              </Button>
         
          </Card.Body>
        </Card>
      </Container>
 

  );
};

export default Step1;
