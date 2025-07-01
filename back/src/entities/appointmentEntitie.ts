import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./userEntitie";

@Entity({
  name: "appointments",
})
export class Appointment {
  @PrimaryGeneratedColumn("increment")
  appointmentID: number;

  @Column({
    length: 25,
  })
  appointmentDate: string;

  @Column({
    length: 25,
  })
  appointmentTime: string;

  @Column({
    length: 20,
  })
  status: string; // "pending", "confirmed", "canceled"

  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: "userID" })
  user: User;
  // This is the inverse side of the relationship
}
