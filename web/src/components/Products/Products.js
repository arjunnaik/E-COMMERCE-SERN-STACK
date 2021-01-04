import React, { useState, useEffect } from "react";
import "./ProductsStyles.css";
import { Button } from "react-bootstrap";
import { useStateValue } from "../../StateProvider";

function Products(props) {
  return (
    <div className="products container">
      <div className="products__box">
        <img alt={props.prod_id} src={props.prod_img} />
        <h4>{props.prod_name}</h4>
        <div className="products__desp">
          <p style={{ marginBottom: 0 }}>
            <strong>₹{props.prod_price}</strong>
          </p>
          <div style={{ display: "flex", margin: 0 }}>
            {Array(props.prod_rating)
              .fill()
              .map((_, i) => (
                <p style={{ margin: 0 }}>⭐</p>
              ))}
          </div>
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
