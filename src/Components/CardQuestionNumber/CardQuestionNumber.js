import React from 'react';
import { Card } from 'react-bootstrap';
import './CardQuestionNumber.css';
const CardQuestionNumber = (props) => {
    const { step } = props;
    return (
 
            <Card className="card-question-number">
                <Card.Body className="card-question-number-body">
                   <div className=" text-secondary font-weight-bold">Pregunta {step}</div>  
                   <div className=" text-secondary">Puntaje: 4</div>  
                </Card.Body>
            </Card>

    );
};

export default CardQuestionNumber;