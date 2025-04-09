import dataSource from "../../services/datas.service";
import { default as booksData } from "./books.json";
import { BooksEntity } from "../../entities/books.entity";
import { log } from "console";
import { CategoriesEntity } from "../../entities/categories.entity";

const bookMigrate = async (): Promise<boolean> => {
  const queryRunner = dataSource.createQueryRunner();
  let error = false;

  try {
    await queryRunner.startTransaction();
    await queryRunner.query("DELETE FROM book");
    await queryRunner.query("DELETE FROM sqlite_sequence");

    const booksCategory = await dataSource.manager.findOne(CategoriesEntity, {
      where: { id: 1 },
    });

    if (!booksCategory) {
      throw new Error("L'id de la catégorie demandée n'existe pas !");
    }

    const newBooks = booksData.map((book) => {
      const newBook = new BooksEntity();
      newBook.booktitle = book.titre;
      newBook.genre = book.genre;
      newBook.categoryId = 1;
      return newBook;
    });

    await dataSource.manager.save(newBooks);
    log("✅ Livres insérés !");
    await queryRunner.commitTransaction();
    log("🎉Migration terminée avec succès !");
  } catch (err) {
    error = true;
    log("❌ Erreur pendant la migration :", err);
    await queryRunner.rollbackTransaction();
  } finally {
    await queryRunner.release();
  }

  return !error;
};

export default bookMigrate;
