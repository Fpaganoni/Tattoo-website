import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  DeleteDateColumn,
  Unique,
} from "typeorm";
import { Credential } from "./credentialEntitie";
import { Appointment } from "./appointmentEntitie";

@Entity({
  // If we call the table "user" we will have problems with the user table in postgres, so we will call it "users"
  name: "users",
})
@Unique(["email", "username", "dni"]) // This will ensure that the email and username are unique across all users
export class User {
  @PrimaryGeneratedColumn("increment")
  userID: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 50,
    unique: true,
  })
  email: string;

  @Column({
    length: 50,
    unique: true,
  })
  username: string;

  @Column()
  birthday: string;

  @Column({
    length: 10,
    unique: true,
  })
  dni: string;

  @DeleteDateColumn()
  deletedAt?: Date; // This column will be auto filled when we use 'softdelete'

  @OneToOne(() => Credential, (credential) => credential.user, {
    cascade: ["insert", "update"],
    eager: true, // This will automatically load the credential when we load the user
  })
  @JoinColumn({ name: "credentialID" })
  credential: Credential;

  @OneToMany(() => Appointment, (appointment) => appointment.user, {
    cascade: ["insert", "update"],
    eager: true, // This will automatically load the appointments when we load the user
  })
  appointments: Appointment[];
}

// The cascade: true attribute in TypeORM allows you to automatically save all created or modified relationships when you save an entity, without having to do it manually.
