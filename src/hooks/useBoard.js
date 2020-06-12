import { useState } from "react";
import { TEST_BOARD } from "../utility/index";

export const useBoard = () => {
  const [board, setBoard] = useState(() => TEST_BOARD);

  const changeBoard = (row, col, newValue) => {
    const newBoard = [...board];
    newBoard[row][col] = newValue;
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
