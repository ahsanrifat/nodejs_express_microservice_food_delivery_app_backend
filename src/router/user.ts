import express from "express";
import { getUsers } from "../models/user";

const userRouter = express.Router();

userRouter.get("/", getUsers);

export default userRouter;
