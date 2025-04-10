import CarouselRecoMovies from "@/components/CarouselRecoMovies";
import "./MoviesPage.css";
import CarouselNewInMovies from "@/components/CarouselNewInMovies";
import MediaPanel from "@/components/Panel/MediaPanel";
import SearchByGenres from "@/components/MoviesSearch/SearchByGenres";
import { useState } from "react";
import MovieList from "@/components/MoviesSearch/MovieList";

const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  return (
    <div className="movies-page" id="top">
      <MediaPanel class="movies-page-title" title="Movies section" />
      <section className="movies-container">
        <section className="research-aside">
          <SearchByGenres onGenreSelect={setSelectedGenre} />
        </section>
        <div className="carousels-movies-wrapper">
          <CarouselNewInMovies />
          <CarouselRecoMovies />
          {selectedGenre && <MovieList selectedGenre={selectedGenre} />}
        </div>
      </section>
    </div>
  );
};

export default MoviesPage;
