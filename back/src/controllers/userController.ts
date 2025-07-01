import { Request, Response } from "express";
import {
  getUsersService,
  createUserService,
  deleteUserService,
  getUsersByIdService,
} from "../services/userServices";
import { validateCredentialsService } from "../services/credentialServices";
import { User } from "../entities/userEntitie";
import { usersRepo } from "../repositories/usersRepo";

// IN THIS CASE IS THE SAME, WE USE THE User(entitie) TYPE, SO THE PROMISE IS A User[] TYPE. INSTEAD OF IUser interface.
export const getUsersController = async (req: Request, res: Response) => {
  const users: User[] = await getUsersService();

  if (!users) {
    res.status(404).json({ message: "No users found" });
  }
  res.status(200).json(users);
};

export const createUserController = async (req: Request, res: Response) => {
  const { name, email, password, birthday, dni, username } = req.body;

  if (!name || !email || !password || !username || !birthday || !dni) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const userExists = await usersRepo.findOne({
    where: [{ email }, { username }, { dni }],
  });

  if (userExists) {
    return res.status(409).json({ error: "User already exists" });
  }

  const newUser: User = await createUserService({
    name,
    email,
    username,
    password,
    birthday,
    dni,
  });
  res.status(201).json(newUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteUserService(+id);
  res.status(200).json({ message: "User deleted" });
};

export const getUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  // If user doesn't exist, typeORM returns null, so user will be IUser or null.
  const user: User | null = await getUsersByIdService(parseInt(id));

  if (!user) res.status(404).json({ message: "User not found" });

  res.status(200).json(user);
};

export const loginUserController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const user = await validateCredentialsService({ email, password });
    res.status(200).json({ login: true, user });
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
