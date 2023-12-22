import { Colors } from '../types';

// BST (Binary Search Tree)
export class NodeBST<T> {
  constructor(
    public key: T,
    public left?: NodeBST<T>,
    public right?: NodeBST<T>,
  ) {}
}

export class NodeRedBlack<T> extends NodeBST<T> {
  public left: NodeRedBlack<T>;
  public right: NodeRedBlack<T>;
  public parent: NodeRedBlack<T>;
  public color: Colors;

  constructor(public key: T) {
    super(key);
    this.color = Colors.RED;
  }

  isRed() {
    return this.color === Colors.RED;
  }
}
