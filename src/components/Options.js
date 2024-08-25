// components/Options.js
import React from "react";

const Options = ({ options, handleOptionClick }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionClick(option)}
          className="py-2 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-300 focus:outline-none border-spacing-2 display-flex-col"
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
