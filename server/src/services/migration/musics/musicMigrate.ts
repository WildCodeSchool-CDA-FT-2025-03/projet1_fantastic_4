import dataSource from "../../datas.service";
import { log } from "console";
import { default as musicsData } from "./musics.json";
import { MusicsEntity } from "../../../entities/musics/musics.entity";
import { CategoriesEntity } from "@/entities/categories.entity";
import { TrackListEntity } from "@/entities/musics/trackList.entity";

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

    const newMusics = await Promise.all(
      musics.map(async (music) => {
        const newMusic = new MusicsEntity();
        newMusic.title = music.title;
        newMusic.artists = music.artists;
        newMusic.targetedAudience = music.targeted_audience;
        newMusic.label = music.label;
        newMusic.category = category;
        newMusic.genre = music.genre;
        newMusic.summery = music.summary;
        newMusic.releaseDate = new Date(Date.parse(music.release_date));

        const newTrackList: TrackListEntity[] = [];
        for (const trackList of music.tracklist) {
          const list = new TrackListEntity();
          list.title = trackList.title;
          list.duration = String(trackList.duration);
          await queryRunner.manager.save(list);
          newTrackList.push(list);
        }

        newMusic.tracklist = newTrackList;
        return newMusic;
      }),
    );
    await queryRunner.manager.save(newMusics);
  } catch (error) {
    log(error);
  }
};
export default musicMigrate;
