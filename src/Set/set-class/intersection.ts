import { SetCls } from './set-class';

const setA = new SetCls<number>();

setA.add(1, 2, 2, 3, 4);
console.log(setA);

const setB = new SetCls<number>();
setB.add(3, 4);
console.log(setB);

const intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());
