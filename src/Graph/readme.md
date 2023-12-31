- ### Graph

A graph is an abstract model of a network structure. A graph is a
set of NODES (OR VERTICES) connected by EDGES. Get to know the
graphs is important because any binary relationship can be
represented by a graph.
Any social network, such as Facebook, Twitter and Google+, can be
represented by a graph. We can also use graphs to represent roads,
flights and communications, as shown in the following image.

- ### Representing a graph

There is NO single correct way to represent a graph among the existing
possibilities. This will depend on the type of problem you will have
to solve and also the type of graph. (page 300)

- ### adjacent vertices

Directly connected, neighbors.

- ### BFS(Breadth-First Search) vs DFS(Depth-First Search)

To have EFFICIENT algorithms, we must visit each vertex at most twice.
BFS and DFS algorithms are very similar, but they have a difference
important, which is the data structure used to store the list
of vertices to be visited. (page 300)
DFS -> Stack | BFS -> Queue

- ### BFS (Breadth-First Search) -> Queue

The BFS (Breadth-First Search) algorithm begins
traversing the graph starting from the first specified vertex and visiting all
its neighbors (adjacent vertices) before, one layer of the graph at each
turn. (page 308)

- ### BFS in weightless graphs

the shortest route between city A and city B – one
algorithm used in GPS and Google Maps, BFS would
NOT be an appropriate algorithm. (page 313)

- ### DFS (Depth-First Search) -> Stack

Mark vertex v as uncovered (gray).
The unvisited neighbors (white) w of v, visit vertex w.

- ### COLORS

White: indicates that the vertex has not yet been visited;
Gray: indicates that the vertex was visited, but not explored;
Black: indicates that the vertex has been fully explored.

- ### Parameters by value and by reference

If we modify this value, the new value will have a valid scope only within the function.
When parameters are passed as references (objects), if we modify any property of the object,
we will be modifying its value. (page 319)

- ### Topsort

When there is a need to specify the order in which some
tasks or steps must be performed, we call Topsort (page 321)

- ### Dijkstra

Dijkstra's algorithm is a greedy algorithm for calculating the
shortest path between a single origin and all other vertices. (page 323)

- ### Floyd-Warshall

With this algorithm, we can find the shortest path to
from all origins to all vertices.

- ### Minimum Spanning Tree (MST)

There are two main algorithms for finding MSTs: the
Prim and Kruskal's algorithm
