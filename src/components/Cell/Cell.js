import React from "react";
import styles from "./Cell.module.css";
import { useClasses } from "../../hooks/index";

const Cell = ({ val, row, col, changeBoard, possible, readOnly }) => {
  const [classes] = useClasses(row, col, possible, styles);

  const onChangeHandler = (event) => {
    const num = parseInt(event.target.value);
    const invalidNum = isNaN(num);
    changeBoard(row, col, invalidNum ? 0 : num);
  };

  return (
    <div className={classes.join(" ")}>
      <input
        value={val === 0 ? "" : val}
        onChange={(event) => onChangeHandler(event)}
        className={styles.Input}
        maxLength={1}
        {...readOnly}
      />
    </div>
  );
};

export default Cell;
