import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { CategoriesEntity } from "./categories.entity";

@ObjectType()
@Entity("book")
export class BooksEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  genre: string;

  @Field()
  @Column()
  booktitle: string;

  @Field()
  @Column({ default: 1 })
  categoryId: number = 1;

  @ManyToOne(() => CategoriesEntity, (category) => category.books)
  @JoinColumn({ name: "categoryId" })
  @Field(() => CategoriesEntity)
  category: CategoriesEntity;
}
