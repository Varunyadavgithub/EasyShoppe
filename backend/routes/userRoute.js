import express from "express";
import {
  loginUser,
  signUpUser,
  adminLogin,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/signup", signUpUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);

export default userRouter;
