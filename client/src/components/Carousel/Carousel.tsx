import { useState } from "react";
import "@/components/Carousel/Carousel.css";

import Skeleton from "./Skeleton";
import CardMedia from "./CardMedia";

type CarouselProps = {
  datas: Data[];
};

type Data = {
  id: number;
  title: string;
  category_name: string;
  genre: string;
};

export default function Carousel({ datas }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const videosPerPage = 1;
  // const { theme } = useTheme();

  const skeletonList = Array(20)
    .fill("skel")
    .map((s, index) => {
      return {
        id: `${s}-${index}`,
        name: "skeleton",
      };
    });

  // Function to skip to the next video
  const nextSlide = () => {
    if (currentIndex + videosPerPage < datas.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to return to the previous video
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slideWidthPixels = 296 + 9; //we add the gap
  const trackWidthPixels = datas.length * slideWidthPixels;

  return (
    <div className="carousel-wrapper">
      <button
        type="button"
        onClick={prevSlide}
        disabled={currentIndex === 0}
        className="carousel-arrow prev"
      >
        <img
          className="arrow-button"
          src="public/arrow-left.svg"
          alt="arrow left"
        />
      </button>
      <section className="carousel-container">
        <div
          className="carousel-track"
          style={{
            // we translate the track of the width of a card + the gap * by the current index
            transform: `translateX(-${currentIndex * slideWidthPixels}px)`,
            width: `${trackWidthPixels}px`,
          }}
        >
          {datas.map((item) => (
            <CardMedia
              key={item.id}
              title={item.title}
              category_name={item.category_name}
              genre={item.genre}
              id={item.id}
            />
          ))}
          {skeletonList.map((skel) => (
            <Skeleton key={skel.id} />
          ))}
        </div>
      </section>
      <button
        type="button"
        onClick={nextSlide}
        disabled={currentIndex + videosPerPage >= datas.length}
        className="carousel-arrow next"
      >
        <img
          className="arrow-button"
          src="public/arrow-right.svg"
          alt="arrow right"
        />
      </button>
    </div>
  );
}
