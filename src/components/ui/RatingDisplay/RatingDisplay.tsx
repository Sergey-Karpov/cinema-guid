import { FormateData } from "@/utils/helpers";
import React from "react";
import "./RatingDisplay.scss";

interface RatingDisplayProps {
  rating: number;
}

export const RatingDisplay: React.FC<RatingDisplayProps> = ({ rating }) => {
  const getRatingModifier = () => {
    if (rating < 6) {
      return "red";
    } else if (rating < 7) {
      return "grey";
    } else if (rating < 8) {
      return "green";
    } else if (rating <= 10) {
      return "gold";
    }
  };

  return (
    <div className={`rating-display rating-display--${getRatingModifier()}`}>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00105 12.1734L3.29875 14.8055L4.34897 9.51997L0.392578 5.86124L5.74394 5.22675L8.00105 0.333374L10.2581 5.22675L15.6095 5.86124L11.6531 9.51997L12.7033 14.8055L8.00105 12.1734Z"
          fill="white"
        />
      </svg>
      <span className="rating-display__rate">
        {FormateData.roundNumber(rating)}
      </span>
    </div>
  );
};
