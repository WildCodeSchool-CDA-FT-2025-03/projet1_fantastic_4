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
    //  Use the 'take' parameter in the query to limit the results to 8 9like limit=8 im url)
    const movies = await MovieEntity.find({
      relations: ["category"],
      take: 8,
    });
    return movies;
  }
}

export default MoviesResolver;
