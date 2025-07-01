import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { User } from "./userEntitie";

@Entity({
  name: "credentials",
})
export class Credential {
  @PrimaryGeneratedColumn("increment")
  credentialID: number;

  @Column({
    length: 50,
  })
  email: string;

  @Column({
    length: 50,
  })
  password: string;

  @OneToOne(() => User, (user) => user.credential)
  user: User;
}
