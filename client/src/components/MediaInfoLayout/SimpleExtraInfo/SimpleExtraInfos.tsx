import "./SimpleExtraInfos.css";
import SimpleText from "./SimpleText/SimpleText";

type PropsSimpleExtraInfos = {
  infos: { title: string; text: string }[];
};

const SimpleExtraInfo = ({ infos }: PropsSimpleExtraInfos) => {
  return (
    <div className={"simple-extra-infos"}>
      {infos.map((info) => (
        <SimpleText key={info.title} info={info} />
      ))}
    </div>
  );
};

export default SimpleExtraInfo;
