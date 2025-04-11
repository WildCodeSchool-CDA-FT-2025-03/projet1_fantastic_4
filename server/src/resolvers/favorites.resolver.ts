import { GamesFavoritesEntity } from "@/entities/games/favorites.entity";
import { GamesEntity } from "@/entities/games/games.entity";
import { UserEntity } from "@/entities/users.entity";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
class FavoritesResolver {
  @Query(() => [GamesFavoritesEntity])
  async getFavorites(
    @Arg("userName", () => String) userName: string,
  ): Promise<GamesFavoritesEntity[]> {
    const user = await UserEntity.findOneBy({ name: userName });

    if (!user) {
      throw "Error user mot exist";
    }
    return (
      (await GamesFavoritesEntity.find({
        where: { user: user, isFavorite: true },
      })) || []
    );
  }

  @Mutation(() => Boolean)
  async addFavoritesGame(
    @Arg("userName", () => String) userName: string,
    @Arg("slugid", () => String) slugid: string,
    @Arg("enable", () => Boolean) enable: boolean,
  ): Promise<boolean> {
    const user = await UserEntity.findOneBy({ name: userName });
    const game = await GamesEntity.findOneBy({ slug: slugid });

    if (!user || !game) {
      throw new Error("User ou Game introuvable");
    }

    const fav = await GamesFavoritesEntity.findOne({
      where: {
        game: game,
        user: user,
      },
    });

    if (fav === null) {
      const newFav = new GamesFavoritesEntity();
      newFav.user = user;
      newFav.game = game;
      newFav.isFavorite = enable;
      await newFav.save();
    } else {
      fav.isFavorite = enable;
      await fav.save();
    }
    return true;
  }
}

export default FavoritesResolver;
