import CarouselNewInBooks from "@/components/CarouselNewInBooks";
import "./BooksPage.css";
import CarouselRecoBooks from "@/components/CarouselRecoBooks";
import MediaPanel from "@/components/Panel/MediaPanel";

const BooksPage = () => {
  return (
    <>
      <div className="books-page" id="top">
        {" "}
      </div>
      <MediaPanel class="books-page-title" title="Books section" />
      <section className="books-container"></section>
      <CarouselNewInBooks />
      <CarouselRecoBooks />
    </>
  );
};

export default BooksPage;
