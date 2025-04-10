import { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MOVIES_GENRES } from "@/schemas/movie.schema";
import "./SearchByGenres.css";

type GetAllMoviesGenresType = {
  getAllMoviesGenres: {
    id: string;
    name: string;
  }[];
};

type Props = {
  onGenreSelect: (genreName: string) => void;
};

export default function SearchByGenres({ onGenreSelect }: Props) {
  const { loading, error, data } = useQuery<GetAllMoviesGenresType>(
    GET_ALL_MOVIES_GENRES,
  );
  const [searchTerm, setSearchTerm] = useState("");

  const moviesGenres = data?.getAllMoviesGenres || [];

  let filteredGenres: GetAllMoviesGenresType["getAllMoviesGenres"][number][] =
    [];

  if (searchTerm.length >= 3) {
    filteredGenres = moviesGenres.filter((genre) =>
      genre.name.toLowerCase().startsWith(searchTerm.toLowerCase()),
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search genres (min 3 letters)..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="genre-results">
        {filteredGenres.map((genre) => (
          <button
            key={genre.id}
            onClick={() => onGenreSelect(genre.name)}
            className="tag-button"
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}
