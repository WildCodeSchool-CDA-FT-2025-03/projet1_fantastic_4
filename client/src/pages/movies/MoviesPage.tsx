import CarouselRecoMovies from "@/components/CarouselRecoMovies";
import "./MoviesPage.css";
import CarouselNewInMovies from "@/components/CarouselNewInMovies";
import MediaPanel from "@/components/Panel/MediaPanel";
import SearchByGenres from "@/components/MoviesSearch/SearchByGenres";

const MoviesPage = () => {
  return (
    <div className="movies-page" id="top">
      <MediaPanel class="movies-page-title" title="Movies section" />
      <section className="movies-container">
        <section className="research-aside">
          <SearchByGenres />
        </section>
        <div className="carousels-movies-wrapper">
          <CarouselNewInMovies />
          <CarouselRecoMovies />
        </div>
      </section>
    </div>
  );
};

export default MoviesPage;
