import dataSource from "../../services/datas.service";
import { log } from "console";
import { default as gamesData } from "./games.json";
import { GamesEntity } from "../../entities/games/games.entity";
import { GamesPegiEsbr } from "../../entities/games/pegiesbr.entity";
import { GamesLanguagesEntity } from "../../entities/games/languages.entity";
import { CompaniesEntity } from "../../entities/games/companies.entity";
import { TagsGameEntity } from "../../entities/games/tags.entity";
import { GameCategorieEntity } from "../../entities/games/categories.entity";

type SubGame = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  "PEGI/ESRB_rating"?: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  PEGI_ESRB_rating?: string;
};

function toPegi(g: SubGame) {
  return (g["PEGI/ESRB_rating"] || g["PEGI_ESRB_rating"] || "N/A").replace(
    ",",
    " /",
  );
}

const gameMigrate = async (): Promise<boolean> => {
  // await dataSource.initialize();
  const queryRunner = dataSource.createQueryRunner();
  let error = true;

  try {
    // CLEAR DATABASE
    await queryRunner.startTransaction();
    await queryRunner.query("DELETE FROM games");
    await queryRunner.query("DELETE FROM games_pegi_esbr");
    await queryRunner.query("DELETE FROM games_languages");
    await queryRunner.query("DELETE FROM companies");
    await queryRunner.query("DELETE FROM games_tags");
    await queryRunner.query("DELETE FROM games_categories");
    await queryRunner.query("DELETE FROM sqlite_sequence");

    // CREATE PEGI DATABASE
    const pegi = Array.from(
      new Set(gamesData.map((g) => toPegi(g as SubGame))),
    ).reduce(
      (acc, p) => {
        const newPegi = new GamesPegiEsbr();
        newPegi.pegi = p;
        acc[p] = newPegi;
        return acc;
      },
      {} as Record<string, GamesPegiEsbr>,
    );

    // CREATE LANGUAGES DATABASE
    const languages = Array.from(
      new Set(gamesData.map((g) => g.original_language)),
    ).reduce(
      (acc, l) => {
        const newLanguage = new GamesLanguagesEntity();
        newLanguage.language = l;
        acc[l] = newLanguage;
        return acc;
      },
      {} as Record<string, GamesLanguagesEntity>,
    );

    // CREATE LANGUAGES DATABASE
    const categories = Array.from(
      new Set(gamesData.map((g) => g.category)),
    ).reduce(
      (acc, c) => {
        const category = new GameCategorieEntity();
        category.name = c;
        acc[c] = category;
        return acc;
      },
      {} as Record<string, GameCategorieEntity>,
    );

    // CREATE COMPANIES DATABASE
    const companies = Array.from(
      new Set(gamesData.map((g) => g.developers.concat(g.publishers))),
    )
      .flat()
      .reduce(
        (acc, c) => {
          const company = new CompaniesEntity();
          company.name = c;
          company.gamesDevelopers = [];
          company.gamesPublishers = [];
          acc[c] = company;
          return acc;
        },
        {} as Record<string, CompaniesEntity>,
      );

    // CREATE TAGS DATABASE
    const tags = Array.from(new Set(gamesData.map((g) => [...g.keywords])))
      .flat()
      .reduce(
        (acc, t) => {
          const newTag = new TagsGameEntity();
          newTag.name = t;
          newTag.games = [];
          acc[t] = newTag;
          return acc;
        },
        {} as Record<string, TagsGameEntity>,
      );

    // CREATE GAME DATABASE
    const newGames = gamesData.map((game) => {
      const newGame = new GamesEntity();
      const slug = encodeURI(game.title.replace(/ /g, "-").toLowerCase());

      const date = game.release_date.slice(0, 10);

      newGame.title = game.title;
      newGame.subtitle = game.subtitle || "";
      newGame.summary = game.summary;
      newGame.releaseDate = new Date(date).getTime();
      newGame.slug = slug;

      newGame.originalLanguage = languages[game.original_language];

      const pegiValue = toPegi(game);
      newGame.pegi = pegi[pegiValue];

      newGame.category = categories[game.category];

      newGame.coverUrl = game.igdb.img_url || "";

      newGame.developers = game.developers.map((d) => {
        const company = companies[d];
        company.gamesDevelopers.push(newGame);
        return company;
      });

      newGame.publishers = game.publishers.map((d) => {
        const company = companies[d];
        company.gamesPublishers.push(newGame);
        return company;
      });

      newGame.tags = game.keywords.map((t) => {
        const tag = tags[t];
        tag.games.push(newGame);
        return tag;
      });

      return newGame;
    });

    let res = (
      await Promise.all([
        dataSource.manager.save(Object.values(companies)),
        dataSource.manager.save(Object.values(languages)),
        dataSource.manager.save(Object.values(pegi)),
        dataSource.manager.save(Object.values(tags)),
      ])
    ).reduce((acc, res) => {
      return acc && !!res;
    }, true);

    res = res && !!(await dataSource.manager.save(newGames));

    if (res) {
      log("Migration games done !");
    }

    await queryRunner.commitTransaction();
    error = false;
  } catch (error) {
    log(error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
  return !error;
};

export default gameMigrate;
