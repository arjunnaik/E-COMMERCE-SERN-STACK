import React from "react";
import "./ProductsStyles.css";
import { Button } from "react-bootstrap";

function Products() {
  return (
    <div className="products container">
      <div className="products__box">
        <img
          alt="1"
          src="https://m.media-amazon.com/images/I/51M5x3DPOHL._AC_SY200_.jpg"
        />
        <h4>ASUS G512LV-AZ163T</h4>
        <div className="products__desp">
          <p>
            <strong>₹69,000</strong>
          </p>
          <p>⭐⭐⭐⭐</p>
        </div>
        <Button className="products__addToCart" variant="outline-success">
          Buy Now
        </Button>
        <Button className="products__addToCart" variant="outline-primary">
          Add To Cart
        </Button>
      </div>
    </div>
  );
}

export default Products;
