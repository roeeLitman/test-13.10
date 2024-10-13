import { ResponseDTO } from "../type/DTO/responsDTO";
import { UserDTO } from "../type/DTO/teacherDTO";
import { role } from "../type/enums/role";
import UserModel from "../type/models/userModel";

export const createStudent = async ( id:string ,studentFromReq:UserDTO ):Promise<ResponseDTO> =>{
    try {
        
        const newStudent = new UserModel(studentFromReq)
        newStudent.role = role.student
        newStudent.tests = []
        
        UserModel.findByIdAndUpdate(id, {$push: { students: newStudent.id }})
        
        const userFromDb = await newStudent.save()
        return {
            err: false,
            status:201,
            data: userFromDb
        }
    } catch (err) {
        console.log(err);
        return {
            err: false,
            status:201,
            data: err,
            mge: "not save teachr"
        }
    }
        
}