import { CategoriesEntity } from "../../entities/categories.entity";
import { default as moviesData } from "./movies.json";
import { MovieEntity } from "../../entities/movie.entity";
import dataSource from "../../services/datas.service";
import { log } from "console";
import { MovieGenreEntity } from "@/entities/movieGenre.entity";

const movieMigrate = async (): Promise<boolean> => {
  const queryRunner = dataSource.createQueryRunner();
  let error = false;

  try {
    await queryRunner.startTransaction();
    await queryRunner.query("DELETE FROM movies");
    await queryRunner.query("DELETE FROM moviesGenres");
    await queryRunner.query("DELETE FROM sqlite_sequence");

    const moviesCategory = await dataSource.manager.findOne(CategoriesEntity, {
      where: { id: 3 },
    });

    if (!moviesCategory) {
      throw new Error("La catégorie 'Movies' avec ID 3 n'existe pas !");
    }

    // Étape 1 : Récupérer les genres uniques à partir des données de films
    const uniqueGenreNames = Array.from(
      new Set(
        moviesData.flatMap((movie) =>
          movie.category.split(",").map((genre) => genre.trim()),
        ),
      ),
    );

    const createdGenres: MovieGenreEntity[] = [];
    for (const name of uniqueGenreNames) {
      const genreExists = await MovieGenreEntity.findOne({ where: { name } });

      if (!genreExists) {
        const newGenre = MovieGenreEntity.create({ name });
        await newGenre.save();
        createdGenres.push(newGenre);
        log(`✅ Genre '${name}' créé avec succès.`);
      } else {
        createdGenres.push(genreExists);
        log(`⚠️ Le genre '${name}' existe déjà.`);
      }
    }

    const newMovies = await Promise.all(
      moviesData.map(async (movie) => {
        const newMovie = new MovieEntity();
        newMovie.title = movie.title;

        if (!movie.category) {
          log(
            `Le film '${movie.title}' n'a pas de catégorie définie, genre sera null.`,
          );
          newMovie.genre = null;
        } else {
          newMovie.genre = movie.category;
        }

        newMovie.rate = Math.floor(Math.random() * 6);
        newMovie.categoryId = 3;

        return newMovie;
      }),
    );

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
