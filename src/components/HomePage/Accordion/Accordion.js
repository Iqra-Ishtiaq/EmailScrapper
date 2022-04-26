import React from "react";
import "./accordion.css";
import AccordionStyling from "./AccordionStyling";
import data from "./data";

const Accordion = () => {
  const [questions, setQuestions] = React.useState(data);

  return (
    <>
      <div className="container" style={{paddingTop:"4rem"}}>
        <h1 className="text-center">
          Popular Questions
        </h1>
        <div className="wrapper">
        <div className="accordion" style={{ paddingTop: "3rem" }}>
          {questions.map((question) => {
            return <AccordionStyling key={question.id} {...question} />;
          })}
        </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
