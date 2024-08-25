// components/WordDisplay.js
import React from "react";

const WordDisplay = ({ word }) => {
  return (
    <h2 className="text-xl font-semibold text-gray-800">
      {word}
    </h2>
  );
};

export default WordDisplay;
