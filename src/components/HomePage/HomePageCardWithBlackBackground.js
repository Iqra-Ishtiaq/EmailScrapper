import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function HomePageCardWithBlackBackground() {
  const image =
    "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80";
  return (
    <>
      <div className="container" style={{ paddingTop: "3rem" }}>
        <div
          class="card"
          style={{
            color: "white",
            backgroundColor: "black",
          }}
        >
          <div class="card-body">
            <div className="text-center">
              <h4 style={{ paddingTop: "1rem" }}>
                PortFolioscraper is built to help you hit your number
              </h4>
              <p style={{ paddingTop: "2rem" }}> Find your prospects</p>
              <button className="btn">Try it for Free</button>
            </div>
            {/* Start */}
            <div className="d-flex text-center">
              <div className="col-md-6">
                <img
                  src={image}
                  alt="img"
                  style={{
                    width: "50%",
                    height: "13rem",
                    marginLeft: "5rem",
                    paddingTop: "3rem",
                  }}
                />
              </div>
              <div
                className="col-md-6"
                style={{
                  paddingTop: "4rem",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Take a free test drive
                <div>
                  <Button
                    style={{
                      marginTop: "2rem",
                      fontSize: "16px",
                      borderColor: "white",
                      borderWidth: "1px",
                      color: "white",
                      backgroundColor: "black",
                      boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    Get Started
                  </Button>
                </div>
                <div
                  className="row"
                  style={{
                    fontSize: "10px",
                    marginTop: "2rem",
                    display: "inline-block",
                  }}
                >
                  <p style={{ display: "inline-block", marginRight: "2rem" }}>
                    No credit card required
                  </p>
                  <p style={{ display: "inline-block" }}>
                    50 free credits each month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageCardWithBlackBackground;
