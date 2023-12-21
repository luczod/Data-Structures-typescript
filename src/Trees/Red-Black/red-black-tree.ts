import BinarySearchTree from '../BST/binary-search-tree';
import { NodeRedBlack } from '../models/tree-models';
import { Colors, Compare, TCompareFunction } from '../types';
import { defaultCompare } from '../utils';

export class RedBlackTree<K> extends BinarySearchTree<K> {
  // Rubro
  protected root: NodeRedBlack<K>;

  constructor(protected compareFn: TCompareFunction<K> = defaultCompare) {
    super(compareFn);
  }

  insert(...keys: K[]): void {
    keys.forEach((key) => this.insertOne(key));
  }

  getRoot() {
    return this.root;
  }

  protected insertOne(key: K): void {
    if (this.root == null) {
      this.root = new NodeRedBlack(key);
      this.root.color = Colors.BLACK;
    } else {
      const newNode = this.insertNode(this.root, key);
      this.fixTreeProperties(newNode);
    }
  }

  protected insertNode(node: NodeRedBlack<K>, key: K): NodeRedBlack<K> {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new NodeRedBlack(key);
        node.left.parent = node; // New

        return node.left;
      } else {
        return this.insertNode(node.left, key);
      }
    } else if (node.right == null) {
      node.right = new NodeRedBlack(key);
      node.right.parent = node; // New

      return node.right;
    } else {
      return this.insertNode(node.right, key);
    }
  }

  private fixTreeProperties(node: NodeRedBlack<K>): void {
    while (node && node.parent && node.parent.color === Colors.RED && node.color !== Colors.BLACK) {
      let parent = node.parent;
      const grandParent = parent.parent;

      // case A
      if (grandParent && grandParent.left === parent) {
        const uncle = grandParent.right;

        // case 1: uncle of node is also red - only recoloring
        if (uncle && uncle.isRed()) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // case 2: node is right child - left rotate
          if (node === parent.right) {
            this.rotationRR(parent);
            node = parent;
            parent = node.parent;
          }

          // case 3: node is left child - right rotate
          this.rotationLL(grandParent);
          // swap color
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      } else {
        // case B: parent is right child of grandparent
        const uncle = grandParent.left;
        // case 1: uncle is read - only recoloring
        if (uncle && uncle.isRed()) {
          grandParent.color = Colors.RED;
          parent.color = Colors.BLACK;
          uncle.color = Colors.BLACK;
          node = grandParent;
        } else {
          // case 2: node is left child - left rotate
          if (node === parent.left) {
            this.rotationLL(parent);
            node = parent;
            parent = node.parent;
          }
          // case 3: node is right child - left rotate
          this.rotationRR(grandParent);
          // swap color
          parent.color = Colors.BLACK;
          grandParent.color = Colors.RED;
          node = parent;
        }
      }
    }
    this.root.color = Colors.BLACK;
  }

  private rotationLL(node: NodeRedBlack<K>): NodeRedBlack<K> {
    const tmp = node.left;
    node.left = tmp.right;

    if (tmp.right && tmp.right.key) {
      tmp.right.parent = node;
    }
    tmp.parent = node.parent;

    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.right = node;
    node.parent = tmp;

    return tmp;
  }

  private rotationRR(node: NodeRedBlack<K>): NodeRedBlack<K> {
    const tmp = node.right;
    node.right = tmp.left;

    if (tmp.left && tmp.left.key) {
      tmp.left.parent = node;
    }
    tmp.parent = node.parent;

    if (!node.parent) {
      this.root = tmp;
    } else {
      if (node === node.parent.left) {
        node.parent.left = tmp;
      } else {
        node.parent.right = tmp;
      }
    }
    tmp.left = node;
    node.parent = tmp;

    return tmp;
  }
}
