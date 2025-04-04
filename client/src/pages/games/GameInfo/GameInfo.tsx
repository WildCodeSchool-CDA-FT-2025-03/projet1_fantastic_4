import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import FakeDataGame from "@/utiles/fakeInfoGame.json";
import "./GameInfo.css";

const GameInfo = () => {
  const game = FakeDataGame;

  return (
    <>
      <MediaInfoLayout
        genre="games"
        title={game.title}
        summary={game.summary}
        rating={game.rating}
        isFavorite={game.isFavorite}
        subtitle={game.subtitle}
        secondaryInfo={[
          { title: "Developer", text: game.developer },
          {
            title: "Publisher",
            text: game.publisher,
          },
          { title: "Pegi", text: game.pegi },
        ]}
      />
    </>
  );
};

export default GameInfo;
