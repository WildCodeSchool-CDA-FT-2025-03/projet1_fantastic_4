import "./WordList.css";

type WordListProps = {
  title: string;
  words: string[];
};

const WordList = ({ title, words }: WordListProps) => {
  return (
    <div className={"word-list"}>
      <h4>{title}</h4>
      {words.map((w) => (
        <p>{w}</p>
      ))}
    </div>
  );
};

export default WordList;
