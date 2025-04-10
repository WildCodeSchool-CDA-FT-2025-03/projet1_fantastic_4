import { useParams } from "react-router";

export default function MovieInfo() {
  const { id } = useParams();
  return <div>{id}</div>;
}
