import CarouselRecoMovies from "@/components/CarouselRecoMovies";
import "./MoviesPage.css";
import CarouselNewInMovies from "@/components/CarouselNewInMovies";
import MediaPanel from "@/components/Panel/MediaPanel";
import SearchByGenres from "@/components/MoviesSearch/SearchByGenres";
import { useState } from "react";
import ResearchBar from "@/components/ResearchBar/ResearchBar";
import CarousselByGenre from "@/components/MoviesSearch/CarouselByGenre";
// TODO : RENAME CarousselByGenre by a better name like ListMoviesByGenre

const MoviesPage = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  return (
    <div className="movies-page" id="top">
      <MediaPanel class="movies-page-title" title="Movies section" />
      <section className="movies-container">
        <ResearchBar>
          <SearchByGenres onGenreSelect={setSelectedGenre} />
        </ResearchBar>

        <div className="carousels-movies-wrapper">
          <CarouselNewInMovies />
          <CarouselRecoMovies />
          <div className="movies-by-genre" id="carousel-by-genre">
            {selectedGenre && (
              <>
                <h2>Your Selection : {selectedGenre}</h2>
                <CarousselByGenre selectedGenre={selectedGenre} />
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoviesPage;
