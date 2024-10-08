import classes from "./StarRating.module.css";

const StarRating = ({ rating }: { rating: number }) => {
  let ratingColor;
  if (rating <= 2) {
    ratingColor = classes.redBg;
  } else if (rating <= 3) {
    ratingColor = classes.yellowBg;
  } else if (rating <= 4) {
    ratingColor = classes.lightGreenBg;
  } else {
    ratingColor = classes.greenBg;
  }
  return (
    <div className={`${classes.rating} ${ratingColor}`}>
      <span className={classes.ratingNum}>{rating}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={classes.starIcon}
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0)">
          <path d="M19.54 6.85L13.62 5.5 10.51.29a.596.596 0 00-1.02 0L6.38 5.5.46 6.85a.599.599 0 00-.31.98l3.99 4.57-.55 6.04c-.02.21.07.41.24.54.17.12.39.15.59.07L10 16.64l5.58 2.39c.08.03.16.05.23.05h.01c.3.01.6-.26.6-.6 0-.06-.01-.12-.03-.17l-.54-5.93 3.99-4.57c.14-.16.18-.38.12-.58a.544.544 0 00-.42-.38z"></path>
        </g>
        <defs>
          <clipPath id="clip0">
            <path d="M0 0H20V19.08H0z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default StarRating;
