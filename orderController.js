// server/controller/orderController.js
import Order from "../model/order.js";

export const placeOrder = async (req, res) => {
  console.log("🔥 Incoming order:", req.body);

  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    console.log("✅ Order saved:", savedOrder);

    res.status(201).json({ message: "✅ Order saved", order: savedOrder });
  } catch (err) {
    console.error("❌ Error saving order:", err);
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};
