let solutionFound = false;
let sol = []
let numSolutions = 0;
const solve = async (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 0) {
        for (let i = 1; i < 10; i++) {
          if (possible(board, row, col, i)) {
            board[row][col] = i;
            await solve(board);
            board[row][col] = 0;
          }
        }
        return;
      }
    }
  }
  ++numSolutions;
  sol = board;
  console.log(board)
  return;
};

const possible = (board, row, col, num) => {
  num = parseInt(num);
  if (isNaN(num) || num <= 0 || num > 9) {
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

const test = async() => {
  let arr = [
    [3, 4, 2, 6, 7, 8, 5, 1, 9],
    [6, 7, 1, 2, 9, 5, 4, 3, 8],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [2, 6, 5, 0, 0, 0, 0, 8, 0],
    [1, 3, 7, 4, 8, 2, 6, 9, 5],
    [9, 8, 4, 5, 1, 6, 3, 2, 7],
  ];
  await solve(arr);
  console.log(numSolutions);
};
test();

const someFunction = (arr) => {
  arr[0][0] = 0;
};
const tester = () => {
  let arr = [
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ];
  someFunction(arr);
  console.log(arr);
};
