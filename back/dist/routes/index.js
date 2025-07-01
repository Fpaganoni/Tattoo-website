"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRouter_1 = __importDefault(require("./userRouter"));
const appointmentsRouter_1 = __importDefault(require("./appointmentsRouter"));
// interface IRecursos {
//   id: string;
//   name: string;
// }
const router = (0, express_1.Router)();
router.use("/", userRouter_1.default);
router.use("/", appointmentsRouter_1.default);
exports.default = router;
