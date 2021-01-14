import React, { useState, useEffect } from "react";
import "./ProductsStyles.css";
import { Button } from "react-bootstrap";
import { useStateValue } from "../../StateProvider";
import axios from "axios";

function Products(props) {
  const [{ apiKey }, dispatch] = useStateValue();

  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log(props.prod_id);
    axios
      .post(`${apiKey}/add_to_cart`, {
        prodid: props.Prod_id,
      })
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <div className="products container">
      <div className="products__box">
        <img alt={props.Prod_id} src={props.Prod_img_url} />
        <h4>{props.Prod_name}</h4>
        <div className="products__desp">
          <p style={{ marginBottom: 0 }}>
            <strong>₹{props.Prod_price}</strong>
          </p>
          <div style={{ display: "flex", margin: 0 }}>
            {Array(props.Prod_rating)
              .fill()
              .map((_, i) => (
                <p style={{ margin: 0 }}>⭐</p>
              ))}
          </div>
        </div>
        {/* <Button className="products__addToCart" variant="outline-success">
          Buy Now
        </Button>
        <Button
          onClick={handleAddToCart}
          className="products__addToCart"
          variant="outline-primary"
        >
          Add To Cart
        </Button> */}
      </div>
    </div>
  );
}

export default Products;
