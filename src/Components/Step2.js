import React from "react";
import { Container, Card, Form, Button } from "react-bootstrap";

const Step2 = (props) => {

    const {nextStep, prevStep, values, setValues    } = props;

  return (
      <Container>
        <Card>
          <Card.Header>Pregunta 2</Card.Header>
          <Card.Body> 
              <Form.Group controlId="formBasicEmail">
                <Form.Label>¿Quien fue Simon Bolivar?</Form.Label>
                <Form.Control type="text" placeholder="..." onChange={e => setValues({...values,rpta3:e.target.value})} value={values.rpta3}/> 
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>¿Cuando fue la independencia del Peru?</Form.Label>
                <Form.Control type="text" placeholder="..." onChange={e => setValues({...values,rpta4:e.target.value})} value={values.rpta4}   />
              </Form.Group>
              <Button 
              variant="light" 
              className="mx-1"
              onClick={() => prevStep()}>
                Atras
              </Button>
              <Button
                variant="dark"
                className="mx-1"
                onClick={() => nextStep()}>
                Siguente
              </Button>
        
          </Card.Body>
        </Card>
      </Container>
  );
};

export default Step2;
