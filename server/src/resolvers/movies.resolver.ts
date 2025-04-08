import { Resolver, Query } from "type-graphql";
import { MovieEntity } from "../entities/movie.entity";

@Resolver()
class MoviesResolver {
  @Query(() => [MovieEntity])
  async getAllMovies() {
    const movies = await MovieEntity.find({ relations: ["category"] });
    return movies;
  }

  @Query(() => [MovieEntity])
  async getMoviesNewIn() {
    const movies = await MovieEntity.find({ relations: ["category"] });
    const moviesNewIn = movies.slice(0, 9);
    return moviesNewIn;
  }
}

export default MoviesResolver;
