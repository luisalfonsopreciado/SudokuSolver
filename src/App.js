import React, { useState, useEffect } from "react";
import Board from "./components/Board/Board";
import { withStyles, Paper, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { CustomDialog } from "./components/UI/CustomDialog/CustomDialog";

const StyledButton = withStyles({
  root: {
    margin: "auto",
  },
})(Button);

const useStyles = makeStyles({
  paper: {
    padding: "10px",
  },
  customDialog: {
    display: "flex",
    flexDirection: "Column",
  },
});

const App = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState("");
  const [displayRules, setDisplayRules] = useState("");
  useEffect(() => {
    handleDialogOpen();
  }, []);
  const handleDisplayRules = () => {
    setDisplayRules(true);
  };
  const handleHideRules = () => {
    setDisplayRules(false);
  };
  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <h1 className="Title">Sudoku Solver</h1>
      <br />
      <Board />
      <div className="BottomControls">
        <StyledButton
          variant="contained"
          color="primary"
          onClick={handleDialogOpen}
        >
          Help
        </StyledButton>
      </div>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        className={classes.customDialog}
        howToPlay={handleDisplayRules}
      >
        <h2 style={{ textAlign: "center" }}>Welcome to the Sudoku Solver!</h2>
        <Paper className={classes.paper}>
          <p>
            <strong>To get Started, click on New Puzzle</strong>
          </p>
          <strong>Get Stuck?</strong>
          <p>Get a hint by pressing Solve One</p>
          <strong>Give Up?</strong>
          <p>Press Solve to view the puzzle solution</p>
          <p>Press Clear to start from scratch</p>
        </Paper>
      </CustomDialog>
      <CustomDialog
        isOpen={displayRules}
        handleClose={handleHideRules}
        className={classes.customDialog}
      >
        <h2 style={{ textAlign: "center" }}>How to Play Sudoku</h2>
        <Paper className={classes.paper}>
          <p>
            <strong>Board Setup:</strong>
          </p>
          <p>
            The classic Sudoku game involves a grid of 81 squares. The grid is
            divided into nine blocks, each containing nine squares.
          </p>
          <p>
            <strong>The rules of the game are simple:</strong>
          </p>
          <p>
            Each of the nine blocks has to contain all the numbers 1-9 within
            its squares. Each number can only appear once in a row, column or
            box.
          </p>
        </Paper>
      </CustomDialog>
    </div>
  );
};

export default App;
