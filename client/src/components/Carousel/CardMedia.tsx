import "../Carousel/CardMedia.css";

interface CardProps {
  id: number;
  title: string;
  category_name: string;
  genre: string;
}

function CardMedia({ title, category_name, genre }: CardProps) {
  return (
    <>
      <article className="card-media,carousel-slide">
        <section className="card-content">
          <img
            className="category-icon"
            src={`public/${category_name}-icon.svg`}
            alt={`${category_name} icon`}
          />
          <h3>{title}</h3>
        </section>
        <section className="card-footer">
          <p>{genre}</p>
        </section>
      </article>
    </>
  );
}
export default CardMedia;
