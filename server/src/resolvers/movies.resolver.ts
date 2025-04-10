import { Resolver, Query, Arg } from "type-graphql";
import { MovieEntity } from "../entities/movie.entity";
import { shuffleArray } from "@/utils/shuffleArray";
import { MovieGenreEntity } from "@/entities/movieGenre.entity";
import { Like } from "typeorm";

@Resolver()
class MoviesResolver {
  @Query(() => [MovieGenreEntity])
  async getAllMoviesGenres() {
    const moviesGenres = await MovieGenreEntity.find();
    return moviesGenres;
  }

  @Query(() => MovieEntity, { nullable: true })
  async getOneMovieById(
    @Arg("id", () => String) id: string,
  ): Promise<MovieEntity | null> {
    const oneMovie = await MovieEntity.findOne({
      where: { id: id },
      relations: ["category"],
    });
    if (!oneMovie) {
      return null;
    }
    return oneMovie;
  }

  @Query(() => [MovieEntity])
  async getMoviesByGenre(
    @Arg("genreName", () => String) genreName: string,
  ): Promise<MovieEntity[]> {
    const movies = await MovieEntity.find({
      where: {
        genre: Like(`%${genreName}%`),
      },
    });

    return movies;
  }

  @Query(() => [MovieEntity])
  async getAllMovies() {
    const movies = await MovieEntity.find({ relations: ["category"] });
    return movies;
  }

  @Query(() => [MovieEntity])
  async getMoviesNewIn() {
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

  @Query(() => [MovieEntity])
  async getMoviesByTargetAudience(
    @Arg("targetAudience", () => String) targetAudience: string,
  ): Promise<MovieEntity[]> {
    let movies;

    if (targetAudience === "Adulte") {
      movies = await MovieEntity.find({
        where: {
          targetedAudience: Like("%Adulte%"),
        },
      });
    } else if (targetAudience === "Tous publics") {
      movies = await MovieEntity.find({
        where: [
          { targetedAudience: Like("%Tous public%") },
          { targetedAudience: Like("%Enfant%") },
          { targetedAudience: Like("%Adolescent%") },
        ],
      });
    } else {
      movies = await MovieEntity.find({
        where: {
          targetedAudience: Like(`%${targetAudience}%`),
        },
      });
    }

    return movies;
  }
}

export default MoviesResolver;
