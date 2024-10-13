import { Router } from "express";
import { createUser, getUser, getUsers } from "../controllers/userController";

const teacherRouter = Router();

teacherRouter.post("/", createUser);
teacherRouter.put("/", getUsers);
teacherRouter.get("/:username", getUser);

export default teacherRouter;
