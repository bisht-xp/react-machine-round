import React, { useEffect, useState } from "react";
import "./index.css";
function Wordle() {
  const [word, setWord] = useState("hater");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    const handleEnter = () => {
      if (currentGuess.length < 5) {
        return;
      }
      const index = guesses.findIndex((val) => val === null);
      setGuesses(
        guesses.map((guess, i) => (i === index ? currentGuess : guess))
      );
      setCurrentGuess("");
    };
    const handleType = (event) => {
      if (event.key === "Enter") {
        handleEnter();
      }

      if (event.key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      }

      if (/^[a-zA-Z]$/.test(event.key)) {
        if (currentGuess.length < 5) {
          setCurrentGuess(currentGuess + event.key);
        }
      }
    };

    window.addEventListener("keydown", handleType);

    return () => {
      window.removeEventListener("keydown", handleType);
    };
  }, [currentGuess, guesses]);

  return (
    <div className="board">
      {guesses.map((guess, i) => {
        const isCurrentGuess = i === guesses.findIndex((val) => val == null);
        return (
          <RowInput
            key={i}
            guess={isCurrentGuess ? currentGuess : guess ?? ""}
            isFinal={!isCurrentGuess && guess !== null}
            word={word}
          />
        );
      })}
    </div>
  );
}

function RowInput({ guess, isFinal, word }) {
  const tiles = [];
  for (let i = 0; i < 5; i++) {
    let className = "tiles";
    const char = guess[i];
    if (isFinal) {
      if (char === word[i]) {
        className += " correct";
      } else if (word.includes(char)) {
        className += " elseWhere";
      } else {
        className += " notCorrect";
      }
    }
    tiles.push(
      <div key={i} className={className}>
        {char}
      </div>
    );
  }

  return <div className={`row-input`}>{tiles}</div>;
}

export default Wordle;
