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
exports.validateCredentialsService = exports.createCredentialService = void 0;
const credentialsRepo_1 = require("../repositories/credentialsRepo");
const usersRepo_1 = require("../repositories/usersRepo");
// create credentials with username and password and an ID.
const createCredentialService = (credentialData) => __awaiter(void 0, void 0, void 0, function* () {
    const NEWcredential = yield credentialsRepo_1.credentialsRepo.create(credentialData);
    const result = yield credentialsRepo_1.credentialsRepo.save(NEWcredential);
    const newCredential = Object.assign({}, credentialData);
    const user = yield usersRepo_1.usersRepo.findOneBy({
        userID: NEWcredential.credentialID,
    });
    return NEWcredential;
});
exports.createCredentialService = createCredentialService;
/* Implement a function that will receive a username and password and check if the username exists among the available data and, if so, if the password is correct. If validation is successful, it should return the credentials ID. */
const validateCredentialsService = (credentialData) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = credentialData;
    const userCredential = yield credentialsRepo_1.credentialsRepo.findOne({
        where: { email },
    });
    if (!userCredential) {
        throw new Error("Email or password incorrect");
    }
    if (userCredential.password !== password) {
        throw new Error("Email or password incorrect");
    }
    const user = yield usersRepo_1.usersRepo.findOne({
        where: { userID: userCredential.credentialID },
    });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
});
exports.validateCredentialsService = validateCredentialsService;
