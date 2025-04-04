import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import FakeDataGame from "@/utiles/fakeInfoGame.json";
import { Category } from "@/types/category.type.d";

const GameInfo = () => {
  const game = FakeDataGame;

  return (
    <>
      <MediaInfoLayout
        category={Category.Games}
        title={game.title}
        summary={game.summary}
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
