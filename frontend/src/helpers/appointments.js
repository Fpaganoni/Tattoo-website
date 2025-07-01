/*  appointmentDate: string;
  appointmentTime: string;
  userID: number;
  status: CredentialStatus (CredentialStatus = ACTIVE = "ACTIVE", CANCELLED = "CANCELLED"); */

const mockAppointments = [
  {
    id: 1,
    appointmentDate: "2025-05-20",
    appointmentTime: "14:00",
    userID: 1,
    status: "ACTIVE",
  },
  {
    id: 2,
    appointmentDate: "2025-05-21",
    appointmentTime: "10:30",
    userID: 2,
    status: "CANCELLED",
  },
  {
    id: 3,
    appointmentDate: "2025-05-22",
    appointmentTime: "16:00",
    userID: 3,
    status: "ACTIVE",
  },
  {
    id: 4,
    appointmentDate: "2025-05-23",
    appointmentTime: "12:00",
    userID: 4,
    status: "CANCELLED",
  },
];

export default mockAppointments;
