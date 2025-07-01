import ICredentialDto from "../dto/credentialDto";
import { Credential } from "../entities/credentialEntitie";
import { User } from "../entities/userEntitie";
import ICredential from "../interfaces/ICredential";
import { credentialsRepo } from "../repositories/credentialsRepo";
import { usersRepo } from "../repositories/usersRepo";

// create credentials with username and password and an ID.
export const createCredentialService = async (
  credentialData: ICredentialDto
): Promise<Credential> => {
  const NEWcredential: Credential = await credentialsRepo.create(
    credentialData
  );
  const result = await credentialsRepo.save(NEWcredential);

  const newCredential: Omit<ICredential, "credentialID"> = {
    ...credentialData,
  };

  const user = await usersRepo.findOneBy({
    userID: NEWcredential.credentialID,
  });

  return NEWcredential;
};

/* Implement a function that will receive a username and password and check if the username exists among the available data and, if so, if the password is correct. If validation is successful, it should return the credentials ID. */
export const validateCredentialsService = async (
  credentialData: ICredentialDto
): Promise<User | void> => {
  const { email, password } = credentialData;

  const userCredential = await credentialsRepo.findOne({
    where: { email },
  });

  if (!userCredential) {
    throw new Error("Email or password incorrect");
  }

  if (userCredential.password !== password) {
    throw new Error("Email or password incorrect");
  }

  const user = await usersRepo.findOne({
    where: { userID: userCredential.credentialID },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};
