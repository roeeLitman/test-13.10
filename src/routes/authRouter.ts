import { Router } from "express";
import {  getUser, getUsers } from "../controllers/userController";

const authRouter = Router();

authRouter.get("/login", ()=>{});

export default authRouter;