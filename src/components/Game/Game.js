import React, { useState } from "react";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import Input from "../Input";
import Result from "../Result";

import { checkGuess } from "../../game-helpers";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");

  const handleAddingGuses = (tentativeGuess) => {
    const newGuesses = [
      ...guesses,
      {
        word: tentativeGuess,
        id: Math.random(),
        letters: checkGuess(tentativeGuess, answer),
      },
    ];
    setGuesses(newGuesses);

    if (tentativeGuess === answer) {
      setGameStatus("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <Result guesses={guesses} />
      <Input
        disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED}
        setGuesses={handleAddingGuses}
      />
      {gameStatus != "running" ? (
        <GameOverBanner
          guesses={guesses}
          answer={answer}
          gameStatus={gameStatus}
        />
      ) : null}
    </>
  );
}

export default Game;
