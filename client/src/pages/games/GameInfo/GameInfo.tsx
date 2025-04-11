import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import SimpleExtraInfo from "@/components/MediaInfoLayout/SimpleExtraInfo/SimpleExtraInfos";
import WordList from "@/components/MediaInfoLayout/WordList/WordList";
import { Category } from "@/types/category.type";
import { GET_ONE_GAME } from "@/schemas/games.schema";
import { Game } from "@/types/game.type";

const GameInfo = () => {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(GET_ONE_GAME, {
    variables: { slug: slug },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>The game {slug} doesn't exist.</p>;
  }

  const game: Game = data.getOneGameBySlug;

  const developers = game.developers.map((d) => d.name).join(", ") || "";
  const publishers = game.publishers.map((d) => d.name).join(", ") || "";
  const date = new Date(game.releaseDate);
  const dateStr = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;

  return (
    <>
      {game && (
        <MediaInfoLayout
          category={Category.Games}
          title={game.title}
          summary={game.summary}
          subtitle={game.subtitle}
          url={game.coverUrl}
          slug={game.slug}
          addFav={true}
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

          <WordList title="tags" words={game.tags.map((t) => t.name)} />
        </MediaInfoLayout>
      )}
    </>
  );
};

export default GameInfo;
