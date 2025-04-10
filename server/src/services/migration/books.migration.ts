import dataSource from "../../services/datas.service";
import { default as booksData } from "./books.json";
import { BooksEntity } from "../../entities/books.entity";
import { log } from "console";

const bookMigrate = async (): Promise<boolean> => {
  const queryRunner = dataSource.createQueryRunner();
  let error = false;

  try {
    await queryRunner.startTransaction();
    await queryRunner.query("DELETE FROM book");
    await queryRunner.query("DELETE FROM sqlite_sequence");

    const newBooks = booksData.map((book) => {
      const newBook = new BooksEntity();
      newBook.title = book.titre;
      newBook.genre = book.genre;
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
