import React from "react";
import styles from "./Cell.module.css";
import { possible } from "../../utility/solver";

const Cell = ({ val, row, col, board, setBoard }) => {
  let classes = [styles.Cell];

  if (row === 2 || row === 5) {
    // Right Strong
    classes.push(styles.Bottom);
  }
  if (col === 2 || col === 5) {
    // Bottom Strong
    classes.push(styles.Right);
  }

  if (!possible(board, row, col, val)) {
    classes.push(styles.Error);
  }

  const onChangeHandler = (event) => {
    const boardCopy = [...board];
    if (isNaN(event.target.value) || event.target.value === "") {
      boardCopy[row][col] = 0;
    } else {
      boardCopy[row][col] = parseInt(event.target.value);
    }
    setBoard(boardCopy);
  };
  console.log("Cell Rendered");
  return (
    <div className={classes.join(" ")} style={{ margin: "auto" }}>
      <input
        value={val === 0 ? "" : val}
        onChange={(event) => onChangeHandler(event)}
        className={styles.Input}
        maxLength={1}
      />
    </div>
  );
};

const compare = (prevProps, nextProps) => {
  return prevProps.val === nextProps.val;
};

export default React.memo(Cell, compare);
