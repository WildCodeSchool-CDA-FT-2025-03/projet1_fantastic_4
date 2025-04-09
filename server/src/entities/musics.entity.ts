import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CategoriesEntity } from "./categories.entity";

@ObjectType()
@Entity("musics")
export class MusicsEntity extends BaseEntity {
  @Column()
  @Field()
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  releaseDate: Date;

  @Column()
  @Field()
  genre: string;

  @Field(() => CategoriesEntity)
  @ManyToOne(() => CategoriesEntity, (category) => category.musics)
  @JoinTable()
  category?: CategoriesEntity;
}
