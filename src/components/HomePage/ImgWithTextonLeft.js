import React from "react";
import "./HomePage.css";

function ImgWithTextonLeft() {
  return (
    <>
      <div
        className="container"
        style={{ marginLeft: "3rem", paddingTop: "5rem" }}
      >
        <div className="row">
          <div className="col xs-6 col-md-6" style={{ color: "black" }}>
            <h2 className="heading">It's Our Business to Grow Yours</h2>
            <p style={{ paddingTop: "1rem" }}>
              Streamlined hiring. GetLance’s sophisticated algorithms highlight
              projects you’re a great fit for. Top Rated and Rising Talent
              programs. Enjoy higher visibility with the added status of
              prestigious programs. Do substantial work with top clients.
              GetLance pricing encourages freelancers to use GetLance for repeat
              relationships with their clients.
            </p>
          </div>
          <div className="col xs-6 col-md-6 how-img">
            <img
              src="https://image.ibb.co/cHgKnU/Work_Section2_freelance_img2.png"
              className="rounded-circle img-fluid"
              alt=""
            />
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-dark"
            style={{
              marginRight: "1rem",
              backgroundColor: "black",
              color: "white",
            }}
          >
            Try it for free
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            style={{
              borderWidth: "2px",
              borderColor: "black",
              background: "white",
              color: "black",
            }}
          >
            Get a demo
          </button>
        </div>
        {/* End of button */}
        {/* Start of Img */}
      </div>
    </>
  );
}

export default ImgWithTextonLeft;
