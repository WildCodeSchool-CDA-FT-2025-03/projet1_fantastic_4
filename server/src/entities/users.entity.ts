import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { GamesFavoritesEntity } from "./games/favorites.entity";

@ObjectType()
@Entity("users")
export class UserEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @Column()
  @OneToMany(() => GamesFavoritesEntity, (game) => game.games)
  gamesFavorites: GamesFavoritesEntity[];
}
