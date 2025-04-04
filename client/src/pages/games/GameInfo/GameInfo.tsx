import { useParams } from "react-router";
import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import SimpleExtraInfo from "@/components/MediaInfoLayout/SimpleExtraInfo/SimpleExtraInfos";
import { Category } from "@/types/category.type";

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
        >
          <SimpleExtraInfo
            infos={[
              { title: "Developer", text: game.developer },
              { title: "Publisher", text: game.publisher },
              { title: "Pegi", text: game.pegi },
            ]}
          />
        </MediaInfoLayout>
      </>
    );
  }

  return component;
};

export default GameInfo;
