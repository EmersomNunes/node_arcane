import { Router } from "express";
import { UserController } from "../Controller/UserController";

export const userRouter = Router();
const userController = new UserController();

userRouter.post("/", userController.create);
userRouter.put("/:id", userController.update);