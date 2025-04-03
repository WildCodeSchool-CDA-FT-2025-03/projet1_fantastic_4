import "./HomePage.css";
import Carousel from "@/components/Carousel/Carousel";

const fakeDatas = [
  { id: 1, title: "Title 1", category_name: "games", genre: "Horror" },
  { id: 2, title: "Title 2", category_name: "musics", genre: "Punk" },
  { id: 3, title: "Title 3", category_name: "books", genre: "Drama" },
  { id: 4, title: "Title 4", category_name: "movies", genre: "Fiction" },
  { id: 5, title: "Title 5", category_name: "games", genre: "Adventure" },
  { id: 6, title: "Title 6", category_name: "movies", genre: "Comedy" },
  { id: 7, title: "Title 7", category_name: "books", genre: "Fiction" },
  { id: 8, title: "Title 8", category_name: "musics", genre: "Rock" },
  { id: 9, title: "Title 9", category_name: "games", genre: "Retro" },
  { id: 10, title: "Title 10", category_name: "movies", genre: "Horror" },
];

const HomePage = () => {
  // eslint-disable-next-line no-console
  console.info(fakeDatas);
  return (
    <>
      <div className="home-page" id="top">
        <h1 className="home-page-title">
          Welcome to your <span>Home Center</span> !
        </h1>
        <section>
          <h2 className="home-page-subtitle">Recommandations</h2>
          <Carousel datas={fakeDatas} />
        </section>
      </div>
    </>
  );
};

export default HomePage;
