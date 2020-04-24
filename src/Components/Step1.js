import React from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CardPregunta from "./CardPregunta/CardPregunta";

const Step1 = (props) => {
  const { nextStep, values, setValues } = props;

  let history = useHistory();
  return (
    <CardPregunta>
      <Form.Group>
        <Form.Label>¿Cuanto es 1+1?</Form.Label>
        <Form.Control
          type="text"
          placeholder="..."
          onChange={(e) => setValues({ ...values, rpta1: e.target.value })}
          value={values.rpta1}
        />
      </Form.Group>
      <Button
        variant="light"
        className="mx-1"
        onClick={() => history.push("/")}
      >
        Atras
      </Button>
      <Button variant="info" className="mx-1" onClick={() => nextStep()}>
        Siguente
      </Button>
    </CardPregunta>
  );
};

export default Step1;
