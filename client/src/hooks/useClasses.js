export const useClasses = (row, col, possible, styles) => {
  let classes = [styles.Cell];
  if (row === 2 || row === 5) {
    // Right Strong
    classes.push(styles.Bottom);
  }
  if (col === 2 || col === 5) {
    // Bottom Strong
    classes.push(styles.Right);
  }

  if (!possible) {
    classes.push(styles.Error);
  }

  return [classes];
};
