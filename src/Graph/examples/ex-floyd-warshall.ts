import { floydWarshall } from '../Algorithms/floyd-warshall';

const INF = Infinity;
/*
array [[]] -> matrix
Adjacency Matrix - 6 vertex
INF means there is no shortest path between the
vertices i and j.
*/
const graph = [
  [INF, 2, 4, INF, INF, INF],
  [INF, INF, 2, 4, 2, INF],
  [INF, INF, INF, INF, 3, INF],
  [INF, INF, INF, INF, INF, 2],
  [INF, INF, INF, 3, INF, 2],
  [INF, INF, INF, INF, INF, INF],
];

console.log('********* Floyd-Warshall Algorithm - All-Pairs Shortest Path ***********');

const distance = floydWarshall(graph);

let str = '';
for (let i = 0; i < distance.length; ++i) {
  str = '';
  for (let j = 0; j < distance.length; ++j) {
    if (distance[i][j] === INF) str += 'INF ';
    else str += distance[i][j] + '   ';
  }
  console.log(str);
}
