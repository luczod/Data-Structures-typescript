import Dictionary from '../../Dictionary-Hash/dictionary/dictionary-class';
import { Graph } from '../graph-class';
import { TCallfn, strnum } from '../../types';

const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

type TDictStrNum = Dictionary<strnum, strnum[]>;

function initializeColor(vertices: strnum[]): TDictStrNum {
  const color: TDictStrNum = new Dictionary();
  // All vertices start WHITE because they have not been visited
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
}

export function depthFirstSearch(graph: Graph<strnum>, callback?: TCallfn) {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback);
    }
  }
}

function depthFirstSearchVisit(
  u: strnum,
  color: TDictStrNum,
  adjList: TDictStrNum,
  callback?: TCallfn,
) {
  // Vertex(u) is visited, we mark it as discovered
  color[u] = Colors.GREY;
  if (callback) {
    callback(u);
  }
  // get the list of neighbors vertex u
  const neighbors = adjList.get(u); // retern a array
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    // the unvisited(w) neighbor is white
    if (color[w] === Colors.WHITE) {
      // (w) is the vertex(u) that will be visited
      depthFirstSearchVisit(w, color, adjList, callback); // recursion
    }
  }

  color[u] = Colors.BLACK;
}
