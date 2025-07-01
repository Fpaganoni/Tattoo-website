import { CredentialStatus } from "./ICredential";
interface IAppointment {
  appointmentID: number;
  appointmentDate: string;
  appointmentTime: string;
  userID: number;
  status: CredentialStatus;
}

export default IAppointment;
