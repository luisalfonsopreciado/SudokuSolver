export const newBoard = () => {
  const array = [];
  for (let i = 0; i < 9; i++) {
    array[i] = [];
    for (let j = 0; j < 9; j++) {
      array[i][j] = 0;
    }
  }
  console.log("[constants] newBoard() result:", array);
  return array;
};

export const TEST_BOARD = [
  [7, 0, 9, 0, 0, 2, 6, 8, 0],
  [0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 0, 2, 0, 5, 0, 7, 0, 4],
  [1, 9, 0, 0, 0, 7, 0, 6, 0],
  [8, 6, 7, 1, 9, 5, 0, 4, 0],
  [5, 0, 4, 0, 0, 0, 0, 9, 0],
  [4, 3, 5, 7, 8, 0, 0, 2, 0],
  [0, 0, 6, 4, 0, 0, 0, 0, 1],
  [9, 8, 0, 5, 0, 6, 0, 0, 3],
];
