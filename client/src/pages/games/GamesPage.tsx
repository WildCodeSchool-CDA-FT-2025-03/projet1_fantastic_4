import CarouselNewInGame from "@/components/CarouselNewInGame";
import CarouselRecoGame from "@/components/CarouselRecoGame";
import "./GamesPage.css";
import MediaPanel from "@/components/Panel/MediaPanel";
import InfinitCardScroll from "@/components/InfiniteCardScroll/InfiniteCardScroll";

const GamesPage = () => {
  return (
    <>
      <MediaPanel title="Game Section" class="game-page-title" />
      <div className="games-body-page">
        <CarouselNewInGame />
        <CarouselRecoGame />
      </div>
      <InfinitCardScroll />
    </>
  );
};

export default GamesPage;
