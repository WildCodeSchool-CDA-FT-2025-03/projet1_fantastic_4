import { GamesEntity } from "@/entities/games/games.entity";
import { Resolver, Query, Arg } from "type-graphql";

@Resolver()
class GameResolver {
  @Query(() => [GamesEntity])
  async getGames(): Promise<GamesEntity[]> {
    return await GamesEntity.find({
      relations: [
        "pegi",
        "originalLanguage",
        "category",
        "developers",
        "publishers",
        "tags",
      ],
    });
  }

  @Query(() => GamesEntity)
  async getOneGameBySlug(
    @Arg("slug", () => String) slug: string,
  ): Promise<GamesEntity | null> {
    return await GamesEntity.findOne({
      where: { slug: slug },
      relations: [
        "pegi",
        "originalLanguage",
        "category",
        "developers",
        "publishers",
        "tags",
      ],
    });
  }
}

export default GameResolver;
