import dataSource from "../datas.service";
import { log } from "console";
import { default as categoriesData } from "./categories.json";
import { default as moviesData } from "./movies.json";
import { CategoriesEntity } from "../../entities/categories.entity";
import { MovieEntity } from "../../entities/movie.entity";

(async () => {
  await dataSource.initialize();
  const queryRunner = dataSource.createQueryRunner();

  try {
    await queryRunner.startTransaction();

    await queryRunner.query("DELETE FROM movie_entity");
    await queryRunner.query("DELETE FROM categories");
    await queryRunner.query("DELETE FROM sqlite_sequence");

    const newCategories = categoriesData.map((category) => {
      const newCategory = new CategoriesEntity();
      newCategory.id = category.id; // S'assurer que l'ID est bien défini
      newCategory.name = category.name;
      return newCategory;
    });

    await dataSource.manager.save(newCategories);
    log("✅ Catégories insérées !");

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
  } catch (error) {
    log("❌ Erreur pendant la migration :", error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
})();
