import { GamesEntity } from "../entities/games/games.entity";
import { CategoriesEntity } from "../entities/categories.entity";
import { DataSource } from "typeorm";
import { GamesPegiEsbr } from "../entities/games/pegiesbr.entity";
import { GamesLanguagesEntity } from "../entities/games/languages.entity";
import { CompaniesEntity } from "../entities/games/companies.entity";
import { TagsGameEntity } from "../entities/games/tags.entity";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [
    CategoriesEntity,
    GamesEntity,
    GamesPegiEsbr,
    GamesLanguagesEntity,
    CompaniesEntity,
    TagsGameEntity,
  ],
  synchronize: true, //pas en prod
});

export default dataSource;
