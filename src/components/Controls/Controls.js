import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import styles from "./Controls.module.css";

const StyledButton = withStyles({
  root: {
    margin: "auto",
  },
})(Button);

const Controls = ({ solver, reset, random, solveOne }) => {
  return (
    <div className={styles.Controls}>
      <StyledButton variant="contained" color="primary" onClick={solver}>
        Solve
      </StyledButton>
      <StyledButton variant="contained" color="primary" onClick={solveOne}>
        Solve One
      </StyledButton>
      <StyledButton variant="contained" color="secondary" onClick={reset}>
        Clear
      </StyledButton>
      <StyledButton variant="contained" onClick={random}>
        New Puzzle
      </StyledButton>
    </div>
  );
};

export default React.memo(Controls, () => true);
