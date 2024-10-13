import { Router } from "express";
import { addTestToStudent, createTeachr,  } from "../controllers/userController";

const teacherRouter = Router();

// create teacher
teacherRouter.post("/", createTeachr);

// add score to student
teacherRouter.put("/:id", addTestToStudent);

// get all ainformtion
teacherRouter.get("/", ()=>{});

// update score
teacherRouter.patch("/:student/:test", ()=>{});

// קח ממוצע
teacherRouter.get("/average", ()=>{});

//get 1 score
teacherRouter.get("/:student/:test", ()=>{});

export default teacherRouter;
