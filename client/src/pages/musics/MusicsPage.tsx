import Carousel from "@/components/Carousel/Carousel";
import "./MusicsPage.css";
import musicsData from "@/utiles/musics.json";

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
        <h1 className="home-page-title">
          Welcome to your <span>Musics Page</span> !
        </h1>
        <div className="music-container">
          <section className="sidebar">Research by</section>
          <div className="carousel-section">
            <section className="">
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
