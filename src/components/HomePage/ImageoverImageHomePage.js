import React from "react";

function ImageoverImageHomePage() {
  return (
    <>
      {/* Start of Img */}
      <div className="container" style={{ paddingTop: "7rem" }}>
        <div className="text-center">
          <img
            src="https://assets.startbootstrap.com/img/screenshots/themes/sb-admin-2.png"
            className="img-fluid"
            alt="..."
            style={{ width: "50%", transform: "rotate(-8deg)" }}
          />
          <img
            src="https://assets.startbootstrap.com/img/screenshots/themes/sb-admin-2.png"
            className="img-fluid"
            alt="..."
            style={{ width: "50%", transform: "rotate(-10deg)" }}
          />
        </div>
      </div>
    </>
  );
}

export default ImageoverImageHomePage;
