import Dictionary from '../../Dictionary-Hash/dictionary/dictionary-class';
import { Queue } from '../../Queues-Deques/Queue/queueClass';
import { Graph } from '../graph-class';
import { TCallfn, strnum } from '../../types';

const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

type TDictGraph = Dictionary<strnum, strnum[]>;

function initializeColor(vertices: strnum[]): TDictGraph {
  const color: TDictGraph = new Dictionary();

  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
}

// algorithm BFS(Breadth-First Search)
export function breadthFirstSearch(graph: Graph<strnum>, startVertex: strnum, callback?: TCallfn) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  // will store the vertices to be visited and explored.
  const queue = new Queue<strnum>();
  queue.enqueue(startVertex); // begin

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);

    color[u] = Colors.GREY;

    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];

      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
    if (callback) {
      callback(u);
    }
  }
}
// improved function
// u -> Vertex | w -> neighbor
export function BFS(graph: Graph<strnum>, startVertex: strnum) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const distances: unknown = {};
  const predecessors: unknown = {};
  // will store the vertices to be visited and explored.
  const queue = new Queue<strnum>();
  queue.enqueue(startVertex); // begin

  for (let i = 0; i < vertices.length; i++) {
    distances[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }

  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);

    color[u] = Colors.GREY;

    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];

      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1;
        predecessors[w] = u;
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    distances,
    predecessors,
  };
}
