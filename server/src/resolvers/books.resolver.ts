import { Resolver, Query } from "type-graphql";
import { BooksEntity } from "@/entities/books.entity";

@Resolver()
class BooksResolver {
  @Query(() => [BooksEntity])
  async getAllBooks() {
    const books = await BooksEntity.find({ take: 10 });
    return books;
  }
  @Query(() => [BooksEntity])
  async getBooksNewIn() {
    //  Use the 'take' parameter in the query to limit the results to 8 9like limit=8 im url)
    const books = await BooksEntity.find({
      relations: ["category"],
      order: {
        createdAt: "DESC",
      },
      take: 10,
    });
    return books;
  }
}

export default BooksResolver;
