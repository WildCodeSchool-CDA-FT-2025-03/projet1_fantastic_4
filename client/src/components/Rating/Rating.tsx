import StarIcon from "@/components/Icons/StarIcon";
import "./Rating.css";

type PropsRating = {
  rate: number;
};

const Rating = (props: PropsRating) => {
  let rate = props.rate * 100;

  const star = [];
  for (let i = 0; i < 5; i++) {
    star.push(<StarIcon key={`star-${i}`} percent={rate} />);
    rate -= 100;
  }

  return (
    <div className="rating">
      <p>{props.rate}</p>
      <div title={"" + props.rate} className="rating-star-icon">
        {star}
      </div>
    </div>
  );
};

export default Rating;
