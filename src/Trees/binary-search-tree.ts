import { NodeBST } from './models/tree-models';
import { ITree } from './tree';
import { Compare, TCompareFunction } from './types';
import { defaultCompare } from './utils';

export default class BinarySearchTree<K> implements ITree {
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

  search(key: K): boolean {
    return this.searchNode(this.root, key);
  }

  remove(key: K): void {
    this.root = this.removeNode(this.root, key);
  }

  min(): NodeBST<K> {
    return this.minNode(this.root);
  }

  max(): NodeBST<K> {
    return this.maxNode(this.root);
  }

  isEmpty(): boolean {
    return this.root == null;
  }

  getRoot() {
    return this.root;
  }

  size(): number {
    let count = 0;
    const countFn = (value: K) => (count += 1);
    this.inOrderTraverse(countFn);
    return count;
  }

  protected insertOne(key: K): void {
    if (this.root == null) {
      this.root = new NodeBST(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  protected insertNode(node: NodeBST<K>, key: K): void {
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

  protected inOrderTraverseNode(node: NodeBST<K>, callback: (key: K) => any): void {
    // base case
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback); // recursion
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  protected preOrderTraverseNode(node: NodeBST<K>, callback: (key: K) => any): void {
    // base case
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback); // recursion
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  protected postOrderTraverseNode(node: NodeBST<K>, callback: (key: K) => any): void {
    // base case
    if (node != null) {
      callback(node.key);
      this.postOrderTraverseNode(node.left, callback); // recursion
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key); // New
    }
  }

  protected searchNode(node: NodeBST<K>, key: K): boolean {
    // base case
    if (node == null) {
      return false;
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key); // recursion
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right, key);
      // when key is not less or bigger, that is equal
    } else {
      return true;
    }
  }

  protected removeNode(node: NodeBST<K>, key: K): NodeBST<K> | null {
    if (node == null) {
      return null;
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // key is equal to node.item
      // case 1 - leaf
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }
      // case 2 - has ONE child, left OR right
      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }
      // case 3 - has TWO child, left AND right
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);

      return node;
    }
  }

  protected minNode(node: NodeBST<K>): NodeBST<K> {
    let current = node;

    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  protected maxNode(node: NodeBST<K>): NodeBST<K> {
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
