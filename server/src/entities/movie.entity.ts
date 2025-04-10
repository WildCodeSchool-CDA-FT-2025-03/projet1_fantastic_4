import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CategoriesEntity } from "./categories.entity";

@ObjectType()
@Entity("movies")
export class MovieEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Field()
  title: string;

  // Change genre to TEXT type in SQLite
  @Column({ type: "text", nullable: true }) // SQLite needs text type for genre
  @Field(() => String, { nullable: true })
  genre: string | null;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @Column()
  @Field()
  rate: number;

  @Column({ type: "text", nullable: true })
  @Field(() => String, { nullable: true })
  targetedAudience: string | null;

  //  Foreign Key CategoriesEntity
  @Column({ default: 3 }) // Force ID 3
  @Field()
  categoryId: number = 3;

  // CategoriesEntity relation
  @ManyToOne(() => CategoriesEntity, (category) => category.movies, {
    eager: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "categoryId" }) // Associates categoryId to CategoriesEntity
  @Field(() => CategoriesEntity)
  category: CategoriesEntity;
}
