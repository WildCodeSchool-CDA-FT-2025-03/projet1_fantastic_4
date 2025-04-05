import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@ObjectType()
@Entity()
export class BookFavoritesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  publisherid: string;

  @Field()
  @Column()
  publishername: string;
}
