import { createBrowserRouter } from "react-router";
import App from "@/App";
import HomePage from "@/pages/home/HomePage";
import MoviesPage from "@/pages/movies/MoviesPage";
import MusicsPage from "@/pages/musics/MusicsPage";
import GamesPage from "@/pages/games/GamesPage";
import BooksPage from "@/pages/books/BooksPage";
import GameInfo from "@/pages/games/GameInfo/GameInfo";
import GamesAddFav from "@/pages/games/GamesAddFav";

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
        path: "/games/:slug/:fav",
        element: <GamesAddFav />,
      },
      {
        path: "/books",
        element: <BooksPage />,
      },
    ],
  },
]);

export default router;
