import "./MediaInfoLayout.css";
import Rating from "@/components/Rating/Rating";

type PropsMediaInfoLayout = {
  category: "games" | "musics" | "movies" | "books";
  title: string;
  summary: string;
  rating: number;
  isFavorite: boolean;
  subtitle?: string;
  secondaryInfo?: { title: string; text: string }[];
};

const MediaInfoLayout = (props: PropsMediaInfoLayout) => {
  const category = props.category;
  const title = props.title;
  const summary = props.summary;
  const rating = parseFloat(props.rating.toFixed(1));
  const subtitle = props.subtitle;
  const secondaryInfo = props.secondaryInfo;

  const backgroundColor = `media-info-color-${category}`;

  return (
    <div className="media-info-layout">
      <section className={`media-info-layout-top ${backgroundColor}`}>
        <h2>{title}</h2>
        <Rating rate={rating} />
      </section>
      <section className={`media-info-layout-main ${backgroundColor}`}>
        <div className="media-info-layout-main-left">
          <div className={`media-info-cover media-cover-${category}`}></div>
          <p className="subtitle">{subtitle}</p>
        </div>
        <div className={"media-info-layout-description "}>{summary}</div>
      </section>
      <section className={`media-info-layout-others ${backgroundColor}`}>
        {secondaryInfo?.map((info) => {
          return (
            <div key={info.title} className="media-info-layout-other-item">
              <div className="item-title">
                <h4>{info.title}</h4>
                <hr />
              </div>
              <p className="item-info">{info.text}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MediaInfoLayout;
