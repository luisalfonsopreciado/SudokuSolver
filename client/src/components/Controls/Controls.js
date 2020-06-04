import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import styles from "./Controls.module.css";

const Controls = ({ solver, reset, random }) => {
  useEffect(() => {
    console.log("Controls usEffect");
  });

  return (
    <div className={styles.Controls}>
      <Button variant="contained" color="primary" onClick={solver}>
        Solve
      </Button>
      <Button variant="contained" color="secondary" onClick={reset}>
        Reset
      </Button>
      <Button variant="contained" onClick={random}>
        Random
      </Button>
    </div>
  );
};


export default React.memo(Controls, () => true);
