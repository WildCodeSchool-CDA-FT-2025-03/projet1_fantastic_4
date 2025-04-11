import "@/pages/home/HomePage.css";
import CarouselRecoGame from "@/components/CarouselRecoGame";
import Carousel from "@/components/Carousel/Carousel";
import { useQuery } from "@apollo/client";
import { GET_ALL_MUSICS } from "@/schemas/musics.schema";
import CarouselRecoMovies from "@/components/CarouselRecoMovies";
import CarouselNewInBooks from "@/components/CarouselNewInBooks";
type MusicsType = {
  id: string;
  title: string;
  categoryId: string;
  genre: string;
  category: { id: number; name: string };
};
const HomePage = () => {
  const { loading, error, data } = useQuery(GET_ALL_MUSICS);

  const musicsData: MusicsType[] = data?.getAllMusics;

  if (loading) return <p>Loading!</p>;
  if (error) return <p>There might be an issue</p>;

  return (
    <>
      <div className="home-page" id="top">
        <h1 className="home-page-title">
          Welcome to your <span>Home Center</span> !
        </h1>
        <div className="games-body-page">
          <CarouselRecoGame />
        </div>
        <section>
          <Carousel
            datas={musicsData}
            title_carousel="Recommandations Musics"
          />
        </section>
        <CarouselRecoMovies />
        <CarouselNewInBooks />
      </div>
    </>
  );
};

export default HomePage;
