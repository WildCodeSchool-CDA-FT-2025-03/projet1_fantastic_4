import { GET_MOVIES_BY_GENRE } from "@/schemas/movie.schema";
import { useQuery } from "@apollo/client";
import CardMedia from "../Carousel/CardMedia";

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
      {allMovies.map((movie) => (
        <CardMedia
          key={movie.id}
          title={movie.title}
          genre={movie.genre}
          category_name={movie.category.name}
          id={Number(movie.id)}
        />
      ))}
    </div>
  );
}
