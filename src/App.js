import React from "react";
import Board from "./components/Board/Board";

function App() {
  console.log("App Rendered")  
  return (
    <div className="App">
      <h1 className="Title">Sudoku Solver</h1>
      <br/>
      <Board></Board>
      
    </div>
  );
}

export default App;
