import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "../entities/userEntitie";
import { Credential } from "../entities/credentialEntitie";
import { Appointment } from "../entities/appointmentEntitie";
import { DB_HOST, DB_PORT, DB_USERNAME, DB_NAME, DB_PASSWORD } from "./envs";

// dropSchema: true, // Uncomment this line to drop the schema on every connection, this setting delete all the data in the database, use it only for development purposes.

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: true,
  // dropSchema: true,
  logging: ["error"],
  entities: [User, Credential, Appointment],
  subscribers: [],
  migrations: [],
  ssl: { rejectUnauthorized: false },
  extra: {
    connectionTimeoutMillis: 60000,
    query_timeout: 60000,
    statement_timeout: 60000,
    host_preference: "IPv4",
  },
});
