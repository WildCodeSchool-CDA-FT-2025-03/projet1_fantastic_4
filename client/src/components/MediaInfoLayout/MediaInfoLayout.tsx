import "./MediaInfoLayout.css";

const MediaInfoLayout = () => {
  return (
    <div className="media-info-layout">
      <div className="media-info-layout-top">
        <div className="title">Factorio</div>
        <div className="raiting">X X X X X</div>
      </div>
      <div className="media-info-layout-main">
        <div className="media-info-layout-main-left">
          <div className="cover"></div>
          <div className="subtitle">Une super legende</div>
        </div>
        <div className="media-info-layout-main-description">
          Un jeux video trop bien, tu dois l'acheter!! et oui!!'
        </div>
      </div>
      <div className="media-info-layout-others">
        <div className="media-info-layout-other-item">
          <div className="item-title">
            <span>Release date </span>
            <hr />
          </div>
          <p className="item-info"> 15-11-2025</p>
        </div>
      </div>
    </div>
  );
};

export default MediaInfoLayout;
