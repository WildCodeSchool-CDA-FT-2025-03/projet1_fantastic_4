import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  JoinTable,
  ManyToOne,
} from "typeorm";
import { GamesEntity } from "./games.entity";
import { UserEntity } from "../users.entity";

@ObjectType()
@Entity("users")
@Unique(["games", "users"])
export class GamesFavoritesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  isFavorite: boolean;

  @Column()
  @ManyToOne(() => GamesEntity, (game) => game.favorites)
  @JoinTable()
  games: GamesEntity;

  @Column()
  @ManyToOne(() => UserEntity, (user) => user.gamesFavorites)
  @JoinTable()
  users: UserEntity;
}
