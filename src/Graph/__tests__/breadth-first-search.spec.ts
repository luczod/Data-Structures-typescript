import { beforeEach, describe, expect, it } from 'vitest';
import { BFS, breadthFirstSearch } from '../Algorithms/breadth-first-search';
import { Graph } from '../graph-class';

describe('Breadth First Search', () => {
  let count: number;
  const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  let graph: Graph<string>;

  beforeEach(() => {
    count = 0;
    graph = new Graph();

    for (let i = 0; i < vertices.length; i++) {
      graph.addVertex(vertices[i]);
    }

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'G');
    graph.addEdge('D', 'G');
    graph.addEdge('D', 'H');
    graph.addEdge('B', 'E');
    graph.addEdge('B', 'F');
    graph.addEdge('E', 'I');
  });

  it('breadthFirstSearch', () => {
    breadthFirstSearch(graph, vertices[0], assertCallback);
  });

  function assertCallback(value: string) {
    expect(value).toEqual(vertices[count]);
    count++;
  }

  it('sorthest path - BFS', () => {
    const shortestPathA = BFS(graph, vertices[0]);

    expect(shortestPathA.distances).toEqual({
      A: 0,
      B: 1,
      C: 1,
      D: 1,
      E: 2,
      F: 2,
      G: 2,
      H: 2,
      I: 3,
    });
    expect(shortestPathA.predecessors).toEqual({
      A: null,
      B: 'A',
      C: 'A',
      D: 'A',
      E: 'B',
      F: 'B',
      G: 'C',
      H: 'D',
      I: 'E',
    });
  });
});
