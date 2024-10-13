import { ResponseDTO } from "../type/DTO/responsDTO";
import { TeacherDTO } from "../type/DTO/teacherDTO";
import { role } from "../type/enums/role";
import UserModel, { UserSchema } from "../type/models/userModel";


export const createTeachrInDb = async (
  teacher: TeacherDTO
): Promise<ResponseDTO> => {
    try {
        // create user with role of teacher
        const newTeacher = new UserModel (teacher)
        newTeacher.role = role.teacher
        newTeacher.students = []
        newTeacher.TestArray = []
        
        //save new teacher
        const userFromDb = await newTeacher.save()
        return {
            err: false,
            stutos:201,
            data: userFromDb
        }

        
    } catch (err) {
        console.log(err);
        return {
            err: false,
            stutos:201,
            data: err,
            mge: "not save teachr"
        }
        
    }
};
