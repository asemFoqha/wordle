import React from "react";

function Input({ setGuesses, disabled }) {
  const initial = {
    guess: "",
  };
  const [tentativeGuess, setTentativeGuess] = React.useState(initial);

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(tentativeGuess);
    setGuesses(tentativeGuess.guess);
    setTentativeGuess(initial);
  };

  return (
    <form onSubmit={(e) => handelsubmit(e)} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess.guess}
        maxLength={5}
        disabled={disabled}
        pattern=".{5,}"
        required
        onChange={(e) => {
          setTentativeGuess({ guess: e.target.value.toUpperCase() });
        }}
      />
    </form>
  );
}

export default Input;
