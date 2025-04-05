import { GamesEntity } from "../entities/games/games.entity";
import { CategoriesEntity } from "../entities/categories.entity";
import { DataSource } from "typeorm";
import { GamesPegiEsbr } from "../entities/games/pegiesbr.entity";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [CategoriesEntity, GamesEntity, GamesPegiEsbr],
  synchronize: true, //pas en prod
});

export default dataSource;
