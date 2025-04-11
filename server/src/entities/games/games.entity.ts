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
  OneToMany,
} from "typeorm";
import { GamesPegiEsbr } from "./pegiesbr.entity";
import { GamesLanguagesEntity } from "./languages.entity";
import { CompaniesEntity } from "./companies.entity";
import { TagsGameEntity } from "./tags.entity";
import { GameCategorieEntity } from "./categories.entity";
import { GamesFavoritesEntity } from "./favorites.entity";

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
  releaseDate: number;

  @Field()
  @Column()
  summary: string;

  @Field()
  @Column()
  coverUrl: string;

  @Field()
  @ManyToOne(() => GamesPegiEsbr, (pegi) => pegi.id, {
    cascade: true,
  })
  @JoinColumn({ name: "pegi_id" })
  pegi: GamesPegiEsbr;

  @Field()
  @ManyToOne(() => GamesLanguagesEntity, (lang) => lang.id, {
    cascade: true,
  })
  @JoinColumn({ name: "games_languages" })
  originalLanguage: GamesLanguagesEntity;

  @Field()
  @ManyToOne(() => GameCategorieEntity, (categorie) => categorie.id, {
    cascade: true,
  })
  @JoinColumn({ name: "categorie_id" })
  category: GameCategorieEntity;

  @Field(() => [CompaniesEntity])
  @ManyToMany(() => CompaniesEntity, (company) => company.gamesDevelopers)
  @JoinTable()
  developers: CompaniesEntity[];

  @Field(() => [CompaniesEntity])
  @ManyToMany(() => CompaniesEntity, (company) => company.gamesPublishers)
  @JoinTable()
  publishers: CompaniesEntity[];

  @Field(() => [TagsGameEntity])
  @ManyToMany(() => TagsGameEntity, (tag) => tag.games)
  @JoinTable()
  tags: TagsGameEntity[];

  @OneToMany(() => GamesFavoritesEntity, (fav) => fav.game)
  favorites: GamesFavoritesEntity[];
}
