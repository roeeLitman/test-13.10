import jwt from "jsonwebtoken";
import { LoginDTO } from "../type/DTO/loginDTO";
import UserModel from "../type/models/userModel";
import { ResponseDTO } from "../type/DTO/responsDTO";

export const createLogin = async (login: LoginDTO): Promise<ResponseDTO> => {
  try {
    const userFromDb = await UserModel.findOne({
      name: login.name,
      password: login.password,
    });
    if (!userFromDb) {
      return {
        err: true,
        status: 201,
        mge: "not found User",
      };
    }
    const token = await jwt.sign(
      { userFromDb },
      process.env.TOKEN_SECRET as string,
      { expiresIn: "10m" }
    );
    return {
      err: false,
      status: 201,
      mge: "not found User",
      data: token
    };
  } catch (err) {
    console.log(err);
    return {
        err: false,
        status: 201,
        data: err,
      };
  }
};
