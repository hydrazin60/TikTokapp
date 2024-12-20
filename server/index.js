import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/tiktok/mobile_app/api/v1/user" , userRoutes)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(`mongoDB connection error: ${err.message}`));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
