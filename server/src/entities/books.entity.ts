import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
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
  title: string;

  @Field()
  @Column()
  publisher: string;

  @Field()
  @Column()
  synopsis: string;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  //  Foreign Key CategoriesEntity
  @Column({ default: 1 }) // Force ID 1
  @Field()
  categoryId: number = 1;

  // CategoriesEntity relation
  @ManyToOne(() => CategoriesEntity, (category) => category.books, {
    eager: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "categoryId" }) // Associates categoryId to CategoriesEntity
  @Field(() => CategoriesEntity)
  category: CategoriesEntity;
}
