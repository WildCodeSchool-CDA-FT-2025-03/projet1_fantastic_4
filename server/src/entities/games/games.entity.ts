import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Index,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { GamesPegiEsbr } from "./pegiesbr.entity";
import { GamesLanguages } from "./languages.entity";
import { CompaniesEntity } from "./companies.entity";

@ObjectType()
@Entity("games")
export class GamesEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  subtitle: string;

  @Field()
  @Index({ unique: true })
  @Column()
  slug: string;

  @Field()
  @Column()
  releaseDate: Date;

  @Field()
  @Column()
  summary: string;

  @ManyToOne(() => GamesPegiEsbr, (pegi) => pegi.id, {
    cascade: true,
  })
  @JoinColumn({ name: "pegi_id" })
  pegi: GamesPegiEsbr;

  @ManyToOne(() => GamesLanguages, (lang) => lang.id, {
    cascade: true,
  })
  @JoinColumn({ name: "original_language" })
  originalLanguage: GamesLanguages;

  @ManyToMany(() => CompaniesEntity, (company) => company.gamesDevelopers)
  @JoinTable()
  developers: CompaniesEntity[];

  @ManyToMany(() => CompaniesEntity, (company) => company.gamesPublishers)
  @JoinTable()
  publishers: CompaniesEntity[];
}
