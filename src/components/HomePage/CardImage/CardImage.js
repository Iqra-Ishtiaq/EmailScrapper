import React from "react";
import logo from "../../../logo192.png";
import CardImageStyling from "./CardImageStyling";
import "../HomePage.css";

function CardImage() {
  return (
    <>
      <div
        className="container"
        style={{ marginLeft: "2rem", paddingTop: "3rem" }}
      >
        <div className="row">
          <div className="col-xs-4  col-md-4">
            <div className="panel">
              <CardImageStyling
                heading={"Search and Validate"}
                image={logo}
                text={
                  "Search and validate business emails on the world's largest B2B professional network"
                }
              />
            </div>
          </div>
          <div className="col-xs-4  col-md-4">
            <div className="panel">
              <CardImageStyling
                heading={"Search and Validate"}
                image={logo}
                text={
                  "Search and validate business emails on the world's largest B2B professional network"
                }
              />
            </div>
          </div>
          <div className="col-xs-4 col-md-4">
            <div className="panel">
              <CardImageStyling
                heading={"Search and Validate"}
                image={logo}
                text={
                  "Search and validate business emails on the world's largest B2B professional network"
                }
              />
            </div>
          </div>
        </div>
        {/* 2 row */}
        <div className="row">
          <div className="col-xs-4  col-md-4">
            <div className="panel">
              <CardImageStyling
                heading={"Search and Validate"}
                image={logo}
                text={
                  "Search and validate business emails on the world's largest B2B professional network"
                }
              />
            </div>
          </div>
          <div className="col-xs-4  col-md-4">
            <div className="panel">
              <CardImageStyling
                heading={"Search and Validate"}
                image={logo}
                text={
                  "Search and validate business emails on the world's largest B2B professional network"
                }
              />
            </div>
          </div>
          <div className="col-xs-4 col-md-4">
            <div className="panel">
              <CardImageStyling
                heading={"Search and Validate"}
                image={logo}
                text={
                  "Search and validate business emails on the world's largest B2B professional network"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardImage;
