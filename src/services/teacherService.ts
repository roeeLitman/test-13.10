import { log } from "console";
import { ResponseDTO } from "../type/DTO/responsDTO";
import { UserDTO } from "../type/DTO/teacherDTO";
import { role } from "../type/enums/role";
import UserModel, { UserSchema,TestSchema } from "../type/models/userModel";
import { TestDTO } from "../type/DTO/testDTO";

export const createTeachrInDb = async (
  teacher: UserDTO
): Promise<ResponseDTO> => {
  try {
    // create user with role of teacher
    const newTeacher = new UserModel(teacher);
    newTeacher.role = role.teacher;
    newTeacher.students = [];
    newTeacher.TestArray = [];

    //save new teacher
    const userFromDb = await newTeacher.save();
    return {
      err: false,
      status: 201,
      data: userFromDb,
    };
  } catch (err) {
    console.log(err);
    return {
      err: false,
      status: 201,
      data: err,
      mge: "not save teachr",
    };
  }
};

export const addTestToStudentInDb = async (
  id: string,
  testFromReq: TestDTO
): Promise<ResponseDTO> => {
  try {
    // create test 
    const date = new Date
    const tests = {score:testFromReq.score, create_at:date}

    //add test to student
    const statutFromDb =  await UserModel.findByIdAndUpdate(id, {$push:{tests:tests}})

    //add score to TestArray of theacher
    const teacherFromDb = await UserModel.findByIdAndUpdate()

    //if not fonde user
    if (!statutFromDb) {
        return {
            err: true,
            status: 404,
            mge:"not found student"
          }
    }

    return {
      err: false,
      status: 201,
      data: statutFromDb,
    };

  } catch (err) {
    console.log(err);
    return {
      err: false,
      status: 201,
      data: err,
      mge: "not save teachr",
    };
  }
};
