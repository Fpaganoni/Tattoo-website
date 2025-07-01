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
exports.getAppointmentsTransaction = void 0;
const data_source_1 = require("../config/data-source");
const appointmentEntitie_1 = require("../entities/appointmentEntitie");
const usersRepo_1 = require("../repositories/usersRepo");
// Use transactionEntityManager and QueryRunner to perform operations within a transaction.
const getAppointmentsTransaction = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    const queryRunner = data_source_1.AppDataSource.createQueryRunner();
    yield queryRunner.connect();
    try {
        yield queryRunner.startTransaction();
        // Verifica si el userID está presente en appointmentData
        if (!appointmentData.userID) {
            throw new Error("User ID is required to create an appointment");
        }
        // Busca al usuario relacionado
        const user = yield queryRunner.manager.findOneBy(usersRepo_1.usersRepo.target, {
            userID: appointmentData.userID,
        });
        if (!user) {
            throw new Error("User not found to create appointment");
        }
        // Crea la cita y asigna el usuario relacionado
        const newAppointment = queryRunner.manager.create(appointmentEntitie_1.Appointment, Object.assign(Object.assign({}, appointmentData), { user }));
        yield queryRunner.manager.save(appointmentEntitie_1.Appointment, newAppointment);
        yield queryRunner.commitTransaction();
        return newAppointment;
    }
    catch (error) {
        yield queryRunner.rollbackTransaction();
        console.error("Transaction failed:", error);
        throw error; // Lanza el error para manejarlo fuera de la transacción
    }
    finally {
        yield queryRunner.release();
    }
});
exports.getAppointmentsTransaction = getAppointmentsTransaction;
