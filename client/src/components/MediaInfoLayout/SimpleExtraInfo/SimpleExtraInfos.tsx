type PropsSimpleExtraInfos = {
  infos: { title: string; text: string }[];
};

const SimpleExtraInfo = ({ infos }: PropsSimpleExtraInfos) => {
  return (
    <div className={"media-info-layout-others"}>
      {infos.map((info) => {
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
    </div>
  );
};

export default SimpleExtraInfo;
