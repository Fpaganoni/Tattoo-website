import appointmentDto from "../dto/appointmentDto";
import { CredentialStatus } from "../interfaces/ICredential";
import { Appointment } from "../entities/appointmentEntitie";
import { appointmentsRepo } from "../repositories/appointmentsRepo";
import { getAppointmentsTransaction } from "../helpers/appointmentsTransaction";

export const createAppointmentService = async (
  appointmentData: appointmentDto
): Promise<Appointment | void> => {
  try {
    const newAppointment = await getAppointmentsTransaction(appointmentData);
    return newAppointment;
  } catch (error) {
    throw new Error("Error getting appointments" + error);
  }
};

export const getAllAppointmentService = async (): Promise<Appointment[]> => {
  try {
    const appointments = await appointmentsRepo.find();
    return appointments;
  } catch (error) {
    throw new Error("Error fetching appointments: " + error);
  }
};

export const getAppointmentServiceById = async (
  id: number
): Promise<Appointment | null> => {
  const appointmentById = await appointmentsRepo.findOneBy({
    appointmentID: id,
  });

  if (!appointmentById) {
    throw new Error("Appointment not found");
  }
  return appointmentById;
};

export const getAppointmentByUserIdService = async (
  userID: number
): Promise<Appointment[]> => {
  const appointments = await appointmentsRepo.find({
    where: { user: { userID } },
  });

  if (!appointments || appointments.length === 0) {
    throw new Error("No appointments found for this user");
  }

  return appointments;
};

export const cancelAppointmentService = async (id: number): Promise<void> => {
  const appointmentRepo = await appointmentsRepo;

  const appointmentToUpdate = await appointmentRepo.findOne({
    where: { appointmentID: id },
  });

  if (!appointmentToUpdate) {
    throw new Error("Appointment not found ");
  }

  appointmentToUpdate.status = CredentialStatus.CANCELED; // Update the status to CANCELED

  await appointmentRepo.save(appointmentToUpdate);

  // return appointmentToUpdate; // Return the updated appointment
};
