import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@ObjectType()
@Entity()
export class GenresEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  genreid: string;

  @Field()
  @Column()
  genrename: string;
}
