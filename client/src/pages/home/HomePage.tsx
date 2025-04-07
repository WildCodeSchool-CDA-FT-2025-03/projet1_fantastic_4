import "@/pages/home/HomePage.css";
import Carousel from "@/components/Carousel/Carousel";
import fakeDatasCarousel from "@/utiles/fakeDatasCarousel.json";

const HomePage = () => {
  return (
    <>
      <div className="home-page" id="top">
        <h1 className="home-page-title">
          Welcome to your <span>Home Center</span> !
        </h1>
        <section>
          <Carousel
            datas={fakeDatasCarousel}
            title_carousel="Recommandations"
          />
        </section>
      </div>
    </>
  );
};

export default HomePage;
