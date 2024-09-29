import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

// Component to show star rating
const StarRating = ({ rating, totalStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = totalStars - fullStars - halfStar;

  return (
    <div className="flex items-center space-x-1">
      {/* Full stars */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className="text-yellow-400"
          />
        ))}

      {/* Half star */}
      {halfStar === 1 && (
        <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-400" />
      )}

      {/* Empty stars */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className="text-gray-300"
          />
        ))}
    </div>
  );
};

export default StarRating;
