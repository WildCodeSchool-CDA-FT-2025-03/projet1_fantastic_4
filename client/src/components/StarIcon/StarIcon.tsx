type PropsStar = {
  percent: number;
};

const StarIcon = (props: PropsStar) => {
  const widthPercent = Math.min(Math.max(props.percent, 0), 100);
  const idGrad = `star-grad-${widthPercent}`;
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={idGrad}>
          <stop offset={`${widthPercent}%`} stopColor="gold" />
          <stop offset={`${widthPercent}%`} stopColor="lightgray" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${idGrad})`}
        stroke="black"
        strokeWidth="0.5"
        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.886 1.436 8.291L12 18.896l-7.372 4.587
      1.436-8.291L.001 9.306l8.332-1.151z"
      />
    </svg>
  );
};

export default StarIcon;
