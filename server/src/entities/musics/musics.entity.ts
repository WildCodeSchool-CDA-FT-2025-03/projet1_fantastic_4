import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { CategoriesEntity } from "../categories.entity";
import { TrackListEntity } from "./trackList.entity";

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

  @Column("simple-array")
  @Field(() => [String])
  artists: string[];

  @Column()
  @Field()
  label: string;

  @Column()
  @Field()
  targetedAudience: string;

  @Column()
  @Field()
  releaseDate: Date;

  @Column()
  @Field()
  genre: string;

  @Column()
  @Field()
  summery: string;

  @Field(() => CategoriesEntity)
  @ManyToOne(() => CategoriesEntity, (category) => category.musics)
  @JoinTable()
  category?: CategoriesEntity;

  @Field(() => [TrackListEntity])
  @OneToMany(() => TrackListEntity, (tracklist) => tracklist.music)
  tracklist?: TrackListEntity[];
}
