import { AppDataSource } from "../config/data-source";
import AppointmentDto from "../dto/appointmentDto";
import { Appointment } from "../entities/appointmentEntitie";
import { appointmentsRepo } from "../repositories/appointmentsRepo";
import { usersRepo } from "../repositories/usersRepo";

// Use transactionEntityManager and QueryRunner to perform operations within a transaction.

export const getAppointmentsTransaction = async (
  appointmentData: AppointmentDto
): Promise<Appointment> => {
  const queryRunner = AppDataSource.createQueryRunner();
  await queryRunner.connect();

  try {
    await queryRunner.startTransaction();

    // Verifica si el userID está presente en appointmentData
    if (!appointmentData.userID) {
      throw new Error("User ID is required to create an appointment");
    }

    // Busca al usuario relacionado
    const user = await queryRunner.manager.findOneBy(usersRepo.target, {
      userID: appointmentData.userID,
    });

    if (!user) {
      throw new Error("User not found to create appointment");
    }

    // Crea la cita y asigna el usuario relacionado
    const newAppointment = queryRunner.manager.create(Appointment, {
      ...appointmentData,
      user, // Asigna el objeto `user` directamente
    });

    await queryRunner.manager.save(Appointment, newAppointment);

    await queryRunner.commitTransaction();
    return newAppointment;
  } catch (error) {
    await queryRunner.rollbackTransaction();
    console.error("Transaction failed:", error);
    throw error; // Lanza el error para manejarlo fuera de la transacción
  } finally {
    await queryRunner.release();
  }
};
