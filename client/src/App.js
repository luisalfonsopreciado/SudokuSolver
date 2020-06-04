import React from "react";
import Board from "./components/Board/Board";

function App() {
  console.log("App Rendered")  
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ margin: "auto" }}>Sudoku Solver</h1>
      <hr/>
      <Board></Board>
      
    </div>
  );
}

export default App;
