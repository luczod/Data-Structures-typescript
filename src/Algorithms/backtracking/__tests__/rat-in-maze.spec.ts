import { describe, expect, it } from 'vitest';
import { ratInAMaze } from '../rat-in-maze';

describe('Rat in a maze', () => {
  it('rat in a maze solver', () => {
    const maze = [
      [1, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
      [0, 1, 1, 1],
    ];

    const solution = [
      [1, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 1],
    ];

    expect(ratInAMaze(maze)).toEqual(solution);
  });
});
