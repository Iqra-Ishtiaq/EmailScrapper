import React from "react";
import "./HomePage.css";
function HomePageTextCenter({ heading, paragraph }) {
  return (
    <>
      <div className="container" style={{ paddingTop: "5rem" }}>
        <div
          className="d-flex justify-content-center"
          style={{
            textAlign: "center",
            textAlign: "center",
            justifyItems: "center",
          }}
        >
          <div style={{ color: "black" }}>
            <h2>{heading}</h2>
            <p
              className="d-flex justify-content-center"
              style={{ textAlign: "center", justifyItems: "center" ,overflowWrap:"break-word",inlineSize:"25rem",marginLeft:"3rem"}}
            >
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageTextCenter;
