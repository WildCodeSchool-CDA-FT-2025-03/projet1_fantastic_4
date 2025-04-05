import dataSource from "../../services/datas.service";
import { log } from "console";
import { default as gamesData } from "./games.json";
import { GamesEntity } from "../../entities/games/games.entity";
import { GamesPegiEsbr } from "../../entities/games/pegiesbr.entity";
import { GamesLanguages } from "../../entities/games/languages.entity";

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

(async () => {
  await dataSource.initialize();
  const queryRunner = dataSource.createQueryRunner();

  try {
    // CLEAR DATABASE
    await queryRunner.startTransaction();
    await queryRunner.query("DELETE FROM games");
    await queryRunner.query("DELETE FROM games_pegi_esbr");
    await queryRunner.query("DELETE FROM games_languages");
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
        const newLanguage = new GamesLanguages();
        newLanguage.language = l;
        acc[l] = newLanguage;
        return acc;
      },
      {} as Record<string, GamesLanguages>,
    );

    // CREATE GAME DATABASE
    const newGames = gamesData.map((game) => {
      const newGame = new GamesEntity();
      const slug = encodeURI(game.title.replace(/ /g, "-").toLowerCase());

      newGame.title = game.title;
      newGame.subtitle = game.subtitle || "";
      newGame.summary = game.summary;
      newGame.releaseDate = new Date(game.release_date);
      newGame.slug = slug;

      newGame.originalLanguage = languages[game.original_language];

      const pegiValue = toPegi(game);
      newGame.pegi = pegi[pegiValue];

      return newGame;
    });

    const res =
      (await dataSource.manager.save(Object.values(languages))) &&
      (await dataSource.manager.save(Object.values(pegi))) &&
      (await dataSource.manager.save(newGames));

    if (res) {
      log("Migration games done !");
    }

    await queryRunner.commitTransaction();
  } catch (error) {
    log(error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
})();
