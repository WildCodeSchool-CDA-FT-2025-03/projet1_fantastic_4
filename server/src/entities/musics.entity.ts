import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("musics")
export class MusicsEntity extends BaseEntity {
  @Column()
  @Field()
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  categoryName: string;

  @Column()
  @Field()
  genre: string;
}
