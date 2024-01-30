import React, { useEffect, useState } from "react";

const Rating = (props) => {
  const { initialRating, display } = props;
  const [rating, setRating] = useState(Number(initialRating));

  const roundedRating = Math.round(rating * 2) / 2;
  const stars = Array.from({ length: 5 }, (_, index) => index + 0.5);

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  return (
    <div className="flex items-center">
      {stars.map((star, index) => (
        <svg
          key={index}
          width="3vw"
          height="3vw"
          viewBox="0 0 15 14"
          fill={roundedRating >= star ? "#FFA011" : "#BDBDBD"}
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-[16px] sm:h-[16px] mr-[0.5vw] sm:mr-1"
        >
          <path
            d="M6.82502 1.67301C6.8938 1.56285 6.99232 1.47145 7.11076 1.40793C7.2292 1.3444 7.36342 1.31097 7.50002 1.31097C7.63662 1.31097 7.77084 1.3444 7.88928 1.40793C8.00772 1.47145 8.10624 1.56285 8.17502 1.67301L9.9219 4.47184L13.3144 5.15784C13.4478 5.18491 13.5714 5.24415 13.6726 5.32966C13.7739 5.41516 13.8494 5.52395 13.8916 5.64517C13.9337 5.7664 13.9411 5.89582 13.913 6.02055C13.8849 6.14527 13.8222 6.26094 13.7313 6.35601L11.4188 8.77159L11.7688 11.9945C11.7826 12.1214 11.7605 12.2495 11.7047 12.3659C11.6489 12.4824 11.5613 12.5831 11.4507 12.6581C11.3402 12.7331 11.2104 12.7797 11.0745 12.7932C10.9387 12.8068 10.8013 12.7868 10.6763 12.7353L7.50002 11.4287L4.32377 12.7353C4.19872 12.7868 4.06139 12.8068 3.92549 12.7932C3.7896 12.7797 3.65989 12.7331 3.54932 12.6581C3.43875 12.5831 3.35119 12.4824 3.29538 12.3659C3.23957 12.2495 3.21746 12.1214 3.23127 11.9945L3.58127 8.77159L1.26877 6.35659C1.17766 6.26153 1.11487 6.14582 1.08665 6.02101C1.05844 5.89621 1.0658 5.76669 1.10799 5.64537C1.15018 5.52405 1.22572 5.41518 1.32709 5.32964C1.42845 5.24409 1.55209 5.18485 1.68565 5.15784L5.07815 4.47184L6.82502 1.67301Z"
            fill={roundedRating >= star ? "#FFA011" : "#BDBDBD"}
          />
        </svg>
      ))}
      {display !== "none" && (
        <span className="text-[3vw] sm:text-xs">{rating}</span>
      )}
    </div>
  );
};

export default Rating;
