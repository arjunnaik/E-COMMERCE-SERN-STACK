import React, { useState, useEffect } from "react";
import "./MainpageStyles.css";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Search from "../Search/Search";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";
function Mainpage(props) {
  const [latestProd, setLatestProd] = useState([]);

  useEffect(() => {
    setLatestProd(props.latest_prod);
  }, [props]);
  const slideImages = [
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/092020/BookBazaar/Amazon_Book_Bazaar_September_edition_herotator_1500x600._CB405462499_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Beauty_v2_en_US_1x._CB429089975_.jpg",
  ];

  const slideProperties = {
    duration: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
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
        <Search pageValue={1} />
        <br></br>
        <h4 className="container mainpage__latest">Latest Products</h4>
        <div className="container mainpage__row">
          {/* <Products />
          <Products />
          <Products />
          <Products /> */}
          {latestProd.map((each) => {
            return (
              <Products
                key={each.Prod_id}
                prod_id={each.Prod_id}
                cat_name={each.Categories_name}
                prod_img={each.Prod_img_url}
                prod_name={each.Prod_name}
                prod_price={each.Prod_price}
                prod_rating={each.Prod_rating}
                prop_spec={each.Prod_specs}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
