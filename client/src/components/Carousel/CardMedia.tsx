import "../Carousel/CardMedia.css";

function CardMedia() {
  return (
    <>
      <article className="card-media">
        <section className="card-content">
          <img
            className="category-icon"
            src="public/games-icon.svg"
            alt="category icon"
          />
          <h3>Title</h3>
        </section>
        <section className="card-footer">
          <p>Genre</p>
        </section>
      </article>
    </>
  );
}
export default CardMedia;
