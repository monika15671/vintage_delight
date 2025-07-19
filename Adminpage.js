import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/admin.css";

const AdminPage = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    stock: "",
  });
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/fullstack/add-product", product);
    setProduct({ name: "", description: "", price: "", imageUrl: "", stock: "" });
    fetchProducts();
  };

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/fullstack/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="admin-container">
      <h1>Admin Panel - Garments</h1>
      <form className="admin-form" onSubmit={addProduct}>
        <input name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={product.description} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={product.price} onChange={handleChange} required />
        <input name="imageUrl" placeholder="Image URL" value={product.imageUrl} onChange={handleChange} />
        <input name="stock" type="number" placeholder="Stock" value={product.stock} onChange={handleChange} required />
        <button type="submit">Add Product</button>
      </form>

      <h2>All Products</h2>
      <div className="products-list">
        {products.map((p) => (
          <div key={p._id} className="product-card">
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p>₹ {p.price}</p>
            <p>Stock: {p.stock}</p>
            {p.imageUrl && <img src={p.imageUrl} alt={p.name} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
