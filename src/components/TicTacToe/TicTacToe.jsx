import React, { useState } from "react";
import Wrapper from "./Wrapper";
import "./index.css";
import checkWinner from "../../utils/winner";

const TicTacToe = ({ size = 3 }) => {
  const [board, setBoard] = useState(
    Array.from({ length: size }, () => Array.from({ length: size }, () => null))
  );
  const [isXTurn, setIsXTurn] = useState(false);

  const winner = checkWinner(board, size);
  const status = winner ?  `Player ${winner} Wins!!`: isXTurn ? "Player X turn" : "Player O turns";


  function handleClick(rowIdx, colIdx) {
    if(board[rowIdx][colIdx] || winner) return;
    
    let newBoard = JSON.parse(JSON.stringify(board));
    newBoard[rowIdx][colIdx] = isXTurn ? "X": "O";

    if(checkWinner(board, size)) {
        console.log(winner);
    }

    setBoard(newBoard);

    setIsXTurn(prev => !prev);
  }


  function handleReset() {
    let newArray = Array.from({ length: size }, () => Array.from({ length: size }, () => null));
    setBoard(newArray);
    setIsXTurn(false);
  }
  return (
    <div className="container">
      <div style={{ marginBottom: "80px" }}>
        <Wrapper size={3} board={board} handleClick={handleClick} />
      </div>
      <div style={{ marginBottom: "20px" }}>{winner === "draw" ? "draw" : status}</div>
      <button onClick={handleReset} className="button">Reset</button>
    </div>
  );
};

export default TicTacToe;
