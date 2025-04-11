import { SET_GAME_FAVORIE } from "@/schemas/games.schema";
import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useParams } from "react-router";

const GamesAddFav = () => {
  const { slug } = useParams();
  const { user } = useParams();
  const { fav } = useParams();

  const [setFav] = useMutation(SET_GAME_FAVORIE);

  useEffect(() => {
    if (fav && slug && fav) {
      const enable = fav === "true";
      setFav({
        variables: { slug: slug, userName: user, enable: enable },
      });
    }
  });
  return <h1>ok</h1>;
};

export default GamesAddFav;
