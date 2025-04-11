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
@Entity("games_favorites")
@Unique(["game", "user"])
export class GamesFavoritesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  isFavorite: boolean;

  @Field(() => GamesEntity)
  @ManyToOne(() => GamesEntity, (game) => game, { eager: true })
  @JoinTable()
  game: GamesEntity;

  @ManyToOne(() => UserEntity, (user) => user, { eager: true })
  @JoinTable()
  user: UserEntity;
}
