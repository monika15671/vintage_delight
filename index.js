import connectdb from "./db/db.js";
import express from "express";
import cors from "cors";
import route from "./routes/routes.js";

const PORT = process.env.PORT || 5000;
const app = express();

connectdb();

app.use(cors());
app.use(express.json());
app.use("/fullstack", route);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
