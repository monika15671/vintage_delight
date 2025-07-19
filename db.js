import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/project", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ DB connection failed", err);
    process.exit(1);
  }
};

export default connectdb;
