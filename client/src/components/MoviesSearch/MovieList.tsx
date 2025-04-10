import { GET_MOVIES_BY_GENRE } from "@/schemas/movie.schema";
import { useQuery } from "@apollo/client";
import Carousel from "../Carousel/Carousel";

type Props = {
  selectedGenre: string;
};

type GetMoviesByGenreType = {
  getMoviesByGenre: {
    id: string;
    categoryId: string;
    genre: string;
    title: string;
    category: { id: number; name: string };
  }[];
};

export default function MovieList({ selectedGenre }: Props) {
  const genre =
    selectedGenre && selectedGenre.trim() !== "" ? selectedGenre : "Thriller";
  const { loading, error, data } = useQuery<GetMoviesByGenreType>(
    GET_MOVIES_BY_GENRE,
    {
      variables: { genreName: genre },
    },
  );
  // console.log({ selectedGenre });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies</p>;

  const allMovies = data?.getMoviesByGenre || [];
  // console.log({ data });

  return (
    <div className="movies-filtered">
      <Carousel datas={allMovies} title_carousel={genre} />
    </div>
  );
}
