import { Request, Response } from "express";
import User, { IUser } from "../type/models/userModel";
import { UserDTO } from "../type/DTO/teacherDTO";
import { createTeachrInDb } from "../services/teacherService";
import { ResponseDTO } from "../type/DTO/responsDTO";

export const createTeachr = async (req: Request<any,any,UserDTO>, res: Response) => {
    try {
        const teacher:ResponseDTO = await createTeachrInDb(req.body)
        res.status(teacher.status).json(teacher)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
};



export const getUsers = async (req: Request, res: Response) => {};

export const getUser = async (req: Request, res: Response) => {};

// Optionally, add DELETE and EDIT functions
