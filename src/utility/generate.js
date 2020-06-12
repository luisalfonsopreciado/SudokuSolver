import { solve, possible } from "./solver";

export const generateSudoku = async (board) => {
  const { randRow, randCol } = randomCoords();
  board[randRow][randCol] = Math.round(Math.random() * 8) + 1;

  await solve(board);

  let onlyOneSolution = true;

  while (onlyOneSolution) {
    const { randRow, randCol } = randomCoords();

    const oldNum = board[randRow][randCol];

    board[randRow][randCol] = 0;

    const count = [0];

    await numSols(board, count);

    onlyOneSolution = count[0] === 1;

    if (!onlyOneSolution) {
      board[randRow][randCol] = oldNum;
    }
  }
  return board;
};

const randomCoords = () => {
  const randRow = Math.round(Math.random() * 8);
  const randCol = Math.round(Math.random() * 8);
  return { randRow, randCol };
};

export const numSols = async (board, count) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 0) {
        for (let i = 1; i < 10; i++) {
          if (possible(board, row, col, i)) {
            board[row][col] = i;
            await numSols(board, count);
            board[row][col] = 0;
          }
        }
        return;
      }
    }
  }
  count[0] += 1;
  return;
};
