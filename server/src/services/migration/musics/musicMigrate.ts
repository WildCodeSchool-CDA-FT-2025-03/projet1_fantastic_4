import dataSource from "../../datas.service";
import { log } from "console";
import { default as musicsData } from "./musics.json";
import { MusicsEntity } from "../../../entities/musics.entity";

const musicMigrate = async () => {
  const queryRunner = dataSource.createQueryRunner();
  try {
    await queryRunner.query("DELETE FROM musics");
    await queryRunner.query("DELETE FROM sqlite_sequence");

    const musics = musicsData;

    const newMusics = musics.map((music) => {
      const newMusic = new MusicsEntity();
      newMusic.title = music.title;
      newMusic.categoryName = "Musics";
      newMusic.genre = music.genre;
      return newMusic;
    });

    await queryRunner.manager.save(newMusics);
  } catch (error) {
    log(error);
  }
};
export default musicMigrate;
