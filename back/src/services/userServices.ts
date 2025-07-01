import IUserDto from "../dto/userDto";
import { createCredentialService } from "./credentialServices";
import { User } from "../entities/userEntitie";
import { usersRepo } from "../repositories/usersRepo";

// Async function return a promise ALWAYS, so the promise has to be IUser type.
export const createUserService = async (userData: IUserDto): Promise<User> => {
  const { email, password } = userData;

  if (!email || !password) throw new Error("Missing required fields");

  const newCredential = await createCredentialService({
    email,
    password,
  });

  const NEWuser: User = usersRepo.create({
    ...userData,
    credential: newCredential, // This is a workaround to create the user with the credential relation.
  });
  const savedUser = await usersRepo.save(NEWuser);

  return savedUser;
};

// NOW SERVICES ARE ASYNC FUNCTIONS, SO THEY RETURN A PROMISE, BUT THIS PROMISE ARE User(entitie) TYPE.
// IN BELOW CASE, THE PROMISE IS A User[] TYPE.
export const getUsersService = async (): Promise<User[]> => {
  const users = await usersRepo.find();

  if (!users) throw new Error("No users found");

  return users;
};

// This function returns a priomise of void(void is used when the function doesn't return anything), so it doesn't return anything.
export const deleteUserService = async (id: number): Promise<void> => {
  const deletedUser = await usersRepo.softDelete(id);

  if (!deletedUser.affected)
    throw new Error("User not found or already deleted");
};

export const getUsersByIdService = async (id: number): Promise<User | null> => {
  const user = await usersRepo.findUserById(id);

  if (!user) throw new Error("User not found");

  return user;
};
