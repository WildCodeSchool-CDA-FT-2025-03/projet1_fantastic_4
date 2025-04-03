import "./MediaInfoLayout.css";

type PropsMediaInfoLayout = {
  genre: "game" | "music" | "movie" | "book";
  title: string;
  releaseDate: string;
  summary: string;
  rating: number;
  isFavorite: boolean;
  subtitle?: string;
  secondaryInfo?: { title: string; text: string }[];
};

const MediaInfoLayout = (props: PropsMediaInfoLayout) => {
  const title = props.title;
  const _releaseDate = props.releaseDate;
  const summary = props.summary;
  const _rating = props.rating;
  const _isFavorite = props.isFavorite;
  const subtitle = props.subtitle;
  const secondaryInfo = props.secondaryInfo;

  return (
    <div className="media-info-layout">
      <div className="media-info-layout-top">
        <div className="title">{title}</div>
        <div className="raiting">X X X X X</div>
      </div>
      <div className="media-info-layout-main">
        <div className="media-info-layout-main-left">
          <div className="cover"></div>
          <div className="subtitle">{subtitle}</div>
        </div>
        <div className="media-info-layout-main-description">{summary}</div>
      </div>
      <div className="media-info-layout-others">
        {secondaryInfo?.map((info) => {
          return (
            <div className="media-info-layout-other-item">
              <div className="item-title">
                <span>{info.title}</span>
                <hr />
              </div>
              <p className="item-info">{info.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediaInfoLayout;
