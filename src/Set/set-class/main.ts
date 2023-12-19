import { SetCls } from './set-class';

const setA = new SetCls<number>();

setA.add(1, 2, 2, 3, 4);
console.log(setA.values()); // [1, 2, 3, 4]
console.log(setA.has(1)); // true
console.log(setA.size()); // 4
setA.add(2);
console.log('---');
setA.delete(1);
console.log(setA.values()); // [2, 3, 4]
setA.delete(2);
console.log(setA.values()); // [3, 4]
