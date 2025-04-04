import "./SimpleExtraInfos.css";
type PropsSimpleExtraInfos = {
  infos: { title: string; text: string }[];
};

const SimpleExtraInfo = ({ infos }: PropsSimpleExtraInfos) => {
  return (
    <div className={"simple-extra-infos"}>
      {infos.map((info) => {
        return (
          <div key={info.title}>
            <div className="item-title">
              <h4>{info.title}</h4>
              <hr />
            </div>
            <p className="simple-extra-infos-item">{info.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SimpleExtraInfo;
