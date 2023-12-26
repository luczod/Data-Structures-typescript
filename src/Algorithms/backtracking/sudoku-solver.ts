const EMPTY = 0;

export function sudokuSolver(matrix: Array<number[]>): number[][] | string {
  if (solveSudoku(matrix)) {
    return matrix;
  } else {
    return 'NO SOLUTION EXISTS!';
  }
}

function solveSudoku(grid: Array<number[]>) {
  let row = 0;
  let col = 0;
  let checkBlankSpaces = false;

  for (row = 0; row < grid.length; row++) {
    for (col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === EMPTY) {
        checkBlankSpaces = true;
        break;
      }
    }

    if (checkBlankSpaces === true) {
      break;
    }
  }

  if (checkBlankSpaces === false) {
    return true;
  }
  // the position of the blank space that must be filled
  for (let num = 1; num <= 9; num++) {
    // If safe, add the digit(1-9) in position
    if (isSafe(grid, row, col, num)) {
      grid[row][col] = num;
      // recursion
      if (solveSudoku(grid)) {
        return true;
      }

      grid[row][col] = EMPTY;
    }
  }

  return false;
}

function usedInRow(grid: Array<number[]>, row: number, num: number) {
  // iterating through all array positions in the specified ROW
  for (let col = 0; col < grid.length; col++) {
    if (grid[row][col] === num) {
      return true;
    }
  }

  return false;
}

function usedInCol(grid: Array<number[]>, col: number, num: number) {
  // iterating through all array positions in the specified COL
  for (let row = 0; row < grid.length; row++) {
    if (grid[row][col] === num) {
      return true;
    }
  }

  return false;
}

function usedInBox(grid: Array<number[]>, boxStartRow: number, boxStartCol: number, num: number) {
  // iterating through all positions of the submatrix 3x3 (matrix 9x9)
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (grid[row + boxStartRow][col + boxStartCol] === num) {
        return true;
      }
    }
  }

  return false;
}

function isSafe(grid: Array<number[]>, row: number, col: number, num: number) {
  // all must be false to return true
  return (
    !usedInRow(grid, row, num) &&
    !usedInCol(grid, col, num) &&
    !usedInBox(grid, row - (row % 3), col - (col % 3), num)
  );
}
