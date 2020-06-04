import React from "react";
import Board from "./components/Board/Board";

function App() {
  console.log("App Rendered")
  const newBoard = () => {
    const array = new Array(9);
    for (let i = 0; i < array.length; i++) {
      array[i] = new Array(9);
      for (let j = 0; j < 9; j++) {
        array[i][j] = 0;
      }
    }
    return array;
  };

  
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ margin: "auto" }}>Sudoku Solver</h1>
      <Board array={newBoard()}></Board>
      <hr></hr>
    </div>
  );
}

export default App;
