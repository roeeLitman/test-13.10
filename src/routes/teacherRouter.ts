import { Router } from "express";
import { createUser, getUser, getUsers } from "../controllers/userController";

const teacherRouter = Router();

// create teacher
teacherRouter.post("/", ()=>{});

// add score to student
teacherRouter.put("/", ()=>{});

// get all ainformtion
teacherRouter.get("/", ()=>{});

// update score
teacherRouter.patch("/:student/:test", ()=>{});

// קח ממוצע
teacherRouter.get("/average", ()=>{});

//get 1 score
teacherRouter.get("/:student/:test", ()=>{});

export default teacherRouter;
