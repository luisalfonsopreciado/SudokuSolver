let isSolved = false;
export const clone = (board) => {
  const clone = [];
  for (var i = 0; i < board.length; i++)
    clone[i] = board[i].slice();
  return clone;
}
export const solve = async (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 0) {
        isSolved = false;
        for (let i = 1; i < 10; i++) {
          if (possible(board, row, col, i)) {
            board[row][col] = i;
            await solve(board);
            if (!isSolved) {
              board[row][col] = 0;
            }
          }
        }
        return;
      }
    }
  }
  isSolved = true;
  return;
};


export const possible = (board, row, col, num) => {
  if (num === "") return true;
  num = parseInt(num);
  if (num === 0) return true;
  if (isNaN(num) || num < 0 || num > 9) {
    return false;
  }
  // check row
  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] === num && col !== i) return false;
  }
  // check the column
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] === num && row !== i) return false;
  }
  let startRow = startPosition(board, row);
  let startCol = startPosition(board, col);

  for (let i = startRow[0]; i <= startRow[1]; i++) {
    for (let j = startCol[0]; j <= startCol[1]; j++) {
      if (board[i][j] === num && (i !== row || j !== col)) return false;
    }
  }
  return true;
};

const startPosition = (board, m) => {
  let startEnd = [0, 2];
  const boardLength = board.length;
  if (m >= boardLength / 3 && m <= (boardLength / 3) * 2) {
    startEnd[0] = boardLength / 3;
    startEnd[1] = (boardLength / 3) * 2 - 1;
  }
  if (m >= (boardLength / 3) * 2) {
    startEnd[0] = (boardLength / 3) * 2;
    startEnd[1] = boardLength - 1;
  }
  return startEnd;
};
