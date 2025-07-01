import { AppDataSource } from "../config/data-source";
import { User } from "../entities/userEntitie";

export const usersRepo = AppDataSource.getRepository(User).extend({
  findUserById: async function (id: number) {
    const user = this.findOneBy({ userID: id });
    return user;
  },
});
