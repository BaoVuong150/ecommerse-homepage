import React from "react";
import HomepageBanner from "../../assets/imageMain.png";
import Products from "../products/Products";
import SubBanner from "./SubBanner";
import BannerFooter from "./BannerFooter";
import MessengerIcon from "../contexts/MessengerIcon";
import LogoTechnology from "./LogoTechnology";

const HomePage = () => {
  return (
    <div className="flex flex-col ">
      {/* Banner */}
      <div className="w-full mt-8 sm:pl-0 md:pl-40">
        <img
          className="w-full h-auto rounded-md"
          src={HomepageBanner}
          alt="Homepage Banner"
        />
      </div>
    <MessengerIcon />
      {/* Products */}
      <div className="w-full mt-8">
        <Products />
      </div>
      <div>
        <SubBanner />
      </div>
      <div>
        <BannerFooter />
      </div>
      <div>
        <LogoTechnology />
      </div>
    </div>
  );
};

export default HomePage;
