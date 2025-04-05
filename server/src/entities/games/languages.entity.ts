import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

@ObjectType()
@Entity("games_languages")
@Unique(["language"])
export class GamesLanguages extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Field()
  @Column()
  language: string;
}
