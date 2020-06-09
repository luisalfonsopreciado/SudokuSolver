import React, { useEffect, Fragment } from "react";
import Cell from "../Cell/Cell";
import styles from "./Board.module.css";
import Controls from "../Controls/Controls";
import { solve, possible, clone, generateSudoku } from "../../utility/index";
import { useBoard } from "../../hooks/index";

const Board = () => {
  const [board, setBoard, changeBoard, resetBoard] = useBoard();

  useEffect(() => {
    console.log("[Board] useEffect");
  }, [board]);

  const solver = async () => {
    const newBoard = [...board];
    await solve(newBoard);
    setBoard(newBoard);
  };

  const solveOne = async () => {
    console.log("Board:", board);
    const anotherBoard = clone(board);
    const newBoard = board;
    await solve(newBoard);
    console.log("newBoard:", newBoard);
    console.log("anotherBoard:", anotherBoard);
    for (let row = 0; row < anotherBoard.length; row++) {
      for (let col = 0; col < anotherBoard[row].length; col++) {
        if (anotherBoard[row][col] === 0) {
          // console.log("anotherboard",anotherBoard)
          return changeBoard(row,col,newBoard[row][col])
          // anotherBoard[row][col] = newBoard[row][col];
          // return setBoard(anotherBoard);
        }
      }
    }
  };

  const random = async () => {
    const newBoard = await generateSudoku();
    setBoard(newBoard);
  };
  // console.log("[Board] Rendering");
  // console.log(board);

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
    <Fragment>
      <Controls
        random={random}
        reset={resetBoard}
        solver={solver}
        solveOne={solveOne}
      />
      <div className={styles.Board}>{Board}</div>
    </Fragment>
  );
};

export default Board;
