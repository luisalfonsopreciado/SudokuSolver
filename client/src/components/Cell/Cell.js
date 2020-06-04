import React from "react";
import styles from "./Cell.module.css";
import { useClasses } from "../../hooks/index";

const Cell = ({ val, row, col, changeBoard, possible }) => {
  const [classes] = useClasses(row, col, possible, styles);

  const onChangeHandler = (event) => {
    const num = parseInt(event.target.value);
    const invalidNum = isNaN(num);
    changeBoard(row, col, invalidNum ? 0 : num);
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
  return (
    prevProps.val === nextProps.val && prevProps.possible === nextProps.possible
  );
};

export default React.memo(Cell, compare);
