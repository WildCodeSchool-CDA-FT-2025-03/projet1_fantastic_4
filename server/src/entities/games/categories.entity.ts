import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";

@ObjectType()
@Entity("games_categories")
@Unique(["name"])
export class GameCategorieEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Field()
  @Column()
  name: string;
}
