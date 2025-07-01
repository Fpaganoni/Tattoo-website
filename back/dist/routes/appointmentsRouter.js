"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsRouter = (0, express_1.Router)();
const appointmentsController_1 = require("../controllers/appointmentsController");
// GET /APPOINT GET ALL APPOINTMENTS
appointmentsRouter.get("/appointments", appointmentsController_1.getAppointmentsController);
// POST /APPOINT CREATE NEW APPOINTMENT
appointmentsRouter.post("/appointments/schedule", appointmentsController_1.createAppointmentController);
// PUT /APPOINT/:id CANCEL APPOINTMENT
appointmentsRouter.put("/appointments/cancel/:id", appointmentsController_1.cancelAppointmentController);
// GET /APPOINT/:id GET APPOINTMENT BY ID
appointmentsRouter.get("/appointments/:id", appointmentsController_1.getAppointmentByIdController);
exports.default = appointmentsRouter;
