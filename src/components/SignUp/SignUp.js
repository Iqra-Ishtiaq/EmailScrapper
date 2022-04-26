import React from "react";
import "./SignUp.css";
import logo from "../../logo192.png";
import BackButton from "./BackButton";
import SignUpFeilds from "./SignUpFeilds";

function SignUp() {
  return (
    <>
      <div>
        <BackButton buttonName="Back to PortPolioscrapper" />
      </div>
      {/* Start of form */}
      <section className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-left">
                        <h4 className="mt-1 mb-5 pb-1">SignUp</h4>
                      </div>

                      <div>
                        <SignUpFeilds />
                      </div>
                    </div>
                    <div
                      className="col-12 d-flex justify-content-start"
                      style={{ marginTop: "-3rem" }}
                    >
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          style={{
                            marginLeft: "6rem",
                            fontWeight: "200",
                          }}
                        >
                          <input
                            className="form-check-input"
                            style={{ marginRight: "1rem" }}
                            type="checkbox"
                          />
                          I Agree to the Terms and Conditions.
                        </label>
                      </div>
                    </div>
                    {/* End of checkbox */}
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn"
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          width: "15rem",
                          marginTop: "1rem",
                          width: "10rem",
                        }}
                      >
                        Sign Up
                      </button>
                    </div>
                    <div
                      style={{ marginBottom: "2rem", marginTop: "1rem" }}
                      className="d-flex justify-content-center"
                    >
                      <a href="#" style={{ color: "black" }}>
                        Already have an account? <b>Login</b>{" "}
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex gradient-custom-2">
                    <div class="text-black px-3 py-4 p-md-5 mx-md-4">
                      <img
                        src={logo}
                        alt="img"
                        style={{
                          marginTop: "6rem",
                          marginLeft: "5rem",
                          justifyContent: "center",
                          alignContent: "center",
                        }}
                      />
                      <div>
                        <i
                          className="fa fa-quote-left"
                          aria-hidden="true"
                          style={{
                            marginTop: "3rem",
                            position: "relative",
                          }}
                        ></i>

                        <p
                          style={{
                            marginTop: "1rem",
                            position: "relative",
                          }}
                        >
                          Email Scrapper by dev.co <br />
                          is the best one I have used <br />
                          till now
                        </p>
                      </div>
                      {/* end of block */}

                      <div
                        className="row"
                        style={{ color: "black", marginTop: "5rem" }}
                      >
                        <img
                          src={logo}
                          alt="img"
                          style={{
                            width: "35px",
                            position: "absolute",
                            bottom: "2rem",
                            marginLeft: "1rem",
                          }}
                        ></img>
                        <h4
                          style={{
                            fontSize: "12px",
                            position: "absolute",
                            bottom: "3rem",
                            marginLeft: "5rem",
                          }}
                        >
                          <b>Name </b>
                        </h4>
                        <p
                          style={{
                            fontSize: "12px",
                            position: "absolute",
                            bottom: "1rem",
                            marginLeft: "5rem",
                          }}
                        >
                          Job/Position
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
