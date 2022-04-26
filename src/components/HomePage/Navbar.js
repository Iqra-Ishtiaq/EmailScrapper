import React from "react";
import "../../reuseableItems/Navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="container-fluid">
        <div id="navbar">
          <a  id="logo">Email Scrapper</a>
          <div id="navbar-right">
            <a href="#home">Account</a>
            <a href="#home">How it works</a>
            <a href="#home">Features</a>
            <a href="#home">Pricing</a>
            <a href="#home">Login</a>
            <a href="#contact" className="active">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
