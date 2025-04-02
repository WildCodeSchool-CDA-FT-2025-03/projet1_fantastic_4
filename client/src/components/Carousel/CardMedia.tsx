import "../Carousel/CardMedia.css";

function CardMedia() {
  return (
    <>
      <article className="card-media">
        <section className="card-content">
          <img
            className="category-icon"
            src="public-homecenter/games-icon.svg"
            alt="category icon"
          />
          <h2>Title</h2>
        </section>
        <section className="card-footer">
          <p>Genre</p>
          <img
            className="heart-icon"
            src="/public-homecenter/empty-heart.svg"
            alt="heart icon"
          />
        </section>
      </article>
    </>
  );
}
export default CardMedia;
