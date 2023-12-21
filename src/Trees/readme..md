- **BST (Binary Search Tree)**
  As with linked lists, we will work with pointers again
  (references) to represent the connection between nodes
  (called edges in tree terminology).

- **this.compareFn(key, node.key) === Compare.LESS_THAN**
  If the node's key is less than the current node's key (in this case it is the root),
  we must check the left child of the node.

- **inOrderTraverse**
  From smallest to largest

- **preOrderTraverse**
  visits the root node first, then the left node, and then
  end, the node on the right (page 251)

- **postOrderTraverse**
  Visits the left node first, then the right node, and then
  end, the root node (page 252)

- **Min and Max**
  For the minimum value, we will always traverse the left side of the
  tree; for the maximum value, we will always navigate to the right side of it. (page 255)

- **AVL vs Red-Black**
  if we need a self-balancing tree that involves MANY INSERTIONS
  OR FREQUENT REMOVALS, the red-black tree will be preferable. If the
  INSERTIONS AND REMOVALS are LESS FREQUENT (we are interested in
  frequent search operations), then the AVL tree will be preferable in
  relation to the red-black tree. (page 274)

- **Leaf**
  the node is a leaf, with no children at all
  left nor right

- **Node height**
  the height of a node is defined as the maximum number
  of edges, not for any of its heets.

- **Red Black Tree Rules**
  Each node is red or black.
  The root of the tree is black.
  All leaves(leaf) are black (nodes represented with NULL reference).
  If a node is red, then its two children are black.
  There cannot be two adjacent red nodes. A red node can have a red parent or child.
