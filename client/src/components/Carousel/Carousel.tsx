import { useEffect, useRef, useState } from "react";
import "@/components/Carousel/Carousel.css";

import Skeleton from "./Skeleton";
import CardMedia from "./CardMedia";

type CarouselProps = {
  datas: Data[];
  title_carousel: string;
};

type Data = {
  id: number;
  title: string;
  category_name: string;
  genre: string;
};

const SLIDEWITHPIXELS = 296 + 9; //we add the gap

export default function Carousel({ datas, title_carousel }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const lastItemRef = useRef<HTMLDivElement | null>(null);
  const [isAbleToGoToNext, setIsAbleToGoToNext] = useState(true);

  const cardsPerPage = 1;

  useEffect(() => {
    const currentLastItem = lastItemRef.current; //Take the current ref when it's changed
    const currentCarouselTrack = carouselRef.current;
    if (currentLastItem && currentCarouselTrack) {
      const carouselRight = currentCarouselTrack.getBoundingClientRect().right; //Object JS for the four offset of an element
      const lastSlideRight =
        currentLastItem.getBoundingClientRect().right - 7 - SLIDEWITHPIXELS; // padding deleted
      if (lastSlideRight < carouselRight) {
        setIsAbleToGoToNext(false);
      }
    }
  }, [carouselRef, lastItemRef, currentIndex]);

  // Function to skip to the next slide
  const nextSlide = () => {
    if (currentIndex + cardsPerPage < datas.length && isAbleToGoToNext) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to return to the previous slide
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <h2>{title_carousel}</h2>
      <div className="carousel-wrapper" ref={carouselRef}>
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
              transform: `translateX(-${currentIndex * SLIDEWITHPIXELS}px)`,
              width: `${datas.length * SLIDEWITHPIXELS}px`,
            }}
          >
            {datas.map((item, index) => (
              <CardMedia
                key={item.id}
                title={item.title}
                category_name={item.category_name}
                genre={item.genre}
                id={item.id}
                ref={index === datas.length - 1 ? lastItemRef : undefined}
              />
            ))}
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </section>
        <button
          type="button"
          onClick={nextSlide}
          disabled={currentIndex >= datas.length || !isAbleToGoToNext}
          className="carousel-arrow next"
        >
          <img
            className="arrow-button"
            src="public/arrow-right.svg"
            alt="arrow right"
          />
        </button>
      </div>
    </>
  );
}
