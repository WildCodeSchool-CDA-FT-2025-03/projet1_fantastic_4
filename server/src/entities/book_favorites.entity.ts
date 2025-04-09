import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class BookFavoritesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  favoriteid: string;

  @Field()
  @Column()
  bookid: string;

  @Field()
  @Column()
  userid: string;

  @Field()
  @Column()
  isfavorite: boolean;
}
