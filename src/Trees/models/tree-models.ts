// BST (Binary Search Tree)
export class NodeBST<T> {
  constructor(
    public key: T,
    public left?: NodeBST<T>,
    public right?: NodeBST<T>,
  ) {}
}
