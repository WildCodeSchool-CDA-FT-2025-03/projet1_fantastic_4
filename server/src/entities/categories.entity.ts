import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("categories")
export class CategoriesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  @Field()
  name: string;
}
