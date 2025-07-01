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
exports.getUsersByIdService = exports.deleteUserService = exports.getUsersService = exports.createUserService = void 0;
const credentialServices_1 = require("./credentialServices");
const usersRepo_1 = require("../repositories/usersRepo");
// Async function return a promise ALWAYS, so the promise has to be IUser type.
const createUserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = userData;
    if (!email || !password)
        throw new Error("Missing required fields");
    const newCredential = yield (0, credentialServices_1.createCredentialService)({
        email,
        password,
    });
    const NEWuser = usersRepo_1.usersRepo.create(Object.assign(Object.assign({}, userData), { credential: newCredential }));
    const savedUser = yield usersRepo_1.usersRepo.save(NEWuser);
    return savedUser;
});
exports.createUserService = createUserService;
// NOW SERVICES ARE ASYNC FUNCTIONS, SO THEY RETURN A PROMISE, BUT THIS PROMISE ARE User(entitie) TYPE.
// IN BELOW CASE, THE PROMISE IS A User[] TYPE.
const getUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield usersRepo_1.usersRepo.find();
    if (!users)
        throw new Error("No users found");
    return users;
});
exports.getUsersService = getUsersService;
// This function returns a priomise of void(void is used when the function doesn't return anything), so it doesn't return anything.
const deleteUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedUser = yield usersRepo_1.usersRepo.softDelete(id);
    if (!deletedUser.affected)
        throw new Error("User not found or already deleted");
});
exports.deleteUserService = deleteUserService;
const getUsersByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield usersRepo_1.usersRepo.findUserById(id);
    if (!user)
        throw new Error("User not found");
    return user;
});
exports.getUsersByIdService = getUsersByIdService;
