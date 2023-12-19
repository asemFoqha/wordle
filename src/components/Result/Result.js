import React from "react";
import Guess from "../Guess";

function Result({ guesses }) {
  let tempArray = [0, 1, 2, 3, 4, 5];
  console.log(guesses);

  return (
    <div className="guess-results">
      {tempArray.map((num) => (
        <Guess key={num} value={guesses[num]} />
      ))}
    </div>
  );
}

export default Result;
