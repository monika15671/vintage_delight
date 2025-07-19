import signupcollection from "../model/model.js";
import loginCollection from "../model/loginmodel.js"; // ✅ add this

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export const regesterUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await signupcollection.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already exists" });

    user = new signupcollection({ name, email, password });

    await user.save();

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await signupcollection.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // ✅ Save login log
    const newLogin = new loginCollection({ email });
    await newLogin.save();

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
