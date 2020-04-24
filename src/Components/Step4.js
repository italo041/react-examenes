import React from "react";
import { Button, Form } from "react-bootstrap";
import CardPregunta from "./CardPregunta/CardPregunta";

const Step4 = (props) => {
  const { nextStep, prevStep, values, setValues } = props;
  return (
    <CardPregunta>
      <Form.Group>
        <Form.Label>¿Cuando se promulgó la independencia del Peru?</Form.Label>
        <Form.Check
          type="radio"
          label="28 de julio de 1820"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="28 de julio de 1820"
          onChange={(e) => {
            setValues({
              ...values,
              rpta4: { value: e.target.value, isTrue: false },
            });
          }}
        />
        <Form.Check
          type="radio"
          label="28 de julio de 1821"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="28 de julio de 1821"
          onChange={(e) => {
            setValues({
              ...values,
              rpta4: { value: e.target.value, isTrue: true },
            });
          }}
        />
        <Form.Check
          type="radio"
          label="27 de julio de 1821"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="27 de julio de 1821"
          onChange={(e) => {
            setValues({
              ...values,
              rpta4: { value: e.target.value, isTrue: false },
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

export default Step4;
