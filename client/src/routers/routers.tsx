import { createBrowserRouter } from "react-router";
import App from "@/App";
import HomePage from "@/pages/home/HomePage";
import MoviesPage from "@/pages/movies/MoviesPage";
import MusicsPage from "@/pages/musics/MusicsPage";
import GamesPage from "@/pages/games/GamesPage";
import BooksPage from "@/pages/books/BooksPage";
import GameInfo from "@/pages/games/GameInfo/GameInfo";
import GamesAddFav from "@/pages/games/GamesAddFav";
import GamesFav from "@/pages/games/GamesFav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/movies",
        element: <MoviesPage />,
      },
      {
        path: "/musics",
        element: <MusicsPage />,
      },
      {
        path: "/games/:slug",
        element: <GameInfo />,
      },
      {
        path: "/games",
        element: <GamesPage />,
      },
      {
        path: "/games/:slug/:user/:fav",
        element: <GamesAddFav />,
      },
      {
        path: "/books",
        element: <BooksPage />,
      },
      {
        path: "/user/:username",
        element: <GamesFav />,
      },
    ],
  },
]);

export default router;
