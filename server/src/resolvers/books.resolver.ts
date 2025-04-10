import { Resolver, Query } from "type-graphql";
import { BooksEntity } from "@/entities/books.entity";

@Resolver()
class BooksResolver {
  @Query(() => [BooksEntity])
  async getAllBooks() {
    const books = await BooksEntity.find({ take: 10 });
    return books;
  }
}

export default BooksResolver;
