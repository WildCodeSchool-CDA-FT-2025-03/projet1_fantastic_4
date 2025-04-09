import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MovieEntity } from "./movie.entity";
import { MusicsEntity } from "./musics.entity";
import { BooksEntity } from "./books.entity";

@ObjectType()
@Entity("categories")
export class CategoriesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  @Field()
  name: string;

  // Inverse relationship to link movies to a category => Optional
  @OneToMany(() => MovieEntity, (movie) => movie.category) // MovieEntity -> category
  movies?: MovieEntity[];

  @OneToMany(() => MusicsEntity, (music) => music.category)
  musics?: MusicsEntity[];

  @OneToMany(() => BooksEntity, (book) => book.category)
  books?: BooksEntity[];
}
