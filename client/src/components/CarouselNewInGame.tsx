import { useQuery } from "@apollo/client";
import Carousel from "./Carousel/Carousel";
import { GET_GAMES_CAROUSEL } from "@/schemas/games.schema";
import { Data } from "./Carousel/Carousel";
import { Category } from "@/types/category.type";

type GetGameNewInType = {
  getGames: {
    slug: string;
    coverUrl: string;
    category: { name: string };
    title: string;
  }[];
};

export default function CarouselNewInGame() {
  const { loading, error, data } = useQuery<GetGameNewInType>(
    GET_GAMES_CAROUSEL,
    {
      variables: { limit: 10, order: "releaseDate", dir: "desc" },
    },
  );

  const gameNewIn = data?.getGames.map((g) => {
    return {
      id: g.slug, // useless
      title: g.title,
      genre: g.category.name,
      category: { id: 0, name: Category.Games }, // id: useless
      categoryId: "0", // useless
      coverUrl: g.coverUrl,
    } as Data;
  });

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an error</p>;

  return (
    <>
      {gameNewIn && (
        <Carousel datas={gameNewIn} title_carousel="New In Games" />
      )}
    </>
  );
}
