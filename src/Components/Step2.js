import React from "react";
import { Form, Button } from "react-bootstrap";
import CardPregunta from "./CardPregunta/CardPregunta";

const Step2 = (props) => {
  const { nextStep, prevStep, values, setValues } = props;

  return (
    <CardPregunta>
      <Form.Group>
        <Form.Label>¿Cuanto es 500x102?</Form.Label>
        <Form.Check
          type="radio"
          label="51000"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="51000"
          onChange={(e) => {
            setValues({
              ...values,
              rpta2: { value: e.target.value, isTrue: true },
            });
          }}
        />
        <Form.Check
          type="radio"
          label="50050"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="50050"
          onChange={(e) => {
            setValues({
              ...values,
              rpta2: { value: e.target.value, isTrue: false },
            });
          }}
        />
        <Form.Check
          type="radio"
          label="51050"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
          value="51050"
          onChange={(e) => {
            setValues({
              ...values,
              rpta2: { value: e.target.value, isTrue: false },
            });
          }}
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
