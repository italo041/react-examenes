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
        <Form.Label>¿Cuanto es 35x30?</Form.Label>
        <Form.Check
          type="radio"
          label="1050"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="1050"
          onChange={(e) => {
            setValues({
              ...values,
              rpta1: { value: e.target.value, isTrue: true },
            });
          }}
        />
        <Form.Check
          type="radio"
          label="950"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="950"
          onChange={(e) => {
            setValues({
              ...values,
              rpta1: { value: e.target.value, isTrue: false },
            });
          }}
        />
        <Form.Check
          type="radio"
          label="1015"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="1015"
          onChange={(e) => {
            setValues({
              ...values,
              rpta1: { value: e.target.value, isTrue: false },
            });
          }}
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
