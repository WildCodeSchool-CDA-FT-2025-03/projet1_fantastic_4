import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class BookRatingEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  rateid: string;

  @Field()
  @Column()
  bookid: string;

  @Field()
  @Column()
  userid: string;

  @Field()
  @Column()
  israted: boolean;

  @Field()
  @Column()
  userrate: string;
}
