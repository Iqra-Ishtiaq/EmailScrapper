import React from "react";
import CardImage from "./CardImage/CardImage";
import HomePageTextCenter from "./HomePageTextCenter";
import ImageoverImageHomePage from "./ImageoverImageHomePage";
import ImageRightWithTextHomePage from "./ImageRightWithTextHomePage";
import ImgWithTextonLeft from "./ImgWithTextonLeft";
import Navbar from "./Navbar";
import WizardHomePage from "./Wizard/WizardHomePage";
import Repricing from "./Repricing/Repricing";
import JoinFreeHomePage from "./JoinFreeHomePage";
import ImageinrowithText from "./ImageinrowwithText";
import Accordion from "./Accordion/Accordion";
import HomePageCardWithBlackBackground from "./HomePageCardWithBlackBackground";
import Footer from "../../reuseableItems/Footer/Footer";

function HomePage() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div>
          <ImgWithTextonLeft />
        </div>
        <div>
          <ImageoverImageHomePage />
        </div>
        <div>
          <ImageRightWithTextHomePage />
        </div>
        <div>
          <HomePageTextCenter
            heading={"How our LinkedIn extension works"}
            paragraph={
              "Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for. Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs."
            }
          />
        </div>
        <div>
          <WizardHomePage />
        </div>
        <div>
          <HomePageTextCenter
            heading={"Check out what's cool about us"}
            paragraph={
              "Streamlined hiring. GetLance’s sophisticated algorithms highlight projects you’re a great fit for. Top Rated and Rising Talent programs. Enjoy higher visibility with the added status of prestigious programs."
            }
          />
        </div>
        <div>
          <CardImage />
        </div>

        <div>
          <Repricing />
        </div>
        <div>
          <JoinFreeHomePage />
        </div>
        <div>
          <ImageinrowithText />
        </div>
        <div>
          <Accordion />
        </div>
        <div>
          <HomePageCardWithBlackBackground />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
