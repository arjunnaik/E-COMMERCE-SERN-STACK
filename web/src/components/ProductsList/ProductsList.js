import React from "react";
import "./ProductsListStyles.css";
import { Button } from "react-bootstrap";

function ProductsList(props) {
  return (
    <div className="productList__poster">
      <div className="productList container">
        <img alt={props.prod_id} src={props.prod_img} />
        <div className="productList_details">
          <h4>{props.prod_name}</h4>
          <div className="product__rating">
            {Array(props.prod_rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <p>
            <strong>₹{props.prod_price}</strong>
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
