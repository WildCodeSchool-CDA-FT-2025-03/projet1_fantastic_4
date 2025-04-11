import { MusicsEntity } from "../entities/musics.entity";
import { GamesEntity } from "../entities/games/games.entity";
import { MovieEntity } from "../entities/movie.entity";
import { CategoriesEntity } from "../entities/categories.entity";
import { DataSource } from "typeorm";
import { GamesPegiEsbr } from "../entities/games/pegiesbr.entity";
import { GamesLanguagesEntity } from "../entities/games/languages.entity";
import { CompaniesEntity } from "../entities/games/companies.entity";
import { TagsGameEntity } from "../entities/games/tags.entity";
import { GameCategorieEntity } from "../entities/games/categories.entity";
import { MovieGenreEntity } from "@/entities/movieGenre.entity";
import { BooksEntity } from "../entities/books.entity";
import { UserEntity } from "@/entities/users.entity";
import { GamesFavoritesEntity } from "@/entities/games/favorites.entity";

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
    MovieGenreEntity,
    BooksEntity,
    MusicsEntity,
    GamesFavoritesEntity,
    UserEntity,
  ],
  synchronize: true, //pas en prod
});

export default dataSource;
