// Otp.js
import React, { useState } from "react";
import "./css/otp.css";

const Otp = ({ otpCode }) => {
  const [inputOtp, setInputOtp] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();

    if (inputOtp === otpCode) {
      alert("✅ OTP Verified! You are logged in.");
    } else {
      alert("❌ Incorrect OTP. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Verify OTP</h2>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={inputOtp}
          onChange={(e) => setInputOtp(e.target.value)}
        />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export default Otp;
