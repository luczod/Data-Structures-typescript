export function floydWarshall(graph: number[][]) {
  // number[][] -> "matrix"
  // i -> index
  const dist: number[][] = [];
  const length = graph.length;

  for (let i = 0; i < length; i++) {
    dist[i] = [];
    for (let j = 0; j < length; j++) {
      if (i === j) {
        // The distance from the vertex to itself is 0
        dist[i][j] = 0;
      } else if (!isFinite(graph[i][j])) {
        // If there is no edge between two vertices
        dist[i][j] = Infinity;
      } else {
        // the minimum possible distance between i and j
        // is the weight of these vertices
        dist[i][j] = graph[i][j];
      }
    }
  }
  // the shortest path between i and j is given by k
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        // The formula used to calculate the shortest path
        // between i and j through vertex k
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}
