import { NodeBST } from './models/tree-models';
import { Compare, TCompareFunction } from './types';
import { defaultCompare } from './utils';

export default class BinarySearchTree<K> {
  protected root: NodeBST<K>;

  constructor(protected compareFn: TCompareFunction<K> = defaultCompare) {}

  insert(...keys: K[]): void {
    keys.forEach((key) => this.insertOne(key));
  }

  inOrderTraverse(callback: (key: K) => any): void {
    this.inOrderTraverseNode(this.root, callback);
  }

  preOrderTraverse(callback: (key: K) => any): void {
    this.preOrderTraverseNode(this.root, callback);
  }

  postOrderTraverse(callback: (key: K) => any): void {
    this.postOrderTraverseNode(this.root, callback);
  }

  min(): NodeBST<K> {
    return this.minNode(this.root);
  }

  max(): NodeBST<K> {
    return this.maxNode(this.root);
  }

  private insertOne(key: K): void {
    if (this.root == null) {
      this.root = new NodeBST(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  private insertNode(node: NodeBST<K>, key: K): void {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // base case
      if (node.left == null) {
        node.left = new NodeBST<K>(key);
      } else {
        this.insertNode(node.left, key); // recursion
      }
    } else {
      if (node.right == null) {
        node.right = new NodeBST<K>(key);
      } else {
        this.insertNode(node.right, key); // recursion
      }
    }
  }

  private inOrderTraverseNode(node: NodeBST<K>, callback: (key: K) => any): void {
    // base case
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback); // recursion
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  private preOrderTraverseNode(node: NodeBST<K>, callback: (key: K) => any): void {
    // base case
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback); // recursion
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  private postOrderTraverseNode(node: NodeBST<K>, callback: (key: K) => any): void {
    // base case
    if (node != null) {
      callback(node.key);
      this.postOrderTraverseNode(node.left, callback); // recursion
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key); // New
    }
  }

  private minNode(node: NodeBST<K>): NodeBST<K> {
    let current = node;

    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  private maxNode(node: NodeBST<K>): NodeBST<K> {
    let current = node;

    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  show(): void {
    console.log(this.root);
  }
}
