import dataSource from "../../datas.service";
import { log } from "console";
import { default as musicsData } from "./musics.json";
import { MusicsEntity } from "../../../entities/musics.entity";
import { CategoriesEntity } from "@/entities/categories.entity";

const musicMigrate = async () => {
  const queryRunner = dataSource.createQueryRunner();
  try {
    await queryRunner.query("DELETE FROM musics");
    await queryRunner.query("DELETE FROM sqlite_sequence");

    const musics = musicsData;
    const categories = await CategoriesEntity.findBy({ name: "musics" });
    const category = categories.length > 0 ? categories[0] : null;

    if (!category) {
      throw new Error("Category 'musics' not found");
    }
    const newMusics = musics.map((music) => {
      const newMusic = new MusicsEntity();
      newMusic.title = music.title;
      newMusic.category = category;
      newMusic.genre = music.genre;
      newMusic.releaseDate = new Date(Date.parse(music.release_date));
      return newMusic;
    });

    await queryRunner.manager.save(newMusics);
  } catch (error) {
    log(error);
  }
};
export default musicMigrate;
