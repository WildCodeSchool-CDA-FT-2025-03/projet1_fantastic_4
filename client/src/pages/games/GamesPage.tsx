import CarouselNewInGame from "@/components/CarouselNewInGame";
import CarouselRecoGame from "@/components/CarouselRecoGame";
import "./GamesPage.css";
import MediaPanel from "@/components/Panel/MediaPanel";

const GamesPage = () => {
  return (
    <>
      <MediaPanel title="Game Section" class="game-page-title" />
      <div className="games-body-page">
        <CarouselNewInGame />
        <CarouselRecoGame />
      </div>
    </>
  );
};

export default GamesPage;
