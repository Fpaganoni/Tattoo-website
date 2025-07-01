"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialsRepo = void 0;
const data_source_1 = require("../config/data-source");
const credentialEntitie_1 = require("../entities/credentialEntitie");
exports.credentialsRepo = data_source_1.AppDataSource.getRepository(credentialEntitie_1.Credential);
