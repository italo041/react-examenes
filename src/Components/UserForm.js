import React, { useState } from "react";
import Step2 from "./Step2";
import Step1 from "./Step1";
import Step3 from "./Step3"; 
import Step4 from "./Step4";  
import Timer from "./Timer";

const UserForm = (props) => {
 
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    rpta1:'',
    rpta2:'',
    rpta3:'',
    rpta4:'',
    rpta5:'' 
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

      default:
        return <h1 className="pt-5">ga</h1>;
        break;
    }
  }
  
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100"> 
         <Timer expiryTimestamp={time}  ></Timer>
         
        {getStep()}
    </div>
  )
  ;
};

export default UserForm;
