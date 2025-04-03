import { CategoriesEntity } from "@/entities/categories.entity";
import { UsersEntity } from "@/entities/users.entity";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [CategoriesEntity, UsersEntity],
  synchronize: true, //pas en prod
});

export default dataSource;
