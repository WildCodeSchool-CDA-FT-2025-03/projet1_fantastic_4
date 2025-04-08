import { useQuery } from "@apollo/client";
import "./MoviesPage.css";
import { GET_ALL_MOVIES } from "@/schemas/movie.schema";
import Carousel from "@/components/Carousel/Carousel";

type GetAllMoviesType = {
  getAllMovies: {
    id: string;
    categoryId: string;
    genre: string;
    title: string;
    category: { id: number; name: string };
  }[];
};

const MoviesPage = () => {
  const { loading, error, data } = useQuery<GetAllMoviesType>(GET_ALL_MOVIES);
  const moviesNewIn = data?.getAllMovies.slice(0, 9);

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an error</p>;

  return (
    <>
      <h2>Movies Page</h2>
      {moviesNewIn ? (
        <Carousel datas={moviesNewIn} title_carousel="New In Movies" />
      ) : null}
    </>
  );
};

export default MoviesPage;
