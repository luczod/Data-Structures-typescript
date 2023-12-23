import { kruskal } from '../Algorithms/kruskal';

/*
 array [[]] -> matrixAdjacency Matrix
 the entries graph[i][j] of Matrix graph contain their weight
 if vertex(i) and vertex(j) are adjacent and 0 otherwise (NOT adjacent).
*/
const graph = [
  [0, 2, 4, 0, 0, 0],
  [2, 0, 2, 4, 2, 0],
  [4, 2, 0, 0, 3, 0],
  [0, 4, 0, 0, 3, 2],
  [0, 2, 3, 3, 0, 2],
  [0, 0, 0, 2, 2, 0],
];

console.log('********* Kruskal Algorithm - Minimum Spanning Tree ***********');

const parent = kruskal(graph);

console.log('Edge   Weight');
for (let i = 1; i < graph.length; i++) {
  console.log(parent[i] + ' - ' + i + '\t' + graph[i][parent[i]]);
}
