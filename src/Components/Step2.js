import React from "react";
import { Form, Button } from "react-bootstrap";
import CardPregunta from "./CardPregunta/CardPregunta";

const Step2 = (props) => {
  const { nextStep, prevStep, values, setValues } = props;

  return (
    <CardPregunta>
      <Form.Group>
          <Form.Label>¿Cuanto es 4x4?</Form.Label>
          <Form.Control
            type="text"
            placeholder="..."
            onChange={(e) => setValues({ ...values, rpta2: e.target.value })}
            value={values.rpta2}
          />
        </Form.Group>
     
      <Button variant="light" className="mx-1" onClick={() => prevStep()}>
        Atras
      </Button>
      <Button variant="info" className="mx-1" onClick={() => nextStep()}>
        Siguente
      </Button>
    </CardPregunta>
  );
};

export default Step2;
