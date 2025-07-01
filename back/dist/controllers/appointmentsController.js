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
exports.getAppointmentByIdController = exports.cancelAppointmentController = exports.getAppointmentsController = exports.createAppointmentController = void 0;
const appointemntsServices_1 = require("../services/appointemntsServices");
const createAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAppointment = yield (0, appointemntsServices_1.createAppointmentService)(req.body);
        res.status(201).json(newAppointment);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating appointment alalala" });
    }
});
exports.createAppointmentController = createAppointmentController;
const getAppointmentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield (0, appointemntsServices_1.getAppointmentService)();
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(400).json({ message: "Error fetching appointments" });
    }
});
exports.getAppointmentsController = getAppointmentsController;
const cancelAppointmentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointmentID = parseInt(id); // Assuming id is the appointment ID to be cancele
        yield (0, appointemntsServices_1.cancelAppointmentService)(appointmentID);
        res.status(200).json({ message: "Appointment canceled" });
    }
    catch (error) {
        res.status(400).json({ message: "Appointment not found" });
    }
});
exports.cancelAppointmentController = cancelAppointmentController;
const getAppointmentByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        // the (+) in id is used to convert the string to a number
        const appointmentById = yield (0, appointemntsServices_1.getAppointmentServiceById)(+id);
        res.status(200).json(appointmentById);
    }
    catch (error) {
        res.status(404).json({ message: "Appointment not found" });
    }
});
exports.getAppointmentByIdController = getAppointmentByIdController;
