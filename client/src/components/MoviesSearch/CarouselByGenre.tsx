import { GET_MOVIES_BY_GENRE } from "@/schemas/movie.schema";
import { useQuery } from "@apollo/client";
import CardMedia from "@/components/Carousel/CardMedia";
import "./CarousselByGenre.css";
// TODO : RENAME CarousselByGenre.css by a better name like ListMoviesByGenre.css

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

export default function CarousselByGenre({ selectedGenre }: Props) {
  const genre =
    selectedGenre && selectedGenre.trim() !== "" ? selectedGenre : "Thriller";
  const { loading, error, data } = useQuery<GetMoviesByGenreType>(
    GET_MOVIES_BY_GENRE,
    {
      variables: { genreName: genre },
    },
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading movies</p>;

  const allMovies = data?.getMoviesByGenre || [];

  return (
    <div className="movies-filtered">
      {allMovies.map((item) => (
        <CardMedia
          key={item.id}
          title={item.title}
          category_name={item.category.name}
          genre={item.genre}
          id={item.id}
        />
      ))}
    </div>
  );
}
