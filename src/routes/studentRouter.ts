import { Router } from "express";
import {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
  addComment,
} from "../controllers/postController";

const studentRouter = Router();

studentRouter.post("/", createPost);

studentRouter.get("/score/:id", getPosts);

export default studentRouter;
