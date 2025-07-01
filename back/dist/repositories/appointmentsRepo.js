"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentsRepo = void 0;
const data_source_1 = require("../config/data-source");
const appointmentEntitie_1 = require("../entities/appointmentEntitie");
exports.appointmentsRepo = data_source_1.AppDataSource.getRepository(appointmentEntitie_1.Appointment);
