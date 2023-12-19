import React from "react";

function Guess({ value }) {
  let tempArray = [0, 1, 2, 3, 4];

  return (
    <p className="guess">
      {tempArray.map((num, index) => (
        <span
          key={index}
          className={`cell ${value ? value.letters[num].status : undefined}`}
        >
          {value ? value.word[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
