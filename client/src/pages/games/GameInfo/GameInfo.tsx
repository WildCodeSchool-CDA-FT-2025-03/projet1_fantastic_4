import { useParams } from "react-router";
import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import "./GameInfo.css";

const GameInfo = () => {
  const { _id } = useParams();
  return (
    <>
      <MediaInfoLayout />
    </>
  );
};

export default GameInfo;
