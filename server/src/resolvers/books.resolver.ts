import { Resolver, Query, Arg } from "type-graphql";
import { BooksEntity } from "@/entities/books.entity";
import { shuffleArray } from "@/utils/shuffleArray";
@Resolver()
class BooksResolver {
  @Query(() => [BooksEntity])
  async getAllBooks() {
    const books = await BooksEntity.find({ relations: ["category"], take: 10 });
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
  @Query(() => [BooksEntity])
  async getBooksRecommandations() {
    // Use 'take' to retrieve a higher number of movies from the database but not too high for performance
    const books = await BooksEntity.find({
      relations: ["category"],
      order: {
        createdAt: "DESC",
      },
      take: 50,
    });

    const shuffledBooks = shuffleArray(books);
    const randomBooks = shuffledBooks.slice(0, 10);

    return randomBooks;
  }
  @Query(() => BooksEntity, { nullable: true })
  async getOneBookById(
    @Arg("id", () => String) id: string,
  ): Promise<BooksEntity | null> {
    const oneBook = await BooksEntity.findOne({
      where: { id: id },
      relations: ["category"],
    });
    if (!oneBook) {
      throw new Error("No movies found");
    }
    return oneBook;
  }
}

export default BooksResolver;
