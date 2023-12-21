import BinarySearchTree from '../BST/binary-search-tree';
import { NodeBST } from '../models/tree-models';
import { BalanceFactor, Compare, TCompareFunction } from '../types';
import { defaultCompare } from '../utils';

export class AVLTree<K> extends BinarySearchTree<K> {
  constructor(protected compareFn: TCompareFunction<K> = defaultCompare) {
    super(compareFn);
  }

  getNodeHeight(node: NodeBST<K>): number {
    if (node == null) {
      return -1;
    }

    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  getBalanceFactor(node: NodeBST<K>): number {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);

    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  }

  private rotationLL(node: NodeBST<K>): NodeBST<K> {
    const tmp = node.left;
    node.left = tmp.right;
    tmp.right = node;

    return tmp;
  }

  private rotationRR(node: NodeBST<K>): NodeBST<K> {
    const tmp = node.right;
    node.right = tmp.left;
    tmp.left = node;

    return tmp;
  }

  private rotationLR(node: NodeBST<K>): NodeBST<K> {
    // first rotationLL after rotatitonRR
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  private rotationRL(node: NodeBST<K>): NodeBST<K> {
    // first rotationRR after rotatitonLL
    node.left = this.rotationLL(node.right);
    return this.rotationRR(node);
  }

  protected insertNode(node: NodeBST<K>, key: K): NodeBST<K> {
    // same in bst
    if (node == null) {
      return new NodeBST(key);
    } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      node.left = this.insertNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node;
    }
    // balance the tree if necessary
    const balanceFactor = this.getBalanceFactor(node);

    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }
    return node;
  }

  protected removeNode(node: NodeBST<K>, key: K): NodeBST<K> {
    node = super.removeNode(node, key);
    if (node == null) {
      return node;
    }
    // verify if tree is balanced
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
        // Left Left case
        node = this.rotationLL(node);
      } else {
        // Left Right case
        node = this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
        // Right Right case
        node = this.rotationRR(node);
      } else {
        // Right Left case
        node = this.rotationRL(node);
      }
    }
    return node;
  }
}
