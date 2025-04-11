import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  // Unique,
  JoinTable,
  ManyToOne,
} from "typeorm";
import { GamesEntity } from "./games.entity";
import { UserEntity } from "../users.entity";

@ObjectType()
@Entity("games_favorites")
// @Unique(["gameId", "userId"])
export class GamesFavoritesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  isFavorite: boolean;

  @ManyToOne(() => GamesEntity, (game) => game.id)
  @JoinTable()
  game: GamesEntity;

  @ManyToOne(() => UserEntity, (user) => user.id)
  @JoinTable()
  user: UserEntity;
}
