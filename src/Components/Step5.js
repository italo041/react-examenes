import React from "react";
import CardPregunta from "./CardPregunta/CardPregunta";
import { Button, Form } from "react-bootstrap";

const Step5 = (props) => {
  const { nextStep, prevStep, values, setValues } = props;
  return (
    <CardPregunta>
      <Form.Group>
        <Form.Label>¿Quien fue Miguel Grau Seminario?</Form.Label>
        <Form.Check
          type="radio"
          label="Un pintor"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="Un pintor"
          onChange={(e) => {
            setValues({
              ...values,
              rpta5: { value: e.target.value, isTrue: false },
            });
          }}
        />
        <Form.Check
          type="radio"
          label="Un escritor"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="Un escritor"
          onChange={(e) => {
            setValues({
              ...values,
              rpta5: { value: e.target.value, isTrue: false },
            });
          }}
        />
        <Form.Check
          type="radio"
          label="Un marino militar peruano"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="Un marino militar peruano"
          onChange={(e) => {
            setValues({
              ...values,
              rpta5: { value: e.target.value, isTrue: true },
            });
          }}
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
