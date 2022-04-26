import React from "react";

function PaymentFormHeading({ paymentMethodNumber, heading }) {
  return (
    <>
      <div className="container" style={{paddingTop:"4rem",}}>
        <div className="col-2 col-md-3">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>{paymentMethodNumber}</h4>
        </div>
        <div className="col-10 col-md-9">
          <h4 style={{fontSize:"18px",fontWeight:"bold"}}>{heading}</h4>
        </div>
      </div>
    </>
  );
}

export default PaymentFormHeading;
