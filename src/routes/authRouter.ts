import { Router } from "express";
import {  getUser,  } from "../controllers/userController";
import { login } from "../controllers/authController";

const authRouter = Router();

authRouter.get("/login", login);

export default authRouter;