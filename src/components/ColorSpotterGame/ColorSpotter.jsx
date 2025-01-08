import React, { useEffect, useState } from "react";
import "./spotter.css";

function generateRandomColor() {
  const hexDigit = "12345667890ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexDigit[Math.floor(Math.random() * hexDigit.length)];
  }

  return color;
}

function randomValue(size) {
  return Math.floor(Math.random() * size);
}
const ColorSpotter = () => {
  const [gridSize, setGridSize] = useState(30);
  const [grid, setGrid] = useState([[]]);
  const [color, setColor] = useState(generateRandomColor());
  const [score, seScore] = useState(0);

  useEffect(() => {
    let board = Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => null)
    );
    let i = randomValue(gridSize);
    let j = randomValue(gridSize);

    board[i][j] = "X";

    setGrid(board);
  }, [gridSize]);
  return (
    <div>
      {/* show the score */}
      <div>
        <h4>Total Score {score} </h4>
      </div>

      {/* show the grid */}
      <Board grid={grid} color={color} size={gridSize} />
    </div>
  );
};

export default ColorSpotter;

function Board({ grid, size, color, width = 400 }) {
  // const styles = {
  //   gridTemplateColumns: repeat(size, "1fr"),
  //   gridTemplateRows: repeat(size, "1fr"),
  // };
  const gridSize = width / size;
  console.log(gridSize);
  return (
    <div
      className="board-wrapper"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${size}, ${gridSize}px)`,
        gridTemplateRows: `repeat(${size}, ${gridSize}px)`,
      }}
    >
      {grid.map((row, rowIdx) => (
        row.map((col, colIdx) => (
          <div
            key={`${rowIdx}-${colIdx}`} // Adding a unique key
            className="board-cell"
            style={{
              backgroundColor: color,
              width: `${gridSize}px`,
              height: `${gridSize}px`,
              opacity: col === 'X' ? 0.8 : 1,
            }}
          />
        ))
      ))}
    </div>
  );
}
