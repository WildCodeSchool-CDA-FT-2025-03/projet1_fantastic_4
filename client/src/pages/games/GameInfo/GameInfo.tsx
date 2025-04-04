import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import { Category } from "@/types/category.type";
import { useParams } from "react-router";

import FakeDataGame from "@/utiles/fakeInfoGame.json";

const GameInfo = () => {
  const { slug } = useParams();
  const game = FakeDataGame.find((g) => g.slug === slug);

  let component = <></>;

  if (game) {
    component = (
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
  }

  return component;
};

export default GameInfo;
