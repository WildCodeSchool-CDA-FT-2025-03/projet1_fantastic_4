import { UserEntity } from "@/entities/users.entity";
import dataSource from "../../services/datas.service";
import { log } from "console";

const userMigrate = async (): Promise<boolean> => {
  const queryRunner = dataSource.createQueryRunner();

  try {
    await queryRunner.startTransaction();
    await queryRunner.query("DELETE FROM users");
    await queryRunner.query("DELETE FROM games_favorites");

    const usersData = [
      { name: "user-1" },
      { name: "user-2" },
      { name: "user-3" },
    ];

    const users = usersData.map((u) => {
      const user = new UserEntity();
      user.name = u.name;
      return user;
    });

    const res = await dataSource.manager.save(users);

    if (res) log("Migration done !");
    await queryRunner.commitTransaction();
  } catch (error) {
    log(error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
  return true;
};

export default userMigrate;
