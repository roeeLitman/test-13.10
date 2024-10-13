import { Request, Response } from "express";
import { log } from "console";
import { LoginDTO } from "../type/DTO/loginDTO";
import { createLogin } from "../services/authService";
import { ResponseDTO } from "../type/DTO/responsDTO";


export const login = async (req: Request<any,any,LoginDTO>, res: Response): Promise<void> => {
    try {
        
        const token:ResponseDTO = await createLogin(req.body)
        res.cookie("token", token).status(200).json(token)

    } catch (err) {
        console.log(err);
        res.status(500).send(err)
        
    }
}