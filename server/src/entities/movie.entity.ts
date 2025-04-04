import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class MovieEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  @Field()
  title: string;

  @Column("text", { array: true })
  @Field(() => [String])
  producers: string[];
  //TODO Relation with movie_producer table

  @Column("text", { array: true })
  @Field(() => [String])
  studios: string[];

  @Column()
  @Field()
  releaseDate: Date;

  @Column()
  @Field()
  duration: number;

  @Column("text", { array: true })
  @Field(() => [String])
  genre: string[];
  //TODO Relation with movie_producer table

  @Column()
  @Field()
  summary: string;

  @Column()
  @Field()
  targetedAudience: string;

  @Column("text", { array: true })
  @Field(() => [String])
  awards: string[];

  @Column("text", { array: true })
  @Field(() => [String])
  actors: string;

  @Column()
  @Field()
  budget: number;

  @Column()
  @Field()
  boxOffice: number;

  @Column()
  @Field()
  rate: number;
}
