import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/credentialEntitie";

export const credentialsRepo = AppDataSource.getRepository(Credential);
