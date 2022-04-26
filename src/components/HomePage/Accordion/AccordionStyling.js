import { SelectUnstyled } from "@mui/base";
import React from "react";

function AccordionStyling({ question, answer }) {
  const [selected, setSelected] = React.useState(true);
  return (
    <>
      <div className="item">
        <div className="title" onClick={() => setSelected(!selected)}>
          <p className="paragraph">{question}</p>
          <span
            style={{
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {selected ? "-" : "+"}
          </span>
        </div>
        <div className={selected ? "content show" : "content"}>{answer}</div>
      </div>
    </>
  );
}

export default AccordionStyling;
