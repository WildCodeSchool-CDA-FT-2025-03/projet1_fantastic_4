import { useQuery } from "@apollo/client";
import "./MoviesPage.css";
import Carousel from "@/components/Carousel/Carousel";
import { GET_MOVIES_NEW_IN } from "@/schemas/movie.schema";

type GetMoviesNewInType = {
  getMoviesNewIn: {
    id: string;
    categoryId: string;
    genre: string;
    title: string;
    category: { id: number; name: string };
  }[];
};

const MoviesPage = () => {
  const { loading, error, data } =
    useQuery<GetMoviesNewInType>(GET_MOVIES_NEW_IN);
  const moviesNewIn = data?.getMoviesNewIn;

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an error</p>;

  return (
    <>
      <h2>Movies Page</h2>
      {moviesNewIn && (
        <Carousel datas={moviesNewIn} title_carousel="New In Movies" />
      )}
    </>
  );
};

export default MoviesPage;
