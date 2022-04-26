import React from "react";
import logo from "../../logo192.png";

function centerImgUserProfile() {
  return (
    <>
      <div className="container">
        <div style={{ paddingTop: "4rem" }}>
          <h3 style={{ textAlign: "center", color: "black" }}>Hi User</h3>
        </div>
      </div>

      <div className="container">
        <div
          className="d-flex justify-content-center"
          style={{ paddingTop: "2rem" }}
        >
          <img src={logo} alt="logo"></img>
        </div>
      </div>
    </>
  );
}

export default centerImgUserProfile;
