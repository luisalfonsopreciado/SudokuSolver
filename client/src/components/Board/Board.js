import React, {  useEffect } from "react";
import Cell from "../Cell/Cell";
import styles from "./Board.module.css";
import Controls from "../Controls/Controls";
import { solve, newBoard, possible } from "../../utility/utility";
import {useBoard } from "../../hooks/index"

const Board = () => {
  const [board, setBoard ,changeBoard, resetBoard] = useBoard()

  useEffect(() => {
    console.log("[Board] useEffect")
  }, [board]);

  const solver = () => {
    console.log("[Board] solver() board before copy", board)
    const copy = newBoard();
    console.log("[Board] solver() empty board copy", copy)
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        copy[row][col] = board[row][col];
      }
    } // Deep copy of the array
    console.log("[Board] solver() after copying board: ", copy);
    solve(copy);
    setBoard(copy);
  };

  const random = () => {};
  console.log("[Board] Rendering")
  console.log(board)

  let Board = null;
  if (board) {
    Board = board.map((row, rowNum) => {
      return row.map((val, colNum) => {
        return (
          <Cell
            val={val}
            key={[rowNum, colNum]}
            col={colNum}
            row={rowNum}
            board={board}
            changeBoard={changeBoard}
            possible={possible(board, rowNum, colNum, val)}
          />
        );
      });
    });
  }

  return (
    <>
      <div className={styles.Board}>{Board}</div>
      <Controls random={random} reset={resetBoard} solver={solver} />
    </>
  );
};

export default Board
