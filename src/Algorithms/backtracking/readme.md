- **Backtracking**
  Backtracking is a strategy used to find and compose a solution incrementally.
  We start with a possible movement and We try to solve the problem with the selected movement.
  If not works, we rewind (backtrack) and then select another move, and so on,
  until we have solved the problem. In reason for this behavior, backtracking algorithms
  will try everything the possible moves (or some moves, if the solution is
  found before) to solve a problem.

- **Rat in a maze problem**
  Suppose we have a matrix of size N\*N and that each position in the
  matrix is a block. The position (or block) can be free (value 1) or
  blocked (value 0).
  the “mouse” starts at position [0][0] and go to position [n-1][n-1] (the destination).
  The mouse can move in two directions: vertically or horizontally, to any position that is not blocked.
