import React from "react";
import "./ProductsListStyles.css";
import { Button } from "react-bootstrap";

function ProductsList() {
  return (
    <div className="productList__poster">
      <div className="productList container">
        <img
          alt="1"
          src="https://m.media-amazon.com/images/I/61dPLkN4poL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <div className="productList_details">
          <h4>Crucial BX500 240GB 3D NAND SATA 2.5-inch SSD</h4>
          <p>⭐⭐⭐⭐⭐</p>
          <p>
            <strong>₹3000</strong>
          </p>
        </div>
        <div className="productList_buttons">
          <Button variant="outline-success">Buy Now</Button>
          <Button variant="outline-primary">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
