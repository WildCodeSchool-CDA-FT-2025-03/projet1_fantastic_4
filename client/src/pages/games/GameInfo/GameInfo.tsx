import { useParams } from "react-router";
import "./GameInfo.css";

const GameInfo = () => {
  const { id } = useParams();
  return (
    <>
      <h2>Games Info: {id}</h2>
    </>
  );
};

export default GameInfo;
