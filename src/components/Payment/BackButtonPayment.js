import React from "react";

function BackButtonPayment({ buttonName, heading }) {
  console.log(buttonName);
  console.log(heading);
  return (
    <>
      <div className="container" style={{ paddingTop: "3rem"}}>
        <div className="row">
          <div className="col-12 col-md-6">
            <p style={{fontWeight:"bold"}}>
              <span
                className="fa fa-angle-left"
                style={{ paddingRight: "2rem", fontWeight: "bold" }}
              ></span>
              {buttonName}
            </p>
          </div>
          <div className="col-12 col-md-6">
            <h2>{heading}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackButtonPayment;
