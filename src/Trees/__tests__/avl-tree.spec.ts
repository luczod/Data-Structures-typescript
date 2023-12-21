import { beforeEach, describe, expect, it } from 'vitest';
import { AVLTree } from '../AVL/avl-tree';
describe('AVLTree', () => {
  let tree: AVLTree<number>;

  beforeEach(() => {
    tree = new AVLTree<number>();
  });

  it('starts empty', () => {
    expect(tree.getRoot()).toEqual(undefined);
  });

  it('inserts elements in the AVLTree', () => {
    expect(tree.getRoot()).toEqual(undefined);

    tree.insert(1, 2, 3, 4, 5, 6, 7, 14, 15);
    tree.insert(13, 12);
  });
});
