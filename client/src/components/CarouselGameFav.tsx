import { useQuery } from "@apollo/client";
import Carousel from "./Carousel/Carousel";
import { GET_GAMES_FAVORITE } from "@/schemas/games.schema";
import { Data } from "./Carousel/Carousel";
import { Category } from "@/types/category.type";

type GetGameNewInType = {
  getFavorites: {
    game: {
      slug: string;
      coverUrl: string;
      title: string;
    };
  }[];
};

type Props = {
  user: string;
};

export default function CarouselGameFav({ user }: Props) {
  const { loading, error, data } = useQuery<GetGameNewInType>(
    GET_GAMES_FAVORITE,
    {
      variables: { userName: user },
    },
  );

  const gameNewIn = data?.getFavorites.map((g) => {
    return {
      id: g.game.slug, // useless
      title: g.game.title,
      genre: "",
      category: { id: 0, name: Category.Games }, // id: useless
      categoryId: "0", // useless
      coverUrl: g.game.coverUrl,
    } as Data;
  });

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an error</p>;

  return (
    <>
      {gameNewIn && gameNewIn.length > 0 && (
        <Carousel datas={gameNewIn} title_carousel={`Favorites for ${user}`} />
      )}
    </>
  );
}
