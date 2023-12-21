import { RedBlackTree } from './red-black-tree';

const tree = new RedBlackTree<number>();
tree.insert(1);
console.log(tree.getRoot()); //  1, Colors.BLACK);
console.log('----------------');

tree.insert(2);
// console.log(tree.getRoot()); //  1, Colors.BLACK
console.log('----------------');
console.log(tree.getRoot().right); //  2, Colors.RED
