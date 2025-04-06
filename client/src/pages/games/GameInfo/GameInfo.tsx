import { useParams } from "react-router";
import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import SimpleExtraInfo from "@/components/MediaInfoLayout/SimpleExtraInfo/SimpleExtraInfos";
import { Category } from "@/types/category.type";

import FakeDataGame from "@/utiles/fakeInfoGame.json";

const GameInfo = () => {
  const { slug } = useParams();
  const game = FakeDataGame.data.getGames.find((g) => g.slug === slug);

  const developers = game?.developers.map((d) => d.name).join(", ") || "";
  const publishers = game?.publishers.map((d) => d.name).join(", ") || "";
  const date = new Date(game?.releaseDate || 0);
  const dateStr = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;

  let component = <></>;

  if (game) {
    component = (
      <>
        <MediaInfoLayout
          category={Category.Games}
          title={game.title}
          summary={game.summary}
          subtitle={game.subtitle}
        >
          <SimpleExtraInfo
            infos={[
              { title: "Category", text: game.category.name },
              { title: "Developer", text: developers },
              { title: "Publisher", text: publishers },
              { title: "Release date", text: dateStr },
              { title: "Pegi", text: game.pegi.pegi },
              {
                title: "Original language",
                text: game.originalLanguage.language,
              },
            ]}
          />
        </MediaInfoLayout>
      </>
    );
  }

  return component;
};

export default GameInfo;
