import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CategoriesEntity } from "./categories.entity";

@ObjectType()
@Entity()
export class MovieEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  genre: string;
  // TODO Relation with movie_producer table

  //  Foreign Key CategoriesEntity
  @Column({ default: 3 }) // Force ID 3
  @Field()
  categoryId: number = 3;

  // CategoriesEntity relation
  @ManyToOne(() => CategoriesEntity, (category) => category.movies, {
    eager: true,
  })
  @JoinColumn({ name: "categoryId" }) // Associates categoryId to CategoriesEntity
  @Field(() => CategoriesEntity)
  category: CategoriesEntity;
}
