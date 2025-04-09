import Carousel from "@/components/Carousel/Carousel";
import "./MusicsPage.css";
import MediaPanel from "@/components/Panel/MediaPanel";
import { useQuery } from "@apollo/client";
import { GET_ALL_MUSICS } from "@/schemas/musics.schema";

type MusicsType = {
  id: string;
  title: string;
  categoryId: string;
  genre: string;
  category: { id: number; name: string };
};

const MusicsPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_MUSICS);

  const musicsData: MusicsType[] = data?.getAllMusics;
  const newInMusic: MusicsType[] = data?.getNewInMusics;

  if (loading) return <p>Loading!</p>;
  if (error) return <p>There might be an issue</p>;

  return (
    <>
      <div className="music-page" id="top">
        <MediaPanel class="music-page-title" title="Musics Section" />
        <div className="music-container">
          <div className="music-carousel-section">
            <section>
              <Carousel datas={musicsData} title_carousel="Recommandations" />
            </section>
            <section>
              <Carousel datas={newInMusic} title_carousel="New in" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicsPage;
