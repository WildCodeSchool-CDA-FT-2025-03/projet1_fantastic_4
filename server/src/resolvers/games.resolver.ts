import { GamesEntity } from "@/entities/games/games.entity";
import { Resolver, Query } from "type-graphql";

@Resolver()
class GameResolver {
  @Query(() => [GamesEntity])
  async getGames() {
    // return await GamesEntity.find();
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
}

export default GameResolver;
