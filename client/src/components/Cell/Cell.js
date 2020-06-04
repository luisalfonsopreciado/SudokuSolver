import React from "react";
import styles from "./Cell.module.css";
import { useClasses } from "../../hooks/index";

const Cell = ({ val, row, col, board, changeBoard }) => {
  const [classes] = useClasses([styles.Cell], row, col, val, board, styles);

  const onChangeHandler = (event) => {
    const num = parseInt(event.target.value);
    const invalidNum = isNaN(num);
    changeBoard(row, col, !invalidNum ? num : 0);
  };

  console.log("Cell Rendered");
  return (
    <div className={classes.join(" ")}>
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
