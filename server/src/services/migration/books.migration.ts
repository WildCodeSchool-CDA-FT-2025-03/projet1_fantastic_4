/*import dataSource from "../../services/datas.service";
import {default as booksData} from "./books.json";
import { BooksEntity } from "@/entities/books.entity";
import { log } from "console";
import { CategoriesEntity } from "@/entities/categories.entity";

const bookMigrate = async (): Promise<boolean> => {

    const queryRunner = dataSource.createQueryRunner();
    let error = true;

try {
    await queryRunner.startTransaction();
    await queryRunner.query("DELETE FROM books");
await queryRunner.query("DELETE FROM books_categories");//transformer categories.entity en books_categories.entity
    await queryRunner.query("DELETE FROM sqlite_sequence");
}











}*/
