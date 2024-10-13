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
studentRouter.get("/", getPosts);
studentRouter.get("/:id", getPost);
studentRouter.put("/:id", updatePost);
studentRouter.delete("/:id", deletePost);
studentRouter.post("/:id/comments", addComment);

export default studentRouter;
