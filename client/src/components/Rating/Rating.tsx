import StarIcon from "@/components/Icons/StarIcon";

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
    <div className="star-icon">
      {props.rate}
      {star}
    </div>
  );
};

export default Rating;
