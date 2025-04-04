import { MovieEntity } from "../entities/movie.entity";
import { CategoriesEntity } from "../entities/categories.entity";
import { DataSource } from "typeorm";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [CategoriesEntity, MovieEntity],
  synchronize: true, //pas en prod
});

export default dataSource;
