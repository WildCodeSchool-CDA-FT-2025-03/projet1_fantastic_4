import "../SimpleExtraInfos.css";

type PropsSimpleText = {
  info: { title: string; text: string };
};

const SimpleText = ({ info }: PropsSimpleText) => {
  return (
    <div>
      <div className="item-title">
        <h4>{info.title}</h4>
        <hr />
      </div>
      <p className="simple-extra-infos-item">{info.text}</p>
    </div>
  );
};

export default SimpleText;
