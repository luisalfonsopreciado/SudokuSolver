import React, { Fragment } from "react";
import Cell from "../Cell/Cell";
import styles from "./Board.module.css";
import Controls from "../Controls/Controls";
import { solve, possible, clone, generateSudoku } from "../../utility/index";
import { useBoard } from "../../hooks/index";

const Board = () => {
  const [board, setBoard, changeBoard, resetBoard] = useBoard();

  const solver = async () => {
    const newBoard = [...board];
    await solve(newBoard);
    setBoard(newBoard);
  };

  const solveOne = async () => {
    
    let Row = 0;
    let Col = 0;

    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === 0) {
          Row = row;
          Col = col;
          break;
        }
      }
    }
    const anotherBoard = clone(board);
    await solve(anotherBoard);
    changeBoard(Row,Col,anotherBoard[Row][Col])
    
  };

  const random = async () => {
    resetBoard();
    const newBoard = await generateSudoku([...board]);
    setBoard(newBoard);
  };

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
