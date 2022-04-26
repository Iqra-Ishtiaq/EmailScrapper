import React from "react";
import "../HomePage.css";


function CardImage({ image, heading, text }) {
  return (
    <>
      <div className="caption">
        <section className="mainDive">
          <h3 className="headingSearch">{heading}</h3>
          <p className="searchpara">
            {/* Search and validate business emails on the world's largest B2B
          professional network */}
            {text}
          </p>

          <div className="diveImage">
            <img
              src={image}
              alt="logo"
              style={{
                width: "50%",
                height: "75%",
                top: "16rem",
                position: "relative",
              }}
            ></img>
          </div>
        </section>
      </div>
    </>
  );
}

export default CardImage;
