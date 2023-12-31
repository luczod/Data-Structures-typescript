import { describe, expect, it } from 'vitest';
import { dijkstra } from '../Algorithms/dijkstra';

describe("Dijkstra's Algorithm - Shortest Path", () => {
  it('Shortest Path', () => {
    const graph = [
      [0, 2, 4, 0, 0, 0],
      [0, 0, 2, 4, 2, 0],
      [0, 0, 0, 0, 3, 0],
      [0, 0, 0, 0, 0, 2],
      [0, 0, 0, 3, 0, 2],
      [0, 0, 0, 0, 0, 0],
    ];

    expect(dijkstra(graph, 0)).toEqual([0, 2, 4, 6, 4, 6]);
  });
});
