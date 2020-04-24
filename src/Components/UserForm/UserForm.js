import React, { useState } from "react";
import Step2 from "../Step2";
import Step1 from "../Step1";
import Step3 from "../Step3";
import Step4 from "../Step4";
import Timer from "../Timer/Timer.js";
import CardQuizNavigation from "../CardQuizNavigation/CardQuizNavigation";
import CardQuestionNumber from "../CardQuestionNumber/CardQuestionNumber";
import "./UserForm.css";
import Step5 from "../Step5";
import ListaRespuestas from "../ListaRespuestas";

const UserForm = (props) => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    rpta1: {
      value:"",
      isTrue:false
    },
    rpta2: {
      value:"",
      isTrue:false
    },
    rpta3: {
      value:"",
      isTrue:false
    },
    rpta4: {
      value:"",
      isTrue:false
    },
    rpta5: {
      value:"",
      isTrue:false
    },
  });
 

  //Ir hacia adelante
  const nextStep = () => {
    setStep(step + 1);
  };

  //Ir hacia atras
  const prevStep = () => {
    setStep(step - 1);
  };

  function getStep() {
    switch (step) {
      case 1:
        return (
          <Step1
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
            setValues={setValues} 
          ></Step1>
        );
      case 2:
        return (
          <Step2
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
            setValues={setValues} 
          ></Step2>
        );

      case 3:
        return (
          <Step3
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
            setValues={setValues} 
          ></Step3>
        );

      case 4:
        return (
          <Step4
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
            setValues={setValues} 
          ></Step4>
        );

      case 5:
        return (
          <Step5
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
            setValues={setValues} 
          ></Step5>
        );

      default:
        return (
          <ListaRespuestas
            nextStep={nextStep}
            prevStep={prevStep}
            values={values}
            setValues={setValues} 
          ></ListaRespuestas>
        );
    }
  }

  const time = new Date();
  time.setSeconds(time.getSeconds() + 601); // 10 minutes timer

  return (
    <div className="useform-style">
      {step !== 6 && (
        <React.Fragment>
          <CardQuizNavigation step={step} setStep={setStep}>
            <Timer expiryTimestamp={time}></Timer>
          </CardQuizNavigation>
          <CardQuestionNumber step={step}></CardQuestionNumber>
        </React.Fragment>
      )}
      {getStep()}
    </div>
  );
};

export default UserForm;
