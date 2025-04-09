import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import { BooksEntity } from "./books.entity";

@ObjectType()
@Entity("categories")
export class CategoriesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  @Field()
  name: string;
  //  Foreign Key CategoriesEntity
  @Column({ default: 1 }) // Force ID 1
  @Field()
  categoryId: number = 2;
  @OneToMany(() => BooksEntity, (book) => book.category)
  @Field(() => [BooksEntity])
  books: BooksEntity[];
}
