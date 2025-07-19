import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  imageUrl: String,
  stock: Number,
});

export default mongoose.model('Product', ProductSchema);
