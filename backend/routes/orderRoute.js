import express from "express";
import { adminAuth } from "../middleware/adminAuth.js";
import {
  allOrders,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  updateStatus,
  userOrders,
  verifyRazorpay,
  verifyStripe,
} from "../controllers/orderController.js";
import { authUser } from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin Feature
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

// User Feature
orderRouter.post("/userorders", authUser, userOrders);

// Payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazorpay);

// verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);
orderRouter.post("/verifyRazorpay", authUser, verifyRazorpay);

export default orderRouter;
