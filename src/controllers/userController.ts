import { Request, Response } from "express";
import User, { IUser } from "../type/models/userModel";
import { UserDTO } from "../type/DTO/teacherDTO";
import { addTestToStudentInDb, createTeachrInDb } from "../services/teacherService";
import { ResponseDTO } from "../type/DTO/responsDTO";
import { TestDTO } from "../type/DTO/testDTO";

//create new teacher
export const createTeachr = async (req: Request<any,any,UserDTO>, res: Response) => {
    try {
        const teacher:ResponseDTO = await createTeachrInDb(req.body)
        res.status(teacher.status).json(teacher)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
};

//add score to student
export const addTestToStudent = async (req: Request<any,any,TestDTO>, res: Response) => {
    try {
        const test:ResponseDTO = await addTestToStudentInDb(req.params.id , req.body)
        res.status(test.status).json(test)
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
};

export const getUser = async (req: Request, res: Response) => {};

// Optionally, add DELETE and EDIT functions
