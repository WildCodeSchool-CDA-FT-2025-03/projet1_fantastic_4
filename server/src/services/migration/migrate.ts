import dataSource from "../datas.service";
import { log } from "console";
import { default as categoriesData } from "./categories.json";
import { CategoriesEntity } from "../../entities/categories.entity";
import musicMigrate from "./musics/musicMigrate";

(async () => {
  await dataSource.initialize();
  const queryRunner = dataSource.createQueryRunner();

  try {
    await queryRunner.startTransaction();
    await queryRunner.query("DELETE FROM categories");
    await queryRunner.query("DELETE FROM sqlite_sequence");

    const categories = categoriesData;

    const newCategories = categories.map((category) => {
      const newCategory = new CategoriesEntity();
      newCategory.name = category.name;
      return newCategory;
    });

    const res = await dataSource.manager.save(newCategories);
    await musicMigrate();
    if (res) {
      log("Migration done !");
    }
    await queryRunner.commitTransaction();
  } catch (error) {
    log(error);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }
})();
