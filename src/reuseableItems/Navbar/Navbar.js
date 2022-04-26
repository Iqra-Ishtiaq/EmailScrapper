import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="container">
        <div id="navbar">
          <a  id="logo">
            Email Scrapper
          </a>
          <div id="navbar-right">
            <a  href="#home">
              Account
            </a>
            <a href="#contact" className="active">UserProfile</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
