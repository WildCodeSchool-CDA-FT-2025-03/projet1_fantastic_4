import "./HomePage.css";
import Carousel from "@/components/Carousel/Carousel";

const fakeDatas = [
  { id: 1, title: "Title 1", category: "games", genre: "Horror" },
  { id: 2, title: "Title 2", category: "musics", genre: "Punk" },
  { id: 3, title: "Title 3", category: "books", genre: "Drama" },
  { id: 4, title: "Title 4", category: "movies", genre: "Fiction" },
  { id: 5, title: "Title 5", category: "games", genre: "Adventure" },
  { id: 6, title: "Title 6", category: "movies", genre: "Comedy" },
  { id: 7, title: "Title 7", category: "books", genre: "Fiction" },
  { id: 8, title: "Title 8", category: "musics", genre: "Rock" },
  { id: 9, title: "Title 9", category: "games", genre: "Retro" },
  { id: 10, title: "Title 10", category: "movies", genre: "Horror" },
];

const HomePage = () => {
  // eslint-disable-next-line no-console
  console.info(fakeDatas);
  return (
    <>
      <h2>Home Page</h2>
      <h2>Recommandations</h2>
      <Carousel datas={fakeDatas} />
    </>
  );
};

export default HomePage;
