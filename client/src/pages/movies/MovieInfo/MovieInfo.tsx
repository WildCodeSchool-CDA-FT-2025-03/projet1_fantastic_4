import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import SimpleExtraInfo from "@/components/MediaInfoLayout/SimpleExtraInfo/SimpleExtraInfos";
import { GET_ONE_MOVIE } from "@/schemas/movie.schema";
import { Category } from "@/types/category.type";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

type GetOneMovieByIdType = {
  getOneMovieById: {
    id: string;
    title: string;
    genre: string;
    summary: string;
    directors: string;
    studios: string;
    releaseDate: string;
    targetedAudience: string;
    category: { name: string };
    originalLanguage: string;
  } | null;
};

export default function MovieInfo() {
  const { id } = useParams();

  const { loading, error, data } = useQuery<GetOneMovieByIdType>(
    GET_ONE_MOVIE,
    {
      variables: { id: id },
      skip: !id,
    },
  );
  const movie = data?.getOneMovieById;

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>The movie doesn't exist.</p>;
  }

  return (
    <>
      {movie && (
        <MediaInfoLayout
          category={Category.Movies}
          title={movie.title}
          summary={movie.summary}
        >
          <SimpleExtraInfo
            infos={[
              { title: "Category", text: movie.genre },
              { title: "Productors", text: movie.directors },
              { title: "Studios", text: movie.studios },
              { title: "Release date", text: movie.releaseDate },
              { title: "Audience", text: movie.targetedAudience },
              {
                title: "Original language",
                text: movie.originalLanguage,
              },
            ]}
          />
        </MediaInfoLayout>
      )}
    </>
  );
}
