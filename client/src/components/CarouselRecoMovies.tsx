import { useQuery } from "@apollo/client";
import Carousel from "./Carousel/Carousel";
import { GET_MOVIES_RECOMMANDATIONS } from "@/schemas/movie.schema";

type GetMoviesRecommandationsType = {
  getMoviesRecommandations: {
    id: string;
    categoryId: string;
    genre: string;
    title: string;
    category: { id: number; name: string };
  }[];
};

export default function CarouselRecoMovies() {
  const { loading, error, data } = useQuery<GetMoviesRecommandationsType>(
    GET_MOVIES_RECOMMANDATIONS,
  );
  const moviesNewIn = data?.getMoviesRecommandations;

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an error</p>;

  return (
    <>
      {moviesNewIn && (
        <Carousel datas={moviesNewIn} title_carousel="Recommandations Movies" />
      )}
    </>
  );
}
