/*
Similar to Prim's algorithm, Kruskal's algorithm
is also a greedy algorithm, which finds the MST for a graph
connected, not directed with weight.
*/

const INF = Number.MAX_SAFE_INTEGER;

const find = (i: number, parent: number[]) => {
  while (parent[i]) {
    i = parent[i];
  }

  return i;
};

const union = (i: number, j: number, parent: number[]) => {
  if (i !== j) {
    parent[j] = i;
    return true;
  }

  return false;
};

const initializeCost = (graph: number[][]) => {
  const cost: number[][] = [];
  const { length } = graph;

  for (let i = 0; i < length; i++) {
    cost[i] = [];
    for (let j = 0; j < length; j++) {
      if (graph[i][j] === 0) {
        cost[i][j] = INF;
      } else {
        cost[i][j] = graph[i][j];
      }
    }
  }

  return cost;
};

export function kruskal(graph: number[][]): number[] {
  const length = graph.length;
  const parent: number[] = []; // MST
  let ne = 0;
  let a: number;
  let b: number;
  let u: number;
  let v: number;
  // copy original graph
  const cost = initializeCost(graph);

  while (ne < length - 1) {
    // finds the edge with the minimum cost.
    for (let i = 0, min = INF; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (cost[i][j] < min) {
          min = cost[i][j];
          a = u = i;
          b = v = j;
        }
      }
    }
    // checks if the edge is already in MST
    u = find(u, parent);
    v = find(v, parent);
    // if the edges u and v are not equal, add it to the MST.
    if (union(u, v, parent)) {
      ne++;
    }
    // removes edges from the list. Avoid calculation twice.
    cost[a][b] = cost[b][a] = INF;
  }

  return parent;
}
