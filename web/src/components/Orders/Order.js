import axios from "axios";
import React, { useEffect, useState } from "react";
import { useStateValue } from "../../StateProvider";
import OrderSingleItem from "./OrderSingleItem";
import "./OrderStyles.css";

function Order() {
  const [{ apiKey, user, basket }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .post(`${apiKey}/recent_orders`, {
        user: user?.Email,
      })
      .then((res) => {
        setOrders(res.data);
      });
  }, [user]);
  return (
    <div className="orders container">
      <div>
        <br></br>
        <h4>Your Orders</h4>
        <br></br>
        <br></br>
        {orders.map((each) => {
          return <OrderSingleItem key={each.Order_uuid} order={each} />;
        })}
      </div>
    </div>
  );
}

export default Order;
