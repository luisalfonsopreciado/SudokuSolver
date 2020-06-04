import React, { useState, useEffect } from "react";
import Cell from "../Cell/Cell";
import styles from "./Board.module.css";
import Controls from "../Controls/Controls";
import { solve } from "../../utility/solver";

export default ({ array }) => {
  const [board, setBoard] = useState(array);

  useEffect(() => {
    console.log("[Board] UseEffect");
  }, [board]);

  const solver = () => {
    solve(board);
    //  console.log(newBoard);
    //  setBoard(newBoard);
  };
  const reset = () => {
    console.log("reset called");
    const array = new Array(9);
    for (let i = 0; i < array.length; i++) {
      array[i] = new Array(9);
      for (let j = 0; j < 9; j++) {
        array[i][j] = 0;
      }
    }
    setBoard(array);
  };

  const random = () => {};
  return (
    <>
      <div className={styles.Board}>
        {board.map((row, rowNum) => {
          return row.map((val, colNum) => {
            return (
              <Cell
                val={val}
                key={[rowNum, colNum]}
                col={colNum}
                row={rowNum}
                board={board}
                setBoard={setBoard}
              />
            );
          });
        })}
      </div>
      <Controls random={random} reset={reset} solver={solver} />
    </>
  );
};
