import React from "react";
import "./wrapper.css";

const Wrapper = ({ size, board, handleClick }) => {
  return (
    <div>
      {board.map((rows, rowIndex) => (
        <div key={rowIndex} className="wrapper">
          {rows.map((col, colIndex) => (
            <button disabled={col} key={rowIndex + colIndex} onClick={() => handleClick(rowIndex, colIndex)} className="cell">
              {board[rowIndex][colIndex]}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Wrapper;
