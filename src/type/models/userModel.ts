import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";


export interface Itest extends Document {
  create_at: Date
  score: number
}

export interface IUser extends Document {
  name: string;
  password: string;
  email: string;
  role:string
  tests?:Itest[];
  students?: IUser[];
  TestArray?: number[];
  class?:string
}

const TestSchema = new Schema<Itest>({
  create_at: {
    type: Date,
    required:[true,"please enter date"]
  },
  score: {
    type: Number,
    required:[true,"please enter score"]
  }
})

export const UserSchema = new Schema<IUser>({
  name:{
    type: String,
    required: [true, "please enter name"]
  },
  password:{
    type: String,
    required: [true, "please enter password"]
  },
  email:{
    type: String,
    required: [true, "please enter email"]
  },
  tests:{
    type: [TestSchema],
    required: false
  },
  students:{
    type: [Types.ObjectId],
    required: false,
    ref: "Users"
  },
  TestArray:{
    type: [Number],
    required: false
  },
  class:{
    type: String
  },
  role:{
    type: String,
    required: [true, "not enter name"]
  }
});

const UserModel:mongoose.Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default  UserModel
