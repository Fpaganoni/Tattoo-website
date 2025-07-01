import ICredential from "./ICredential";

interface IUser {
  userID: number;
  name: string;
  email: string;
  username: string;
  birthday: string;
  dni: string;
  credential?: ICredential;
}

export default IUser;
