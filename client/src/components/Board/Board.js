import React, { useEffect, Fragment } from "react";
import Cell from "../Cell/Cell";
import styles from "./Board.module.css";
import Controls from "../Controls/Controls";
import { solve, possible, solveNext, test } from "../../utility/utility";
import { useBoard } from "../../hooks/index";

const Board = () => {
  const [board, setBoard, changeBoard, resetBoard] = useBoard();
  
  useEffect(() => {
    console.log("[Board] useEffect");
  }, [board]);

  const solver = async () => {
    console.log("[Board] solver() board before copy", board);
    const newBoard = [...board];
    await test(newBoard)
    // await solve(newBoard);
    console.log(newBoard)
    setBoard(newBoard);
   
  };

  const solveOne = async() => {
    await solveNext([...board], changeBoard);
  
  };

  const random = () => {};
  console.log("[Board] Rendering");
  console.log(board);

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
