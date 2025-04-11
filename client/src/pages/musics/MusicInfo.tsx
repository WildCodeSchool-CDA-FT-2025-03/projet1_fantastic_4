import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import { GET_ONE_MUSIC } from "@/schemas/musics.schema";
import "./musicInfo.css";

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
          <div className="general-info">
            <h3>General info</h3>
            <table className="general-info-table">
              <tbody>
                <tr>
                  <th>Artists</th>
                  <td>{music.artists}</td>
                </tr>
                <tr>
                  <th>Genre</th>
                  <td>{music.genre}</td>
                </tr>
                <tr>
                  <th>Label</th>
                  <td>{music.label}</td>
                </tr>

                <tr>
                  <th>Awards</th>
                  <td>{music.awards}</td>
                </tr>
                <tr>
                  <th>Producers</th>
                  <td>{music.producers}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </MediaInfoLayout>
      )}
    </>
  );
};

export default MusicInfo;
