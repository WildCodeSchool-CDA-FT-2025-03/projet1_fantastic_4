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
@Entity("companies")
@Unique(["name"])
export class CompaniesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  name: string;

  @ManyToMany(() => GamesEntity, (game) => game.developers)
  gamesDevelopers: GamesEntity[];

  @ManyToMany(() => GamesEntity, (game) => game.publishers)
  gamesPublishers: GamesEntity[];
}
