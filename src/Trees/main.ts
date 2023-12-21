import BinarySearchTree from './binary-search-tree';

const tree = new BinarySearchTree<number>();
tree.insert(11);
tree.insert(7, 15, 5, 3, 9, 8, 10, 13, 12);
tree.insert(14, 20, 18, 25);
tree.insert(6);
// tree.show();
const printNode = (value: number) => console.log(value);
tree.inOrderTraverse(printNode);
