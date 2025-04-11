import CarouselGameFav from "@/components/CarouselGameFav";
import { useParams } from "react-router";

const GamesFav = () => {
  const { username } = useParams();

  if (username) {
    return <CarouselGameFav user={username} />;
  } else {
    return <p>User {username} doesn't exist</p>;
  }
};

export default GamesFav;
