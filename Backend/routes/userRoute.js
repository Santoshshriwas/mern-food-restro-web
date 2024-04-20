import express from "express";
import { loginUser,register } from "../controller/userController.js";

const userRouter = express.Router();


userRouter.post("/login",loginUser);
userRouter.post("/register",register);


export default userRouter;

