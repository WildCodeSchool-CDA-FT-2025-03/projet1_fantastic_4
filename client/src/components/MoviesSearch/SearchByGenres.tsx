import { GET_ALL_MOVIES_GENRES } from "@/schemas/movie.schema";
import { useQuery } from "@apollo/client";

type GetAllMoviesGenresType = {
  getAllMoviesGenres: {
    id: string;
    name: string;
  }[];
};

export default function SearchByGenres() {
  const { loading, error, data } = useQuery<GetAllMoviesGenresType>(
    GET_ALL_MOVIES_GENRES,
  );
  const moviesGenres = data?.getAllMoviesGenres;
  // console.log({ moviesGenres });

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an error</p>;

  return (
    <>
      {moviesGenres?.map((genre) => {
        <button className="tag-button">{genre.name}</button>;
      })}
    </>
  );
}
