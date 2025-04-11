import { SET_GAME_FAVORIE } from "@/schemas/games.schema";
import { useMutation } from "@apollo/client";
// import { useEffect } from "react";

type Props = {
  user: string;
  slug: string;
};

const GamesAddFav = ({ user, slug }: Props) => {
  const [setFav] = useMutation(SET_GAME_FAVORIE);

  const setFavorite = () => {
    setFav({
      variables: { slugid: slug, userName: user, enable: true },
    });
  };

  return (
    <button className="tag-button" onClick={setFavorite}>
      ADD
    </button>
  );
};

export default GamesAddFav;
