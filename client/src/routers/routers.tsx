import { createBrowserRouter } from "react-router";
import App from "@/App";
import HomePage from "@/pages/home/HomePage";
import MoviesPage from "@/pages/movies/MoviesPage";
import MusicsPage from "@/pages/musics/MusicsPage";
import GamesPage from "@/pages/games/GamesPage";
import BooksPage from "@/pages/books/BooksPage";
import GameInfo from "@/pages/games/GameInfo/GameInfo";
import MovieInfo from "@/pages/movies/MovieInfo/MovieInfo";

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
        path: "/movies/:id",
        element: <MovieInfo />,
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
        path: "/books",
        element: <BooksPage />,
      },
    ],
  },
]);

export default router;
