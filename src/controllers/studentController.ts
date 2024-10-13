import { Request, Response, NextFunction } from "express";
import User from "../type/models/userModel";
import { createStudent } from "../services/studentService";
import { UserDTO } from "../type/DTO/teacherDTO";
import { ResponseDTO } from "../type/DTO/responsDTO";

// Create a new post
export const createstudent = async (
  req: Request<any, any, UserDTO>,
  res: Response
): Promise<void> => {
  try {
    const student: ResponseDTO = await createStudent(req.params.id, req.body);
    res.status(student.status).json(student);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// Delete a post
export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {};
