import { Request, Response } from "express";
import { Appointment } from "../entities/appointmentEntitie";
import {
  getAllAppointmentService,
  createAppointmentService,
  cancelAppointmentService,
  getAppointmentServiceById,
  getAppointmentByUserIdService,
} from "../services/appointemntsServices";

export const createAppointmentController = async (
  req: Request,
  res: Response
) => {
  try {
    const newAppointment: Appointment | void = await createAppointmentService(
      req.body
    );
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: "Error creating appointment alalala" });
  }
};

export const getAllAppointmentsController = async (
  req: Request,
  res: Response
) => {
  try {
    const appointments: Appointment[] = await getAllAppointmentService();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ message: "Error fetching appointments" });
  }
};

export const cancelAppointmentController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const appointmentID = parseInt(id); // Assuming id is the appointment ID to be cancele

    await cancelAppointmentService(appointmentID);

    res.status(200).json({ message: "Appointment canceled" });
  } catch (error) {
    res.status(400).json({ message: "Appointment not found" });
  }
};

export const getAppointmentByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;

    // the (+) in id is used to convert the string to a number
    const appointmentById: Appointment | null = await getAppointmentServiceById(
      +id
    );
    res.status(200).json(appointmentById);
  } catch (error) {
    res.status(404).json({ message: "Appointment not found" });
  }
};

export const getAppointmentByUserIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const { userID } = req.params;

    const appointments: Appointment[] = await getAppointmentByUserIdService(
      +userID
    );
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ message: "Error fetching appointments for user" });
  }
};
