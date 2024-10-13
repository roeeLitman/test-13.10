import mongoose, { Schema, Document, Types } from "mongoose";
import validator from "validator";




export interface Itest extends Document {
  create_at: Date
  score: number
}

export interface IUser extends Document {
  name: string;
  password: string
  email: string;
  role:string
  tests?:Itest[]
}

const TestSchema = new Schema<Itest>({
  create_at: {
    type: Date,
    required:[true,"pleas enter date"]
  },
  score: {
    type: Number,
    required:[true,"pleas enter score"]
  }
})

const UserSchema = new Schema<IUser>({
  name:{
    type: String,
    required: [true, "pleas enter name"]
  },
  password:{
    type: String,
    required: [true, "pleas enter name"]
  },
  email:{
    type: String,
    required: [true, "pleas enter name"]
  },
  tests:{
    type: [TestSchema],
  }
});

const UserModel:mongoose.Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default  UserModel
