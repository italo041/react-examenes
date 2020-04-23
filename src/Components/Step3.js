import React from "react";
import { Container, Card, Form, Button, FormCheck } from "react-bootstrap"; 
const Step3 = (props) => {

    const {nextStep, prevStep, values, setValues} = props;

  return (
      <Container>
        <Card>
          <Card.Header>Pregunta 3</Card.Header>
          <Card.Body>
 

             <Form.Group controlId="formBasicEmail">
                <Form.Label>¿30+20?</Form.Label> 
                <Form.Check
                    type="radio"
                    label="50"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1" 
                    onChange={e => setValues({...values,rpta5:50})} 
                     
                    />
                    <Form.Check
                    type="radio"
                    label="60"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2" 
                    onChange={e => setValues({...values,rpta5:60})} 
                    />
                    <Form.Check
                    type="radio"
                    label="Ninguno"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3" 
                    onChange={e => setValues({...values,rpta5:'Ninguno'})} 
                    />
              </Form.Group>
         
                <Button
                variant="light"
                className="mx-1"
                onClick={() => prevStep()}
              >
                Atras
              </Button>
              <Button
                variant="dark"
                className="mx-1"
                onClick={() => {
                    nextStep();  
                }}
              >
                Siguente
              </Button>
      


            
          </Card.Body>
        </Card>
      </Container>
  );
};

export default Step3;
