import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Garments Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
