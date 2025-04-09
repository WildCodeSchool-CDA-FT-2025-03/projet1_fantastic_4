import { useQuery } from "@apollo/client";
import Carousel from "./Carousel/Carousel";
import { GET_BOOKS_RECOMMANDATIONS } from "@/schemas/books.schema";

type GetBooksRecommandationType = {
  getBooksRecommandation: {
    id: string;
    categoryId: string;
    genre: string;
    title: string;
    category: { id: number; name: string };
  }[];
};

export default function CarouselRecoBooks() {
  const { loading, error, data } = useQuery<GetBooksRecommandationType>(
    GET_BOOKS_RECOMMANDATIONS,
  );
  const booksReco = data?.getBooksRecommandation;

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an error</p>;

  return (
    <>
      {booksReco && (
        <Carousel datas={booksReco} title_carousel="Recommandations In Books" />
      )}
    </>
  );
}
