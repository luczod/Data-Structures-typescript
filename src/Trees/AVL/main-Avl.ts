import { AVLTree } from './avl-tree';

const tree = new AVLTree<number>();
tree.insert(1, 2, 3, 4, 5, 6, 7, 14, 15);
tree.insert(13, 12, 11);
console.log(tree.getRoot()); // Maximum call stack size exceeded
