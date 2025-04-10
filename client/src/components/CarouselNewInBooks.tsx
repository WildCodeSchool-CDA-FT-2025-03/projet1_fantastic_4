import { useQuery } from "@apollo/client";
import Carousel from "./Carousel/Carousel";
import { GET_BOOKS_NEW_IN } from "@/schemas/books.schema";

type GetBooksNewInType = {
  getBooksNewIn: {
    id: string;
    categoryId: string;
    genre: string;
    title: string;
    category: { id: number; name: string };
  }[];
};

export default function CarouselNewInBooks() {
  const { loading, error, data } =
    useQuery<GetBooksNewInType>(GET_BOOKS_NEW_IN);
  const booksNewIn = data?.getBooksNewIn;

  if (loading) return <p>Loading in progress...</p>;
  if (error) return <p>There might be an error</p>;

  return (
    <>
      {booksNewIn && (
        <Carousel datas={booksNewIn} title_carousel="New In Books" />
      )}
    </>
  );
}
