import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";




export interface IUser extends Document {
  username: string;
  password: string
  email: string;
  role:string
  tests:
}

export interface IUser extends Document {
  username: string;
  password: string
  email: string;
  role:string
  tests:

}

const UserSchema = new Schema<IUser>({});

export default mongoose.model<IUser>("User", UserSchema);
