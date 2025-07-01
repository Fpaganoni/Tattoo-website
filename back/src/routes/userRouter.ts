import { Router } from "express";
const userRouter: Router = Router();
import {
  createUserController,
  deleteUserController,
  getUsersController,
  getUserByIdController,
  loginUserController,
} from "../controllers/userController";
import authenticator from "../middlewares/authenticator";

userRouter.post("/users/register", createUserController);

userRouter.get("/users/:id", getUserByIdController);

userRouter.get("/users", authenticator, getUsersController);

userRouter.delete("/users/:id", deleteUserController);

userRouter.post("/users/login", loginUserController);

export default userRouter;
