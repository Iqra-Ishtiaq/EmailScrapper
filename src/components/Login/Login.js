import React from "react";
import "./Login.css";

// import LoginTextFeildBox from "../component/LoginTextFeildBox";
// import LoginCheckbox from "../component/LoginCheckbox";
import Button from "react-bootstrap/Button";
import logo from "../../logo192.png";
import Card from "react-bootstrap/Card";
import LoginTextFeildBox from "./LoginTextFeildBox";
import LoginCheckbox from "./LoginCheckbox";
import BackButton from "./BackButton";


function login() {
  //UseState

  return (
    <>
    <BackButton buttonName={"Back to Portfolioscrapper"}/>
      <div
        className="container-fluid"
        style={{ paddingTop: "1rem", margin: "2rem" }}
      >
        <div className="col d-flex justify-content-center">
          <Card
            style={{
             
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              height: "32rem",
            }}
          >
            <Card.Body>
              <div className="container" style={{width:"40rem"}}>
                <Card.Title
                  style={{
                    paddingLeft: "3rem",
                    fontWeight: "bold",
                    fontSize: "30px",
                    paddingTop:"2rem"
                  }}
                >
                  Login
                </Card.Title>
                <div className="row " style={{ display: "flex" }}>
                  <div className="col-sm-6">
                    <LoginTextFeildBox /> {/* End of Feild */}
                  </div>
                  {/* Image */}
                  <div className="col-sm-6">
                    <div className="col d-flex float-right">
                      <img className="img" src={logo} alt="Alt text" />
                    </div>
                  </div>{" "}
                  {/* End of Image */}
                </div>{" "}
                {/* End of Row */}
                {/* Forget Password */}
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-10 d-flex justify-content-around">
                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: "12px",
                          className: "text-right",
                        }}
                      >
                        Forget Password?
                      </p>
                    </div>
                  </div>
                </div>{" "}
                {/* End of Forget Password */}
                <LoginCheckbox />
                <div className="container">
                  <div className="row">
                    <div className="col-6 d-flex justify-content-between">
                      <Button variant="dark" className="loginBtn" type="submit">
                        Login
                      </Button>
                    </div>
                    <div className="col-6 d-flex justify-content-around">
                      <h5 className="CreateAccount">Create an Account </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default login;
