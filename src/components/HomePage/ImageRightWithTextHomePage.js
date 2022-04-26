import React from "react";

function ImageRightWithTextHomePage() {
  return (
    <>
      <div className="container" style={{paddingTop:"11rem"}}>
        <div className="row">
          <div className="col xs-6 col-md-6 how-img">
            <img
              src="https://image.ibb.co/cHgKnU/Work_Section2_freelance_img2.png"
              className="rounded-circle img-fluid"
              alt=""
            />
          </div>
          <div className=" col xs-6 col-md-6" style={{ color: "black" }}>
            <h2>It's Our Business to Grow Yours</h2>
            <p>
              Streamlined hiring. GetLance’s sophisticated algorithms highlight
              projects you’re a great fit for. Top Rated and Rising Talent
              programs. Enjoy higher visibility with the added status of
              prestigious programs. Do substantial work with top clients.
              GetLance pricing encourages freelancers to use GetLance for repeat
              relationships with their clients.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageRightWithTextHomePage;
