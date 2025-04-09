import CarouselRecoMovies from "@/components/CarouselRecoMovies";
import "./MoviesPage.css";
import CarouselNewInMovies from "@/components/CarouselNewInMovies";

const MoviesPage = () => {
  return (
    <>
      <h2>Movies Page</h2>
      <CarouselNewInMovies />
      <CarouselRecoMovies />
    </>
  );
};

export default MoviesPage;
