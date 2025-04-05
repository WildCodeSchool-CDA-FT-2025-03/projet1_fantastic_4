import { GamesEntity } from "../entities/games/games.entity";
import { CategoriesEntity } from "../entities/categories.entity";
import { DataSource } from "typeorm";
import { GamesPegiEsbr } from "../entities/games/pegiesbr.entity";
import { GamesLanguages } from "../entities/games/languages.entity";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [CategoriesEntity, GamesEntity, GamesPegiEsbr, GamesLanguages],
  synchronize: true, //pas en prod
});

export default dataSource;
