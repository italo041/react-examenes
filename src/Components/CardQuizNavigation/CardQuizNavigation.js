import React from "react";
import { Card, Pagination } from "react-bootstrap";
import "./CardQuizNavigation.css";

const CardQuizNavigation = (props) => {
  const { step, setStep } = props; 
  
  let active = step;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}  onClick={() => setStep(number)}>
        {number}
      </Pagination.Item>
    );
  }

  const paginationBasic = (
    <div>
      <Pagination>{items}</Pagination> 
    </div>
  );

  return (
    <Card className="card-quiz-navigation">
      <Card.Body className="card-quiz-navigation-body">
        <div className="text-secondary">Navegacion de preguntas</div>
        {paginationBasic}
        <div className="tiempo-restante">
            <div className="text-secondary pr-2">Tiempo restante: </div>
            {props.children}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardQuizNavigation;
