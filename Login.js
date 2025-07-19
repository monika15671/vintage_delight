import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login.css";

const Login = ({ setOtpCode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/fullstack/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Generate OTP on success
        const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setOtpCode(generatedOtp);
        console.log("Generated OTP:", generatedOtp);

        alert("Login successful! OTP sent to your email.");
        navigate("/otp");
      } else {
        alert(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong during login.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
