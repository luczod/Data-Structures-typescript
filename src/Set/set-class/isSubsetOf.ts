import { SetCls } from './set-class';
/* A subset must have fewer or equal numbers
of elements than the set with which it is being compared. */

const setA = new SetCls<number>();
setA.add(1, 2);

const setB = new SetCls<number>();
setB.add(1, 2, 3);

const setC = new SetCls<number>();
setC.add(2, 3, 4);

console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));
