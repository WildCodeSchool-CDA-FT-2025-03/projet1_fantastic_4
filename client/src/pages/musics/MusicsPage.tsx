import Carousel from "@/components/Carousel/Carousel";
import "./MusicsPage.css";
import musicsData from "@/utiles/musics.json";
import MediaPanel from "@/components/Panel/MediaPanel";

type MusicsType = {
  id: number;
  title: string;
  category_name: string;
  genre: string;
};

const MusicsPage = () => {
  const data: MusicsType[] = musicsData.map((data, index) => {
    return {
      id: index,
      title: data.title,
      category_name: "musics",
      genre: data.category,
    };
  });

  return (
    <>
      <div className="music-page" id="top">
        <MediaPanel class="music-page-title" title="Musics Section" />
        <div className="music-container">
          <div className="music-carousel-section">
            <section>
              <Carousel datas={data} title_carousel="Recommandations" />
            </section>
            <section>
              <Carousel datas={data} title_carousel="New in" />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicsPage;
