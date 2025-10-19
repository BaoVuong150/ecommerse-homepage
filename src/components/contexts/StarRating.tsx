import React, { useState } from "react";
import Rating from "@mui/material/Rating";

interface StarRatingProps {
  defaultValue?: number; // giá trị mặc định
  max?: number;          // số sao tối đa
  readOnly?: boolean;    // có cho người dùng đánh giá không
}

const StarRating: React.FC<StarRatingProps> = ({
  defaultValue = 0,
  max = 5,
  readOnly = false,
}) => {
  const [value, setValue] = useState<number | null>(defaultValue);

  return (
    <div className="flex items-center gap-2">
      <Rating
        name="star-rating"
        value={value}
        max={max}
        readOnly={readOnly}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  );
};

export default StarRating;
