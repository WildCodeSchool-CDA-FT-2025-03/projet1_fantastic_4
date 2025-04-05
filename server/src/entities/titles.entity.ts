import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@ObjectType()
@Entity()
export class TitlesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  titleid: string;

  @Field()
  @Column()
  titlename: string;
}
