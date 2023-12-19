import { SetCls } from './set-class';

const setA = new SetCls<number>();
setA.add(1, 2, 2, 3, 4);
setA.add(2);

const setB = new SetCls<number>();
setB.add(3, 4, 5, 6);

/* The difference method will return all elements that are
present in A, but not in B. */
const differenceAB = setA.difference(setB);
console.log('difference', differenceAB.values());
