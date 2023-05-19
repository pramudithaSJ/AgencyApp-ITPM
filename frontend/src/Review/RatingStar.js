import React from "react";

const RatingStars = ({ rating }) => {
  const starCount = 5; // Total number of stars
  const activeColor = "#FCD34D"; // Color for active (colored) stars
  const inactiveColor = "#C4C4C4"; // Color for inactive (gray) stars

  const getStarColor = (index) => {
    if (index <= rating) {
      return activeColor;
    } else {
      return inactiveColor;
    }
  };

  return (
    <div className="flex">
      {Array.from({ length: starCount }, (_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={getStarColor(index + 1)}
          width="24px"
          height="24px"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2l3.09 6.31 6.91.97-5 4.86 1.18 6.88L12 17.02l-6.18 3.11 1.18-6.88-5-4.86 6.91-.97L12 2zm0 2.26L8.38 9.13l-5.12.72 3.72 3.63-.88 5.13L12 16.52l4.9 2.45-.88-5.13 3.72-3.63-5.12-.72L12 4.26zm0 7.3l-2.94 2.87.7-4.09-2.45-2.39 3.4-.49L12 3.4l1.29 2.86 3.4.49-2.45 2.39.7 4.09L12 11.56z" />
        </svg>
      ))}
    </div>
  );
};

export default RatingStars;
