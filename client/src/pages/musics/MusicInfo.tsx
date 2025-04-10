import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import SimpleExtraInfo from "@/components/MediaInfoLayout/SimpleExtraInfo/SimpleExtraInfos";
// import WordList from "@/components/MediaInfoLayout/WordList/WordList";
import { GET_ONE_MUSIC } from "@/schemas/musics.schema";

const MusicInfo = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ONE_MUSIC, {
    variables: { id: id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>The game {id} doesn't exist.</p>;
  }

  const music = data.getOneMusic;
  // const developers = game.developers.map((d) => d.name).join(", ") || "";
  // const publishers = game.publishers.map((d) => d.name).join(", ") || "";
  // const date = new Date(game.releaseDate);
  // const dateStr = `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`;

  return (
    <>
      {music && (
        <MediaInfoLayout
          category={music.category.name}
          title={music.title}
          summary={music.genre}
          subtitle={music.releaseDate}
          url={music.coverUrl}
        >
          <SimpleExtraInfo
            infos={[
              { title: "Category", text: music.category.name },
              // { title: "Developer", text: developers },
              // { title: "Publisher", text: publishers },
              // { title: "Release date", text: dateStr },
              // { title: "Pegi", text: game.pegi.pegi },
              // {
              //   title: "Original language",
              //   text: game.originalLanguage.language,
              // },
            ]}
          />

          {/* <WordList title="tags" words={game.tags.map((t) => t.name)} /> */}
        </MediaInfoLayout>
      )}
    </>
  );
};

export default MusicInfo;
