import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { GamesEntity } from "./games.entity";

@ObjectType()
@Entity("games_tags")
@Unique(["name"])
export class TagsGameEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToMany(() => GamesEntity, (game) => game.tags)
  games: GamesEntity[];
}
