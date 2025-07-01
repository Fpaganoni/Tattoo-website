"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter = (0, express_1.Router)();
const userController_1 = require("../controllers/userController");
const authenticator_1 = __importDefault(require("../middlewares/authenticator"));
userRouter.post("/users/register", userController_1.createUserController);
userRouter.get("/users/:id", userController_1.getUserByIdController);
userRouter.get("/users", authenticator_1.default, userController_1.getUsersController);
userRouter.delete("/users/:id", userController_1.deleteUserController);
userRouter.post("/users/login", userController_1.loginUserController);
exports.default = userRouter;
