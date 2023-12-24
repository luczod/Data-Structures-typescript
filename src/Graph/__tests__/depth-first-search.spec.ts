import { beforeEach, describe, expect, it } from 'vitest';
import { DFS, depthFirstSearch } from '../Algorithms/depth-first-search';
import { Graph } from '../graph-class';

describe('Depth First Search', () => {
  let count: number;
  const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  const dfsCallBack = ['A', 'B', 'E', 'I', 'F', 'C', 'D', 'G', 'H'];
  let graph: Graph<string>;

  beforeEach(() => {
    count = 0;
    graph = new Graph(true);
  });

  it('depthFirstSearch', () => {
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

    depthFirstSearch(graph, assertCallback);
  });

  function assertCallback(value: string) {
    expect(value).toEqual(dfsCallBack[count]);
    count++;
  }

  it('topological sort - DFS', () => {
    const myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 0; i < myVertices.length; i++) {
      graph.addVertex(myVertices[i]);
    }
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'D');
    graph.addEdge('B', 'D');
    graph.addEdge('B', 'E');
    graph.addEdge('C', 'F');
    graph.addEdge('F', 'E');

    const result = DFS(graph);

    expect(result.discovery).toEqual({ A: 1, B: 11, C: 2, D: 8, E: 4, F: 3 });
    expect(result.finished).toEqual({ A: 10, B: 12, C: 7, D: 9, E: 5, F: 6 });
    expect(result.predecessors).toEqual({ A: null, B: null, C: 'A', D: 'A', E: 'F', F: 'C' });
  });
});
