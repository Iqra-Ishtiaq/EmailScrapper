import React from "react";

const buttonName = "";
function BackButton(props) {
  return (
    <>
      <div
        className="col-12 d-flex justify-content-around"
        style={{ paddingTop: "2rem" }}
      >
        <div
          style={{
            color: "black",
            textAlign: "center",
            paddingRight: "25rem",
          }}
        >
          <h5 style={{ fontSize: "16px" }}>
            <span
              className="fa fa-angle-left"
              style={{ paddingRight: "1rem", fontWeight: "bold" }}
            ></span>
            {props.buttonName}
          </h5>
        </div>
      </div>
    </>
  );
}

export default BackButton;
