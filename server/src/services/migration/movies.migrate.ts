import { CategoriesEntity } from "../../entities/categories.entity";
import { default as moviesData } from "./movies.json";
import { MovieEntity } from "../../entities/movie.entity";
import dataSource from "../../services/datas.service";
import { log } from "console";

const movieMigrate = async (): Promise<boolean> => {
  const queryRunner = dataSource.createQueryRunner();
  let error = false;

  try {
    await queryRunner.startTransaction();
    await queryRunner.query("DELETE FROM movies");
    await queryRunner.query("DELETE FROM sqlite_sequence");

    const moviesCategory = await dataSource.manager.findOne(CategoriesEntity, {
      where: { id: 3 },
    });

    if (!moviesCategory) {
      throw new Error("La catégorie 'Movies' avec ID 3 n'existe pas !");
    }

    const newMovies = moviesData.map((movie) => {
      const newMovie = new MovieEntity();
      newMovie.title = movie.title;
      newMovie.genre = movie.category;
      newMovie.categoryId = 3;
      return newMovie;
    });

    await dataSource.manager.save(newMovies);
    log("✅ Films insérés !");
    await queryRunner.commitTransaction();
    log("🎉 Migration terminée avec succès !");
  } catch (err) {
    error = true;
    log("❌ Erreur pendant la migration :", err);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }

  return !error;
};

export default movieMigrate;
