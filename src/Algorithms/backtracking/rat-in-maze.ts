export function ratInAMaze(maze: Array<number[]>): number[][] | string {
  const solution: Array<number[]> = [];

  for (let i = 0; i < maze.length; i++) {
    solution[i] = []; // empty matrix

    for (let j = 0; j < maze[i].length; j++) {
      solution[i][j] = 0; // Initialize all positions with zero
    }
  }
  // search in the real maze matrix
  if (findPath(maze, 0, 0, solution)) {
    return solution;
  } else {
    return 'NO PATH FOUND';
  }
}
// matrix[i][j] -> one positon
function findPath(maze: Array<number[]>, row: number, col: number, solution: Array<number[]>) {
  const n = maze.length;
  // last position, destination
  if (row === n - 1 && col === n - 1) {
    solution[row][col] = 1;
    return true;
  }

  if (isSafe(maze, row, col)) {
    solution[row][col] = 1; // the rat walked

    if (findPath(maze, row + 1, col, solution)) {
      // i + 1, go to bottom
      return true;
    }

    if (findPath(maze, row, col + 1, solution)) {
      // i + 1, go to right
      return true;
    }
    // If we cannot move horizontally nor vertically,
    // we remove the movement from the path and move backwards
    solution[row][col] = 0;
    return false;
  }
  // goes to the next stack
  return false;
}

function isSafe(maze: Array<number[]>, i: number, j: number): boolean {
  const n = maze.length;
  // i >= 0 && j >= 0 : is positive
  // i < n && j < n : is less then length
  // maze[i][j] !== 0 : is not blocked
  if (i >= 0 && j >= 0 && i < n && j < n && maze[i][j] !== 0) {
    return true;
  }
  return false;
}
