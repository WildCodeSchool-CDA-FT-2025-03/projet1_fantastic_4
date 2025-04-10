import { GamesEntity } from "../entities/games/games.entity";
import { MovieEntity } from "../entities/movie.entity";
import { CategoriesEntity } from "../entities/categories.entity";
import { DataSource } from "typeorm";
import { GamesPegiEsbr } from "../entities/games/pegiesbr.entity";
import { GamesLanguagesEntity } from "../entities/games/languages.entity";
import { CompaniesEntity } from "../entities/games/companies.entity";
import { TagsGameEntity } from "../entities/games/tags.entity";
import { GameCategorieEntity } from "../entities/games/categories.entity";
import { MusicsEntity } from "@/entities/musics/musics.entity";
import { TrackListEntity } from "@/entities/musics/trackList.entity";

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
    GameCategorieEntity,
    MovieEntity,
    MusicsEntity,
    TrackListEntity,
  ],
  synchronize: true, //pas en prod
});

export default dataSource;
