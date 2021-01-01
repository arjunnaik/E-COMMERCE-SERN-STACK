import React from "react";
import "./MainpageStyles.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Search from "../Search/Search";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
function Mainpage() {
  const slideImages = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/fashion/ApparelGW/EOSS-Dec/2PC._CB412283660_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_ft._CB404804383_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/NewSeasonAW20/NSL_Sep20/GW-PC-BUNK-1500x600._CB405347452_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/LPG/LPG_Hero_PC_1500x600._CB407755280_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/092020/BookBazaar/Amazon_Book_Bazaar_September_edition_herotator_1500x600._CB405462499_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-Aug/C_1x._CB406400796_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/TVs/BAU/MiGW/V247704887_IN_HETV_Mi_Horizon_GW_PC_Tollhero_1500x600_v2._CB405451160_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/OnePlus/ICICI/GW/V247605984_Rush_Wireless_OnePlus_8Series_With_ICICI_DesktopTallHero_1500x600_1._CB405489072_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg",
  ];

  const slideProperties = {
    duration: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="mainPage slide-container">
      <Slide
        className="mainpage__image mainpage__container"
        {...slideProperties}
      >
        {slideImages.map((each) => {
          return (
            <div className="each-slide">
              <img src={each} alt="1"></img>
            </div>
          );
        })}
      </Slide>
      <Search />
      <br></br>
      <h4 className="container mainpage__latest">Latest Products</h4>
      <div className="container mainpage__row">
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </div>
  );
}

export default Mainpage;
