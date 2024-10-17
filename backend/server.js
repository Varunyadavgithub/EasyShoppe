import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.get("/", (req, res) => {
  res.send("api is working...!");
});
app.use("/api/v1/user",userRouter);
app.use("/api/v1/product",productRouter);
app.use("/api/v1/cart",cartRouter);
app.use("/api/v1/order",orderRouter);

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
