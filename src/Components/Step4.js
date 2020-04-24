import React from "react";
import { Button, Form } from "react-bootstrap";
import CardPregunta from "./CardPregunta/CardPregunta";

const Step4 = (props) => {
  const { nextStep, prevStep, values, setValues } = props;
  return (
    <CardPregunta>
      <Form.Group>
        <Form.Label>¿Cuando fue la independencia del Peru?</Form.Label>
        <Form.Control
          type="text"
          placeholder="..."
          onChange={(e) => setValues({ ...values, rpta4: e.target.value })}
          value={values.rpta4}
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

export default Step4;
