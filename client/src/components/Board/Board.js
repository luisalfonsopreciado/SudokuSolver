import React, { useState, useEffect } from "react";
import Cell from "../Cell/Cell";
import styles from "./Board.module.css";
import Controls from "../Controls/Controls";
import { solve } from "../../utility/solver";

export default () => {
  const [board, setBoard] = useState([[]]);
  const [test, setTest] = useState("initial");
  useEffect(() => {
    const newBoard = () => {
      const array = new Array(9);
      for (let i = 0; i < array.length; i++) {
        array[i] = new Array(9);
        for (let j = 0; j < 9; j++) {
          array[i][j] = 1;
        }
      }

      return array;
    };
    setBoard(newBoard);
    console.log("[Board] UseEffect");
  }, []);

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

  const random = () => {
    // const copy = [...board];
    // for (let i = 0; i < copy.length; i++) {
    //   for (let j = 0; j < 9; j++) {
    //     const num = Math.floor(Math.random * 9);
    //     console.log(num);
    //     if (possible(board, i, j, num)) {
    //       copy[i][j] = num;
    //     } else {
    //       copy[i][j] = 0;
    //     }
    //   }
    // }
    setTest("XXX");
  };
  return (
    <>
      <div className={styles.Board}>
        {board.map((row, rowNum) => {
          console.log(row);
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
      <p>{test}</p>
      <Controls random={random} reset={reset} solver={solver} />
    </>
  );
};
