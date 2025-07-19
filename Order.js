import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/css/Shop.css";

const Order = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:5000/fullstack/orders");
      setOrders(res.data);
    } catch (err) {
      console.error("❌ Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="order-container">
      <h1>📦 Orders Placed</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="orders-grid">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <h2>{order.productName}</h2>
              <p>Material: {order.material}</p>
              <p>Quantity: {order.quantity}</p>
              <p>Price: ₹ {order.price}</p>
              <p>Budget: ₹ {order.budget}</p>
              <p>Order Date: {new Date(order.date).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
