
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/css/Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  // Get products
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/fullstack/products");
      setProducts(res.data);
    } catch (err) {
      console.error("❌ Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle Buy Now → Place Order
  const handleBuy = async (product) => {
    try {
      const order = {
        productId: product._id,
        productName: product.name,
        material: "Cotton", // example
        quantity: 1,
        budget: product.price,
        price: product.price
      };

      const res = await axios.post(
        "http://localhost:5000/fullstack/add-order",
        order
      );

      if (res.status === 201) {
        alert(`✅ Order placed for ${product.name}!`);
      } else {
        alert("❌ Order failed.");
      }
    } catch (err) {
      console.error(err);
      alert("❌ Order error.");
    }
  };

  return (
    <div className="shop-container">
      <h1>🛍️ Garments Shop</h1>

      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p><strong>₹ {product.price}</strong></p>
              <p>Stock: {product.stock}</p>
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-img"
                />
              )}
              <button
                className="buy-btn"
                onClick={() => handleBuy(product)}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
