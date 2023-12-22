import { BFS, breadthFirstSearch, shortestPath } from './Algorithms/breadth-first-search';
import { Graph } from './graph-class';

const graph = new Graph<string>();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
graph.addVertex(...myVertices);

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
// adjacency list
// console.log(graph.toString());

const printVertex = (value: string) => console.log('Visited vertex: ' + value);
// breadthFirstSearch(graph, myVertices[0], printVertex);

const bstfn = BFS(graph, myVertices[0]);
// console.log(shortestPathA);

const fromVertex = myVertices[0];

shortestPath(fromVertex, myVertices, bstfn);
