/*
  Prim's algorithm is a greedy algorithm, which solves a
  Minimum Spanning Tree (MST) problem for
  an undirected connected graph with weight.
*/

const INF = Number.MAX_SAFE_INTEGER;

const minKey = (graph: number[][], key: number[], visited: boolean[]) => {
  // Initialize min value
  let min = INF;
  let minIndex = 0;

  for (let v = 0; v < graph.length; v++) {
    if (visited[v] === false && key[v] < min) {
      min = key[v];
      minIndex = v;
    }
  }

  return minIndex;
};

export function prim(graph: number[][]): number[] {
  const parent: number[] = [];
  const key: number[] = [];
  const visited: boolean[] = [];
  const { length } = graph;
  // Initialize all vertices
  for (let i = 0; i < length; i++) {
    key[i] = INF;
    visited[i] = false;
  }

  key[0] = 0; // first vertex
  parent[0] = -1;

  for (let i = 0; i < length - 1; i++) {
    const u = minKey(graph, key, visited);
    visited[u] = true;

    for (let v = 0; v < length; v++) {
      if (graph[u][v] && visited[v] === false && graph[u][v] < key[v]) {
        // the parents array, WHICH stores the MST
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }

  return parent;
}
