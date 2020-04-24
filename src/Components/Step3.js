import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import CardPregunta from "./CardPregunta/CardPregunta";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const Step3 = (props) => {
  const { nextStep, prevStep, values, setValues } = props;

  return (
    <CardPregunta>
      <Form.Group>
        <Form.Label>¿Quien es Simon Bolivar?</Form.Label>
        <div className="d-flex flex-row justify-content-center">
          <Card className="mx-2">
            <LazyLoadImage
              alt={""}
              effect="blur"
              src={"img/simon_bolivar.jpg"}
              className="img_pregunta"
              delayTime={1000}
            />
            <Card.Body>
              <Form.Check
                type="radio"
                label=""
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
                value="Correcta"
                onChange={(e) => {
                  setValues({
                    ...values,
                    rpta3: { value: e.target.value, isTrue: true },
                  });
                }}
              />
            </Card.Body>
          </Card>
          <Card className="mx-2">
            <LazyLoadImage
              alt={""}
              effect="blur"
              src={"img/san_martin.jpg"}
              className="img_pregunta"
              delayTime={1000}
            />
            <Card.Body>
              <Form.Check
                type="radio"
                label=""
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                value="Incorrecta"
                onChange={(e) => {
                  setValues({
                    ...values,
                    rpta3: { value: e.target.value, isTrue: false },
                  });
                }}
              />
            </Card.Body>
          </Card>
        </div>
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

export default Step3;
