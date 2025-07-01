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
exports.cancelAppointmentService = exports.getAppointmentServiceById = exports.getAppointmentService = exports.createAppointmentService = void 0;
const ICredential_1 = require("../interfaces/ICredential");
const appointmentsRepo_1 = require("../repositories/appointmentsRepo");
const appointmentsTransaction_1 = require("../helpers/appointmentsTransaction");
const createAppointmentService = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAppointment = yield (0, appointmentsTransaction_1.getAppointmentsTransaction)(appointmentData);
        return newAppointment;
    }
    catch (error) {
        throw new Error("Error getting appointments" + error);
    }
});
exports.createAppointmentService = createAppointmentService;
const getAppointmentService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield appointmentsRepo_1.appointmentsRepo.find();
        return appointments;
    }
    catch (error) {
        throw new Error("Error fetching appointments: " + error);
    }
});
exports.getAppointmentService = getAppointmentService;
const getAppointmentServiceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentById = yield appointmentsRepo_1.appointmentsRepo.findOneBy({
        appointmentID: id,
    });
    if (!appointmentById) {
        throw new Error("Appointment not found");
    }
    return appointmentById;
});
exports.getAppointmentServiceById = getAppointmentServiceById;
const cancelAppointmentService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const appointmentRepo = yield appointmentsRepo_1.appointmentsRepo;
    const appointmentToUpdate = yield appointmentRepo.findOne({
        where: { appointmentID: id },
    });
    if (!appointmentToUpdate) {
        throw new Error("Appointment not found    dddd");
    }
    appointmentToUpdate.status = ICredential_1.CredentialStatus.CANCELED; // Update the status to CANCELED
    yield appointmentRepo.save(appointmentToUpdate);
    // return appointmentToUpdate; // Return the updated appointment
});
exports.cancelAppointmentService = cancelAppointmentService;
