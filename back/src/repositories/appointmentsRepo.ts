import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/appointmentEntitie";

export const appointmentsRepo = AppDataSource.getRepository(Appointment);
