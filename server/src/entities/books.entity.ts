import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { CategoriesEntity } from "./categories.entity";

@ObjectType()
@Entity()
export class BooksEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  author: string;

  @Field()
  @Column()
  publisher: string;

  @Field()
  @Column()
  genre: string;

  @Field()
  @Column()
  synopsis: string;

  @Field()
  @Column()
  audiencerate: number;

  @Field()
  @Column()
  booktitle: string;

  @Field()
  @Column()
  series: string;

  @Field()
  @Column()
  releasedate: Date;

  @Field()
  @Column()
  categoryname: string;

  @ManyToOne(() => CategoriesEntity, (category) => category.books)
  @Field(() => CategoriesEntity)
  category: CategoriesEntity;
}
