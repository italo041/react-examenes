import React from "react";
import CardPregunta from "./CardPregunta/CardPregunta";
import { Button, Form } from "react-bootstrap"; 

const Step5 = (props) => {
    const { nextStep, prevStep, values, setValues } = props; 
  return (
    <CardPregunta>
      <Form.Group>
        <Form.Label>¿30+20?</Form.Label>
        <Form.Check
          type="radio"
          label="50"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          onChange={(e) => setValues({ ...values, rpta5: 50 })}
        />
        <Form.Check
          type="radio"
          label="60"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
          onChange={(e) => setValues({ ...values, rpta5: 60 })}
        />
        <Form.Check
          type="radio"
          label="Ninguno"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
          onChange={(e) => setValues({ ...values, rpta5: "Ninguno" })}
        />
      </Form.Group>

      <Button variant="light" className="mx-1" onClick={() => prevStep()}>
        Atras
      </Button>
      <Button
        variant="info"
        className="mx-1"
        onClick={() => {
          nextStep();
        }}
      >
        Siguente
      </Button>
    </CardPregunta>
  );
};

export default Step5;
