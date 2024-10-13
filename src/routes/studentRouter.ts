import { Router } from "express";
import { createstudent } from "../controllers/studentController";


const studentRouter = Router();

studentRouter.post("/:id", createstudent);

// studentRouter.get("/score/:id", getPosts);

export default studentRouter;
