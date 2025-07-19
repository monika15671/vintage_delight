import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
  email: { type: String, required: true },
  loginTime: { type: Date, default: Date.now },
});

const loginCollection = mongoose.model("logins", loginSchema);

export default loginCollection;
