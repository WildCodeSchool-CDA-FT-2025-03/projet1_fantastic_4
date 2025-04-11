import CarouselRecoMovies from "@/components/CarouselRecoMovies";
import "./MoviesPage.css";
import CarouselNewInMovies from "@/components/CarouselNewInMovies";
import MediaPanel from "@/components/Panel/MediaPanel";
import SearchByGenres from "@/components/MoviesSearch/SearchByGenres";
import { useState } from "react";
import ResearchBar from "@/components/ResearchBar/ResearchBar";
import CarousselByGenre from "@/components/MoviesSearch/CarouselByGenre";

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
          <div id="carousel-by-genre">
            {selectedGenre && (
              <CarousselByGenre selectedGenre={selectedGenre} />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoviesPage;
