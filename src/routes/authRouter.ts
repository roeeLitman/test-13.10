import { Router } from "express";
import {  getUser,  } from "../controllers/userController";

const authRouter = Router();

authRouter.get("/login", ()=>{});

export default authRouter;