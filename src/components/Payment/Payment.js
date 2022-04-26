import React from "react";
import Footer from "../../reuseableItems/Footer/Footer";
import Navbar from "../../reuseableItems/Navbar/Navbar";
import BackButtonPayment from "./BackButtonPayment";
import PaymentFormHeading from "./PaymentFormHeading";
import PaymentMethodTextField from "./PaymentMethodTextField";
import PaymentPersonalDetailsTextFields from "./PaymentPersonalDetailsTextFields";

function Payment() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="container">
          <BackButtonPayment
            buttonName="Back to Portfolioscrapper"
            heading={"Payment"}
          />
        </div>
        <div className="container">
          <PaymentFormHeading
            paymentMethodNumber={"01"}
            heading={"Personal Detail"}
          />
        </div>
        <div className="container">
          <PaymentPersonalDetailsTextFields />
        </div>
        <div className="container">
          <PaymentFormHeading
            paymentMethodNumber={"02"}
            heading={"Payment Method"}
          />
        </div>
        <div className="container">
          <PaymentMethodTextField />
        </div>
        <div className="container">
          <div className="text-center">
            <button
              className="btn-dark"
              style={{
                marginTop: "2rem",
                color: "white",
                background: "black",
                marginLeft: "48%",
                marginRight: "548%",
                borderRadius: "1rem",
                borderColor: "black",
                width: "10rem",
                height: "3rem",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            >
              Finish and Pay
            </button>
          </div>
        </div>
        <div className="container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Payment;
