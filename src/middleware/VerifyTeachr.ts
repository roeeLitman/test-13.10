import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, TokenExpiredError } from 'jsonwebtoken'
import { TokenPaylodDTO } from "../type/DTO/TokenPaylodDTO";
import { log } from "console";


const VarifyUser = async (
    req:Request,
    res:Response,
    next: NextFunction
) => {
    try{
    const token = req.cookies.token || req.headers['token']
    const payload:TokenPaylodDTO = jwt.verify(token,process.env.TOKEN_SECRET as string, ) as TokenPaylodDTO
    (req as any).user = payload
    next()
    }catch (err) {
        if(err instanceof TokenExpiredError){
            console.log(err);
            
            res.status(401).json({
                err: true,
                massage: "Token expiered, please log in again",
                data: err
            })
        }else {
            console.log(err);
            
            res.status(404).json({
                err: true,
                message: 'Token is missing or curropted',
                data: err
            })
        }

    }
}

export default VarifyUser