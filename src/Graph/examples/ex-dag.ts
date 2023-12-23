import { DFS } from '../Algorithms/depth-first-search';
import { Graph } from '../graph-class';

// Directed Acyclic Graph (DAG)
const graph = new Graph<string>(true); // grafo direcionado
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
graph.addVertex(...myVertices);

graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');
const result = DFS(graph);
const fTimes = result.finished;
console.log(fTimes);
let str = '';
for (let count = 0; count < myVertices.length; count++) {
  let max = 0;
  let maxName = null;

  for (let i = 0; i < myVertices.length; i++) {
    if (fTimes[myVertices[i]] > max) {
      max = fTimes[myVertices[i]];
      maxName = myVertices[i];
    }
  }

  str += ' - ' + maxName;
  delete fTimes[maxName];
}
console.log(str.slice(3));
