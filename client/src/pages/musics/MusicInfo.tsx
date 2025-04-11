import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import { GET_ONE_MUSIC } from "@/schemas/musics.schema";
import "./musicInfo.css";
import SimpleExtraInfo from "@/components/MediaInfoLayout/SimpleExtraInfo/SimpleExtraInfos";

const MusicInfo = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_ONE_MUSIC, {
    variables: { id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>The music {id} doesn't exist.</p>;
  }

  const music = data.getOneMusic;
  const info = music.tracklist.map(
    (track: { title: string; duration: string }) => {
      return {
        title: track.title,
        text: track.duration,
      };
    },
  );

  return (
    <>
      {music && (
        <MediaInfoLayout
          category={music.category.name}
          title={music.title}
          summary={music.summery}
          subtitle={`Release date ${new Date(music.releaseDate).toLocaleDateString("fr-FR")}`}
          url={music.coverUrl}
        >
          <SimpleExtraInfo
            infos={[
              { title: "Artists", text: music.artists },
              { title: "Category", text: music.genre },
              { title: "Label", text: music.label },
              { title: "Productors", text: music.producers },
              { title: "Studios", text: music.recordingStudio },
              { title: "Awards", text: music.awards },
              { title: "Certifications", text: music.certifications },
              { title: "Formats", text: music.format },
              { title: "Audience", text: music.targetedAudience },
            ]}
          />
          <h3>Tracklist</h3>
          <div className={"simple-extra-infos"}>
            {info &&
              info.map((i: { title: string; text: string }) => (
                <div key={i.title} className="item-title-music">
                  <span className="title">{i.title}</span>
                  <small style={{ textAlign: "right" }} className="duration">
                    {i.text}
                  </small>
                </div>
              ))}
          </div>
        </MediaInfoLayout>
      )}
    </>
  );
};

export default MusicInfo;
