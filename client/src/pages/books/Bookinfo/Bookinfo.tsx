import MediaInfoLayout from "@/components/MediaInfoLayout/MediaInfoLayout";
import SimpleExtraInfo from "@/components/MediaInfoLayout/SimpleExtraInfo/SimpleExtraInfos";
import WordList from "@/components/MediaInfoLayout/WordList/WordList";
import { GET_ONE_BOOK } from "@/schemas/books.schema";
import { Category } from "@/types/category.type";

import { useQuery } from "@apollo/client";
import { useParams } from "react-router";

type GetOneBookById = {
  getOneBookById: {
    id: string;
    title: string;
    genre: string;
    publisher: string;
    synopsis: string;
  } | null;
};

export default function Bookinfo() {
  const { id } = useParams();

  const { loading, error, data } = useQuery<GetOneBookById>(GET_ONE_BOOK, {
    variables: { id: id },
    skip: !id,
  });
  const book = data?.getOneBookById;

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>The book doesn't exist.</p>;
  }

  return (
    <>
      {book && (
        <MediaInfoLayout
          category={Category.Books}
          title={book.title}
          summary={book.synopsis}
          subtitle=""
        >
          <SimpleExtraInfo
            infos={[
              { title: "Category", text: book.genre },
              { title: "Publisher", text: book.publisher },
            ]}
          />
          <WordList
            title="tags"
            words={book.genre.split(",").map((genre) => genre.trim())}
          />
        </MediaInfoLayout>
      )}
    </>
  );
}
