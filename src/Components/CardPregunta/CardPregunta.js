import React from 'react';
import './CardPregunta.css';
import { Card } from 'react-bootstrap';

const CardPregunta = (props) => {
    return (
        <Card className="card-pregunta">
            <Card.Body>
                {props.children}
            </Card.Body>
        </Card>
    );
};

export default CardPregunta;