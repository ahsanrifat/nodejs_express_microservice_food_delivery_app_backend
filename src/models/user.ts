import { Response } from "express";
import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
});

export const UserModel = model<IUser>("User", userSchema);
export const getUsers = (req: Request, res: Response) => {
  console.log("========>>>>", UserModel.find());
  return res.send("USERSSSSS");
};
