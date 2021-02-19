import React, { useState } from "react";

const HintCard = (props) => {
  const [cardState, setCardState] = useState(0);
  const { index, hint } = props;

  const handleOnclick = () => {
    setCardState(1);
    //call
  };

  return (
    <div className="flex">
      {cardState === 0 && (
        <button
          onClick={handleOnclick}
          className="px-3 py-2 bg-sandyBrown hover:opacity-50 m-2 rounded-lg text-white"
        >
          HintCard
        </button>
      )}
      {cardState === 1 && (
        <div className="px-3 py-2 bg-sandyBrown m-2 rounded-lg text-white">
          {hint}
        </div>
      )}
    </div>
  );
};

export default HintCard;
