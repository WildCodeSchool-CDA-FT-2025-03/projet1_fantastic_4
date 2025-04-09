import { Resolver, Query } from "type-graphql";
import { MovieEntity } from "../entities/movie.entity";
import { shuffleArray } from "@/utils/shuffleArray";
import { MovieGenreEntity } from "@/entities/movieGenre.entity";

@Resolver()
class MoviesResolver {
  @Query(() => [MovieGenreEntity])
  async getAllMoviesGenres() {
    const moviesGenres = await MovieGenreEntity.find();
    return moviesGenres;
  }

  @Query(() => [MovieEntity])
  async getAllMovies() {
    const movies = await MovieEntity.find({ relations: ["category"] });
    return movies;
  }

  @Query(() => [MovieEntity])
  async getMoviesNewIn() {
    //  Use the 'take' parameter in the query to limit the results to 8 9like limit=8 im url)
    const movies = await MovieEntity.find({
      relations: ["category"],
      order: {
        createdAt: "DESC",
      },
      take: 10,
    });
    return movies;
  }

  @Query(() => [MovieEntity])
  async getMoviesRecommandations() {
    // Use 'take' to retrieve a higher number of movies from the database but not too high for performance
    const movies = await MovieEntity.find({
      relations: ["category"],
      order: {
        createdAt: "DESC",
      },
      take: 50,
    });

    const shuffledMovies = shuffleArray(movies);
    const randomMovies = shuffledMovies.slice(0, 10);

    return randomMovies;
  }
}

export default MoviesResolver;
