"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
const credentialEntitie_1 = require("./credentialEntitie");
const appointmentEntitie_1 = require("./appointmentEntitie");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("increment"),
    __metadata("design:type", Number)
], User.prototype, "userID", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 50,
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 50,
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 50,
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({
        length: 10,
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "dni", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => credentialEntitie_1.Credential, (credential) => credential.user, {
        cascade: ["insert", "update"],
        eager: true, // This will automatically load the credential when we load the user
    }),
    (0, typeorm_1.JoinColumn)({ name: "credentialID" }),
    __metadata("design:type", credentialEntitie_1.Credential)
], User.prototype, "credential", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => appointmentEntitie_1.Appointment, (appointment) => appointment.user, {
        cascade: ["insert", "update"],
        eager: true, // This will automatically load the appointments when we load the user
    }),
    __metadata("design:type", Array)
], User.prototype, "appointments", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({
        // If we call the table "user" we will have problems with the user table in postgres, so we will call it "users"
        name: "users",
    })
], User);
// The cascade: true attribute in TypeORM allows you to automatically save all created or modified relationships when you save an entity, without having to do it manually.
