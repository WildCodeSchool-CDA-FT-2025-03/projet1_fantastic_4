import { CategoriesEntity } from "@/entities/categories.entity";
import { DataSource } from "typeorm";
import { BooksEntity } from "@/entities/books.entity";
import { BookFavoritesEntity } from "@/entities/book_favorites.entity";
import { BookRatingEntity } from "@/entities/book_rating.entity";
import { GenresEntity } from "@/entities/genres.entity";
import { PublishersEntity } from "@/entities/publishers.entity";
import { TitlesEntity } from "@/entities/titles.entity";

const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [
    CategoriesEntity,
    BooksEntity,
    BookFavoritesEntity,
    BookRatingEntity,
    GenresEntity,
    PublishersEntity,
    TitlesEntity,
  ],
  synchronize: true, //pas en prod
});

export default dataSource;
