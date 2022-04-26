import React from "react";
import Navbar from "../../reuseableItems/Navbar/Navbar";
import Footer from "../../reuseableItems/Footer/Footer";

import CenterImgUserProfile from "./centerImgUserProfile";
function UserProfile() {
  return (
    <>
      <div className="container">
        <Navbar/>
         <div className="conatiner">
          <CenterImgUserProfile />
        </div>
        <div className="container">
          <Footer />
        </div> 
      </div>
    </>
  );
}

export default UserProfile;
