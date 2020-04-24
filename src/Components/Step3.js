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
        <Form.Label>¿Quien fue Simon Bolivar?</Form.Label>
        {/* <Form.Control
          type="text"
          placeholder="..."
          onChange={(e) => setValues({ ...values, rpta3: e.target.value })}
          value={values.rpta3}
        /> */}
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
                onChange={(e) => setValues({ ...values, rpta3: "Verdadera" })}
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
                onChange={(e) => setValues({ ...values, rpta3: "Falsa" })}
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
