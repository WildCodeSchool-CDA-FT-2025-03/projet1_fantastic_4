import dataSource from "../../services/datas.service";
import { log } from "console";
import { default as gamesData } from "./games.json";
import { GamesEntity } from "../../entities/games/games.entity";

(async () => {
  await dataSource.initialize();
  const queryRunner = dataSource.createQueryRunner();

  try {
    await queryRunner.startTransaction();
    await queryRunner.query("DELETE FROM games");
    await queryRunner.query("DELETE FROM sqlite_sequence");

    const games = gamesData;

    const newGames = games.map((game) => {
      const newGame = new GamesEntity();
      const slug = encodeURI(game.title.replace(/ /g, "-").toLowerCase());

      newGame.title = game.title;
      newGame.subtitle = game.subtitle || "";
      newGame.summary = game.summary;
      newGame.releaseDate = new Date(game.release_date);
      newGame.slug = slug;

      return newGame;
    });

    const res = await dataSource.manager.save(newGames);
    if (res) log("Migration games done !");
    await queryRunner.commitTransaction();
  } catch (error) {
    log(error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
})();
