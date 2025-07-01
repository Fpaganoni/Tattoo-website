"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const userEntitie_1 = require("../entities/userEntitie");
const credentialEntitie_1 = require("../entities/credentialEntitie");
const appointmentEntitie_1 = require("../entities/appointmentEntitie");
require("dotenv/config");
const envs_1 = require("./envs");
// dropSchema: true, // Uncomment this line to drop the schema on every connection, this setting delete all the data in the database, use it only for development purposes.
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST,
    port: parseInt(envs_1.DB_PORT || "5432"),
    username: envs_1.DB_USERNAME,
    password: envs_1.DB_PASSWORD,
    database: envs_1.DB_NAME,
    synchronize: true,
    // dropSchema: true,
    logging: ["error"],
    entities: [userEntitie_1.User, credentialEntitie_1.Credential, appointmentEntitie_1.Appointment],
    subscribers: [],
    migrations: [],
});
