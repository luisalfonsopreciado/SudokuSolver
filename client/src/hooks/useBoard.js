import { useState } from "react";
import { TEST_BOARD, newBoard } from "../utility/utility";

export const useBoard = () => {
  const [board, setBoard] = useState(() => TEST_BOARD);

  const changeBoard = (row, col, newValue) => {
    const newBoard = [...board];
    console.log("useBoard oldBoard:", board);
    newBoard[row][col] = newValue;
    console.log("useBoard newBoard", newBoard);
    setBoard(newBoard);
  };

  const resetBoard = () => {
    const newBoard = [...board];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        newBoard[i][j] = 0;
      }
    }
    setBoard(newBoard);
  };

  return [board, setBoard, changeBoard, resetBoard];
};
