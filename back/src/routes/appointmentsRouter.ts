import { Router } from "express";
const appointmentsRouter: Router = Router();
import {
  getAllAppointmentsController,
  createAppointmentController,
  cancelAppointmentController,
  getAppointmentByIdController,
  getAppointmentByUserIdController,
} from "../controllers/appointmentsController";

// GET /APPOINT GET ALL APPOINTMENTS
appointmentsRouter.get("/getAllAppointments", getAllAppointmentsController);

// POST /APPOINT CREATE NEW APPOINTMENT
appointmentsRouter.post("/appointments/schedule", createAppointmentController);

// PUT /APPOINT/:id CANCEL APPOINTMENT
appointmentsRouter.put("/appointments/cancel/:id", cancelAppointmentController);

// GET /APPOINT/:id GET APPOINTMENT BY ID
appointmentsRouter.get("/appointment/:id", getAppointmentByIdController);

// GET ALL  APPONITMENTS BY USER ID
appointmentsRouter.get(
  "/appointments/:userID",
  getAppointmentByUserIdController
);

export default appointmentsRouter;
