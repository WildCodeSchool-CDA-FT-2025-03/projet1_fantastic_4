import CardMedia from "./CardMedia";

interface CarouselProps {
  datas: Data[];
}

interface Data {
  id: number;
  title: string;
  category_name: string;
  genre: string;
}

export default function Carousel({ datas }: CarouselProps) {
  return (
    <div className="carousel-wrapper">
      <section className="carousel-container">
        <div className="carousel-track">
          {datas.map((item) => (
            <CardMedia
              key={item.id}
              title={item.title}
              category_name={item.category_name}
              genre={item.genre}
              id={item.id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
