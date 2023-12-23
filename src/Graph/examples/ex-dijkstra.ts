import { dijkstra } from '../Algorithms/dijkstra';

/*
 array [[]] -> matrix

 Adjacency Matrix
 the entries graph[i][j] of Matrix graph contain their weight
 if vertex(i) and vertex(j) are adjacent and 0 otherwise (NOT adjacent).
*/
const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];

console.log("********* Dijkstra's Algorithm - Shortest Path ***********");

const dist = dijkstra(graph, 0);

for (let i = 0; i < dist.length; i++) {
  console.log(i + '\t' + dist[i]);
}
