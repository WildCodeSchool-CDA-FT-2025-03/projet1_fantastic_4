import "./MediaInfoLayout.css";

type PropsMediaInfoLayout = {
  category: "games";
  title: string;
  summary: string;
  subtitle?: string;
  secondaryInfo?: { title: string; text: string }[];
};

const MediaInfoLayout = ({
  category,
  title,
  summary,
  subtitle,
  secondaryInfo,
}: PropsMediaInfoLayout) => {
  const backgroundColor = `media-info-color-${category}`;

  return (
    <div className="media-info-layout">
      <section className={`media-info-layout-top ${backgroundColor}`}>
        <h2>{title}</h2>
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
