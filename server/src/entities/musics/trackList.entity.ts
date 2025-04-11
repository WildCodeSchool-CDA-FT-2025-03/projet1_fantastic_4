import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MusicsEntity } from "./musics.entity";

@ObjectType()
@Entity("track_list")
export class TrackListEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  duration: string;

  @Field(() => MusicsEntity)
  @ManyToOne(() => MusicsEntity, (music) => music.tracklist)
  music: MusicsEntity[];
}
