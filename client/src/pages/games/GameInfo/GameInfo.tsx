import { useParams } from "react-router";
import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import "./GameInfo.css";

const GameInfo = () => {
  const { _id } = useParams();

  const game = {
    title: "Factorio",
    releseDate: "21-08-2025",
    summary:
      "Factorio a pour but la création d'une usine complètement automatisée, produisant des éléments de plus en plus complexes, dans un monde en 2D. Utiliser votre imagination pour concevoir votre usine, combiner de simples éléments en ingénieuses structures, tout en vous protégeant des aliens !",
    subtitle: "Best game ever!",
    gameTags: ["horror", "action", "RPG", "Open "],
    rating: 3.6,
    isFavorite: true,
    pegi: "PEGI 16",
    developer: "Maximilien Compamy",
    publisher: "Valve",
  };
  return (
    <>
      <MediaInfoLayout
        genre="game"
        title={game.title}
        releaseDate={game.releseDate}
        summary={game.summary}
        rating={game.rating}
        isFavorite={game.isFavorite}
        subtitle={game.subtitle}
        secondaryInfo={[
          { title: "Developer", text: game.developer },
          {
            title: "Publisher",
            text: game.publisher,
          },
          { title: "Pegi", text: game.pegi },
        ]}
      />
    </>
  );
};

export default GameInfo;
