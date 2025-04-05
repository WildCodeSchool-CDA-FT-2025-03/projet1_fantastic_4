import { Resolver, Query } from "type-graphql";
import { MovieEntity } from "../entities/movie.entity";
@Resolver()
class MoviesResolver {
  @Query(() => [MovieEntity])
  async getAllMovies() {
    const movies = await MovieEntity.find({ relations: ["category"] });
    return movies;
  }
}

export default MoviesResolver;
