import { GamesEntity } from "@/entities/games/games.entity";
import { Resolver, Query, Arg, Int, registerEnumType } from "type-graphql";

enum Order {
  releaseDate = "releaseDate",
  name = "slug",
}

enum Dir {
  desc = "DESC",
  asc = "ASC",
}

registerEnumType(Order, {
  name: "GameOrder",
  description: "Order game by name or release date",
});

registerEnumType(Dir, {
  name: "GameDir",
  description: "Diection order",
});

@Resolver()
class GameResolver {
  @Query(() => [GamesEntity])
  async getGames(
    @Arg("limit", () => Int, { defaultValue: 0 }) limit: number,
    @Arg("page", () => Int, { defaultValue: 1 }) page: number,
    @Arg("order", () => Order, { defaultValue: Order.name }) order: Order,
    @Arg("dir", () => Dir, { defaultValue: Dir.asc }) dir: Dir,
  ): Promise<GamesEntity[]> {
    const skip = (page - 1) * limit;

    return await GamesEntity.find({
      take: limit,
      skip: skip,
      order: { [order]: dir },
      relations: [],
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
