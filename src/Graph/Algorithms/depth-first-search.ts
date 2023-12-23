import Dictionary from '../../Dictionary-Hash/dictionary/dictionary-class';
import { Graph } from '../graph-class';
import { TCallfn, strnum } from '../../types';

const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};

type TDictStrNum = Dictionary<strnum, strnum[]>;

type returnDFS = {
  discovery: any;
  finished: any;
  predecessors: any;
};

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
): void {
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

export function DFS(graph: Graph<strnum>): returnDFS {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);

  const discovery: any = {};
  const finished: any = {};
  const predecessors: any = {};
  const time = { count: 0 };
  // initializing the arrays
  for (let i = 0; i < vertices.length; i++) {
    finished[vertices[i]] = 0;
    discovery[vertices[i]] = 0;
    predecessors[vertices[i]] = null;
  }

  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, discovery, finished, predecessors, time, adjList);
    }
  }

  return {
    discovery,
    finished,
    predecessors,
  };
}

const DFSVisit = (
  u: strnum,
  color: TDictStrNum,
  d: any,
  f: any,
  p: any,
  time: any,
  adjList: TDictStrNum,
) => {
  // console.log('discovered ' + u);
  // Vertex(u) is visited, we mark it as discovered
  color[u] = Colors.GREY;
  d[u] = ++time.count; // discovered register
  const neighbors = adjList.get(u);

  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      p[w] = u; // predecessor()
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }

  color[u] = Colors.BLACK;
  f[u] = ++time.count; // finished register
  // console.log('explored ' + u);
};
