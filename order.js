import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  productId: String,  // ✅ MUST BE STRING
  productName: String,
  material: String,
  quantity: Number,
  budget: Number,
  price: Number,
  date: { type: Date, default: Date.now },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
