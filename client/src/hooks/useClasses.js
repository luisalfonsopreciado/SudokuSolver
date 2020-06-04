import { possible } from "../utility/solver";


export const useClasses = (classes, row, col, val, board, styles) => {
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
  
    return [classes]
  }