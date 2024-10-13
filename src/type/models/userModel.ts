import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";

export interface IUser extends Document {
  username: string;
  password: string
  email: string;
  
  posts: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({});

export default mongoose.model<IUser>("User", UserSchema);
