import React from "react";

function JoinFreeHomePage() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="container-fluid"
          style={{
            marginTop: "6rem",
            borderRadius: "1px",
            borderStyle: "solid",
            borderColor: "black",
            marginLeft: "3rem",
          }}
        >
          <div className="text-center" style={{ paddingTop: "2rem" }}>
            <h1>Join for Free Today</h1>
            <p style={{ paddingTop: "2rem" }}>
              {" "}
              Supercharge your team today with the World's
              <br />
              #1 LinkedIn Scrapper
            </p>
          </div>
          <div className="row">
            <div className="col text-center">
              <button
                className="btn btn-outline"
                style={{
                  borderColor: "black",
                  backgroundColor: "white",
                  fontSize: "12px",
                  color: "black",
                  fontWeight: "bold",
                  marginRight: "2rem",
                }}
              >
                Install Extension
              </button>
              <button
                className="btn btn-outline"
                style={{
                  borderColor: "black",
                  backgroundColor: "black",
                  fontSize: "12px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Create Account
              </button>{" "}
            </div>
          </div>
          {/* icon text start */}
          <div className="text-center" style={{ paddingBottom: "3rem" }}>
            <div className="row" style={{ paddingTop: "3rem" }}>
              <div className="col-sm-6 col-md-5 col-lg-4">
                <span
                  className="fas fa-check"
                  style={{ color: "green" }}
                ></span>
                <span className="text" style={{ marginLeft: "1rem" }}>
                  50 free credits per/mon
                </span>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4">
                <span
                  className="fas fa-check"
                  style={{ color: "green" }}
                ></span>
                <span className="text" style={{ marginLeft: "1rem" }}>
                  No credit card required
                </span>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4">
                <span
                  className="fas fa-check"
                  style={{ color: "green" }}
                ></span>
                <span className="text" style={{ marginLeft: "1rem" }}>
                  Cancel Anytime{" "}
                </span>
              </div>
            </div>
          </div>
          {/* End */}
        </div>
      </div>
    </>
  );
}

export default JoinFreeHomePage;
