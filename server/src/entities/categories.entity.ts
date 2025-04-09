import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MovieEntity } from "./movie.entity";

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
  movies: MovieEntity[];
}
