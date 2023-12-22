- **Graph**
  A graph is an abstract model of a network structure. A graph is a
  set of NODES (OR VERTICES) connected by EDGES. Get to know the
  graphs is important because any binary relationship can be
  represented by a graph.
  Any social network, such as Facebook, Twitter and Google+, can be
  represented by a graph. We can also use graphs to represent roads,
  flights and communications, as shown in the following image.

- **Representing a graph**
  There is NO single correct way to represent a graph among the existing
  possibilities. This will depend on the type of problem you will have
  to solve and also the type of graph. (page 300)

- **adjacent vertices**
  Directly connected, neighbors.

- **BFS(Breadth-First Search) vs DFS(Depth-First Search)**
  To have EFFICIENT algorithms, we must visit each vertex at most twice.
  BFS and DFS algorithms are very similar, but they have a difference
  important, which is the data structure used to store the list
  of vertices to be visited. (page 300)
  DFS -> Queue | BFS -> Stack

- **BFS (Breadth-First Search) -> Stack**
  The BFS (Breadth-First Search) algorithm begins
  traversing the graph starting from the first specified vertex and visiting all
  its neighbors (adjacent vertices) before, one layer of the graph at each
  turn. (page 308)

- **BFS in weightless graphs**
  the shortest route between city A and city B – one
  algorithm used in GPS and Google Maps, BFS would
  NOT be an appropriate algorithm. (page 313)

- **DFS (Depth-First Search) -> Queue**
  Mark vertex v as uncovered (gray).
  The unvisited neighbors (white) w of v, visit vertex w.

- **COLORS**
  White: indicates that the vertex has not yet been visited;
  Gray: indicates that the vertex was visited, but not explored;
  Black: indicates that the vertex has been fully explored.
