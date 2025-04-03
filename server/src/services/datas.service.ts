import { CategoriesEntity } from "@/entities/categories.entity";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [CategoriesEntity],
  synchronize: true, //pas en prod
});

export default dataSource;
