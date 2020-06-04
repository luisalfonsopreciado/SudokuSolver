import React, { useState, useEffect } from "react";
import styles from "./Cell.module.css";
import { possible } from "../../utility/solver";

 const Cell = ({ val, row, col, board, setBoard }) => {
  const [value, setValue] = useState(val);
  let classes = [styles.Cell];
  useEffect(() => {

  }, [value, board]);

  if (row === 2 || row === 5) {
    // Right Strong
    classes.push(styles.Bottom);
  }
  if (col === 2 || col === 5) {
    // Bottom Strong
    classes.push(styles.Right);
  }

  if (!possible(board, row, col, value)) {
    classes.push(styles.Error);
  }

  const onChangeHandler = (event) => {
    const boardCopy = [...board];
    boardCopy[row][col] = parseInt(event.target.value);
    setValue(event.target.value);
    setBoard(boardCopy);
  };
  console.log("Cell Rendered")
  return (
    <div className={classes.join(" ")} style={{ margin: "auto" }}>
      <input
        value={value === 0 ? "" : value}
        onChange={(event) => onChangeHandler(event)}
        className={styles.Input}
        maxLength={1}
      ></input>
    </div>
  );
};
const compare = (prevProps, nextProps) => {
  return prevProps.val === nextProps.val;
}

export default React.memo(Cell, compare);
