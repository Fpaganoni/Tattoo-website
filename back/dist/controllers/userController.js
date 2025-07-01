"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = exports.getUserByIdController = exports.deleteUserController = exports.createUserController = exports.getUsersController = void 0;
const userServices_1 = require("../services/userServices");
const credentialServices_1 = require("../services/credentialServices");
// IN THIS CASE IS THE SAME, WE USE THE User(entitie) TYPE, SO THE PROMISE IS A User[] TYPE. INSTEAD OF IUser interface.
const getUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, userServices_1.getUsersService)();
    if (!users) {
        res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(users);
});
exports.getUsersController = getUsersController;
const createUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, birthday, dni, username } = req.body;
    if (!name || !email || !password || !username || !birthday || !dni) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    const newUser = yield (0, userServices_1.createUserService)({
        name,
        email,
        username,
        password,
        birthday,
        dni,
    });
    res.status(201).json(newUser);
});
exports.createUserController = createUserController;
const deleteUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield (0, userServices_1.deleteUserService)(+id);
    res.status(200).json({ message: "User deleted" });
});
exports.deleteUserController = deleteUserController;
const getUserByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // If user doesn't exist, typeORM returns null, so user will be IUser or null.
    const user = yield (0, userServices_1.getUsersByIdService)(parseInt(id));
    if (!user)
        res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
});
exports.getUserByIdController = getUserByIdController;
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const user = yield (0, credentialServices_1.validateCredentialsService)({ email, password });
        res.status(200).json({ login: true, user });
    }
    catch (error) {
        res.status(401).json({ message: "Invalid credentials" });
    }
});
exports.loginUserController = loginUserController;
