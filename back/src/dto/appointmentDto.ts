import { CredentialStatus } from "../interfaces/ICredential";

interface AppointmentDto {
  appointmentDate: string;
  appointmentTime: string;
  userID: number;
  status: CredentialStatus;
}

export default AppointmentDto;
