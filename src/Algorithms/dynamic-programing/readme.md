- **Algorithm designs and techniques**
  The algorithms can devise a solution using the iterative approach
  or make the code more readable using recursion. (page 367)

- **Divide and conquer**
  The problem is divided into smaller subproblems,
  similar to the original problem; subproblems are solved
  recursively and the solutions of the subproblems are
  combined in order to solve the original problem
  (The merge and quick sort algorithms).

- **Binary search**
  The binarySearchRecursive function implements the divide and conquer algorithm.
  We start by passing the low parameter as 0 and the high parameter as sortedArray.length − 1
  to search the complete sorted array. After calculating what the index of the mid element is,
  we check if this element is smaller than the value we are looking for.

- **Dynamic programming**
  Note that the dynamic programming approach is different from divide and conquer approach.
  While the divide and conquer divides the problem into INDEPENDENT subproblems and then
  combines the solutions, dynamic programming divides the problem into DEPENDENT subproblems.
  (Fibonacci).

- **Shortest paths between all pairs in a graph**
  consists of finding the shortest path from vertex(u) to vertex(v) for all pairs of vertices (u, v)
  (Floyd-Warshall algorithm).

- **Minimum number of coins for change**
  For example, the following denominations (currencies):
  (d1 = 1, d2 = 5, d3 = 10 and d4 = 25). If we need change from 36 cents,
  we can use a coin 25 cents, a 10 cent coin and a 1 cent coin.
  How can we turn this solution into an algorithm?
