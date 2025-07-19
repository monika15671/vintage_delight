import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">Garments</div>
        <ul className="main-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/shop">Shop</Link></li>

          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <ul className="auth-links">
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/otp">OTP</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
